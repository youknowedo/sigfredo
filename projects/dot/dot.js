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
let toA = {
    x: 0,
    y: 0,
    r: 1,
};

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

    let medianR = 0;
    for (const a of attractions) {
        medianR += a.r;
    }
    medianR /= attractions.length;
    toA = {
        x: Math.cos(medianR),
        y: Math.sin(medianR),
        r: medianR,
    };

    const numberOfRays = 16;
    let rays = [];
    for (let i = 0; i < numberOfRays; i++) {
        const r = ((2 * Math.PI) / numberOfRays) * i;
        let ray = {
            x: Math.sin(r),
            y: Math.cos(r),
            dot: 1,
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

        ray.x = ray.x * dot * (dot > 0 ? 40 : -20);
        ray.y = ray.y * dot * (dot > 0 ? 40 : -20);
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

    ctx.lineWidth = 1;
    for (const ray of rays) {
        if (ray.dot > 0) ctx.strokeStyle = "gray";
        else ctx.strokeStyle = "red";
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(ray.x, ray.y);
        ctx.stroke();
    }

    ctx.lineWidth = 3;
    ctx.strokeStyle = "orange";
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(toA.x * 20, toA.y * 20);
    ctx.stroke();

    ctx.restore();

    requestAnimationFrame(draw);
}
draw();
