const c = document.getElementById("canvas");
const parent = c.parentElement;
c.width = window.innerWidth * 0.8;

let attraction = {
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
    console.log("pressed");

    switch (gfg.keyCode) {
        case w:
            attraction.y -= 1;
            break;
        case s:
            attraction.y += 1;
            break;
        case a:
            attraction.x -= 1;
            break;
        case d:
            attraction.x += 1;
            break;

        default:
            break;
    }

    console.log(attraction);

    attraction.r = Math.tan(
        (center.x - attraction.y) / (center.y - attraction.x)
    );
};

const center = {
    x: c.width / 2,
    y: c.height / 2,
};

function draw() {
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.beginPath();

    const a = {
        x: Math.sin((Math.PI / 180) * attraction.r),
        y: Math.cos((Math.PI / 180) * attraction.r),
        r: attraction.r,
    };

    const numberOfRays = 16;
    let rays = [];
    for (let i = 0; i < numberOfRays; i++) {
        const r = (360 / numberOfRays) * i;
        let ray = {
            x: Math.sin((Math.PI / 180) * r),
            y: Math.cos((Math.PI / 180) * r),
            dot:1,
        };

        const dot = ray.x * a.x + ray.y * a.y;

        ray.x = ray.x * dot * 100;
        ray.y = ray.y * dot * 100;
        ray.dot = dot

        rays.push(ray);
    }

    ctx.rect(attraction.x, attraction.y, 10, 10);
    ctx.fill();

    // Render agent
    ctx.save();

    ctx.translate(center.x, center.y);

    ctx.lineWidth = 1;
    for (const ray of rays) {
        if (ray.dot > 0)
        ctx.strokeStyle = "gray";else ctx.strokeStyle = "red";
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(ray.x, ray.y);
        ctx.stroke();
    }

    ctx.restore();

    requestAnimationFrame(draw);
}
draw();
