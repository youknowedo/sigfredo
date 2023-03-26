const c = document.getElementById("canvas");
const parent = c.parentElement;
c.width = window.innerWidth * 0.8;

const center = {
    x: c.width / 2,
    y: c.height / 2,
};
let attractions = [
    {
        x: center.x,
        y: center.y,
        r: 1,
    },
];
let attractionIndex = 0;
let rotation = 0;
let rays = [];

var ctx = c.getContext("2d");

window.onkeypress = function (gfg) {
    const w = 119;
    const a = 97;
    const s = 115;
    const d = 100;
    const space = 32;

    switch (gfg.keyCode) {
        case w:
            attractions[attractionIndex].y -= 5;
            break;
        case s:
            attractions[attractionIndex].y += 5;
            break;
        case a:
            attractions[attractionIndex].x -= 5;
            break;
        case d:
            attractions[attractionIndex].x += 5;
            break;
        case space:
            attractions.push({
                x: center.x,
                y: center.y,
                r: 1,
            });
            attractionIndex++;
            break;

        default:
            break;
    }

    let x = attractions[attractionIndex].x - center.x;
    let y = attractions[attractionIndex].y - center.y;
    const xy = y / x;

    attractions[attractionIndex].r =
        Math.atan(isFinite(xy) ? xy : xy * -1) - (x > 0 ? 0 : Math.PI);
};

function draw() {
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.beginPath();

    rays = [];
    const numberOfRays = 16;
    for (let i = 0; i < numberOfRays; i++) {
        const r = ((2 * Math.PI) / numberOfRays) * i;
        let ray = {
            x: Math.sin(r),
            y: Math.cos(r),
            dot: 1,
            r,
        };

        let dot = 0;
        for (const attraction of attractions) {
            const a = {
                x: Math.cos(attraction.r),
                y: Math.sin(attraction.r),
                r: attraction.r,
            };

            dot += a.x * ray.x + a.y * ray.y;
        }
        dot /= attractions.length;

        ray.x = ray.x * dot;
        ray.y = ray.y * dot;
        ray.dot = dot;

        rays.push(ray);
    }

    for (const a of attractions) {
        ctx.rect(a.x - 5, a.y - 5, 10, 10);
        ctx.fill();
    }

    // Render agent
    ctx.save();

    ctx.translate(center.x, center.y);

    let largestRay = { dot: 0 };
    ctx.lineWidth = 1;
    for (const ray of rays) {
        if (ray.dot > largestRay.dot) largestRay = ray;
    }
    for (const ray of rays) {
        ray.x /= largestRay.dot;
        ray.y /= largestRay.dot;

        ctx.lineWidth = 1;
        if (largestRay == ray) {
            ctx.lineWidth = 2;
            ctx.strokeStyle = "black";
        } else {
            if (ray.dot > 0) ctx.strokeStyle = "gray";
            else ctx.strokeStyle = "red";
        }

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(
            ray.x * (ray.dot > 0 ? 40 : -20),
            ray.y * (ray.dot > 0 ? 40 : -20)
        );
        ctx.stroke();
    }

    const distPlus = (largestRay.r - rotation + 2 * Math.PI) % (2 * Math.PI);
    const distMinus = (rotation - largestRay.r + 2 * Math.PI) % (2 * Math.PI);

    if (document.getElementById("playButton").classList.contains("playing")) {
        if (distPlus > Math.PI / 180 || distMinus > Math.PI / 180) {
            if (distMinus < distPlus) rotation -= Math.PI / 180;
            else rotation += Math.PI / 180;
        }

        rotation += 2 * Math.PI;
        rotation %= 2 * Math.PI;
    }

    ctx.lineWidth = 3;
    ctx.strokeStyle = "orange";
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(Math.sin(rotation) * 20, Math.cos(rotation) * 20);
    ctx.stroke();

    ctx.restore();

    ctx.font = "30px Arial";
    ctx.fillText(
        `rotation: ${(rotation * (180 / Math.PI)).toFixed(2)}deg`,
        0,
        30
    );
    ctx.fillText(`largest ray r: ${largestRay.r * (180 / Math.PI)}deg`, 0, 60);
    ctx.fillText(
        `distPlus: ${(distPlus * (180 / Math.PI)).toFixed(2)}deg`,
        0,
        90
    );
    ctx.fillText(
        `distMinus: ${(distMinus * (180 / Math.PI)).toFixed(2)}deg`,
        0,
        120
    );

    requestAnimationFrame(draw);
}
draw();
