const c = document.getElementById("canvas");
const parent = c.parentElement;
c.width = window.innerWidth * 0.8;

const center = {
    x: c.width / 2,
    y: c.height / 2,
};
let attraction = {
    x: center.x,
    y: center.y,
    r: 1,
};
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

    switch (gfg.keyCode) {
        case w:
            attraction.y -= 5;
            break;
        case s:
            attraction.y += 5;
            break;
        case a:
            attraction.x -= 5;
            break;
        case d:
            attraction.x += 5;
            break;

        default:
            break;
    }

    let x = attraction.x - center.x;
    let y = attraction.y - center.y;
    const xy = y / x;

    attraction.r =
        Math.atan(xy != Infinity && xy != -Infinity ? xy : xy * -1) -
        (x > 0 ? 0 : Math.PI);
    console.log("r " + (180 / Math.PI) * attraction.r);
};

function draw() {
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.beginPath();

    toA = {
        x: Math.cos(attraction.r),
        y: Math.sin(attraction.r),
        r: attraction.r,
    };

    const numberOfRays = 16;
    let rays = [];
    for (let i = 0; i < numberOfRays; i++) {
        const r = (360 / numberOfRays) * i;
        let ray = {
            x: Math.sin((Math.PI / 180) * r),
            y: Math.cos((Math.PI / 180) * r),
            dot: 1,
        };

        const dot = ray.x * toA.x + ray.y * toA.y;

        ray.x = ray.x * dot * 100;
        ray.y = ray.y * dot * 100;
        ray.dot = dot;

        rays.push(ray);
    }

    ctx.rect(attraction.x - 5, attraction.y - 5, 10, 10);
    ctx.fill();

    // Render agent
    ctx.save();

    ctx.translate(center.x, center.y);

    // ctx.lineWidth = 1;
    // for (const ray of rays) {
    //     if (ray.dot > 0) ctx.strokeStyle = "gray";
    //     else ctx.strokeStyle = "red";
    //     ctx.beginPath();
    //     ctx.moveTo(0, 0);
    //     ctx.lineTo(ray.x, ray.y);
    //     ctx.stroke();
    // }

    ctx.lineWidth = 3;
    ctx.strokeStyle = "purple";
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(attraction.x - center.x, attraction.y - center.y);
    ctx.stroke();
    ctx.strokeStyle = "orange";
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(toA.x * 20, toA.y * 20);
    ctx.stroke();

    ctx.restore();

    requestAnimationFrame(draw);
}
draw();
