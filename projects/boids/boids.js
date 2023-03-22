const c = document.getElementById("canvas");
const parent = c.parentElement;
c.width = window.innerWidth * 0.8;

let agents = [];

// Generate boids
for (let i = 0; i < 100; i++) {
    agents.push({
        x: Math.random() * c.width,
        y: Math.random() * c.height,
        r: (Math.PI / 180) * (Math.random() * 360),
    });
}

var ctx = c.getContext("2d");

const agent = (() => {
    const sideLength = 20;
    const triangleHeight = Math.sqrt(
        sideLength * sideLength - (sideLength / 2) * (sideLength / 2)
    );

    let a = new Path2D();
    a.moveTo(0 - sideLength / 2, 0 - triangleHeight / 2);
    a.lineTo(0 + sideLength / 2, 0 - triangleHeight / 2);
    a.lineTo(0, 0 + triangleHeight / 2);
    a.lineTo(0 - sideLength / 2, 0 - triangleHeight / 2);
    a.closePath();

    return a;
})();

function draw() {
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.beginPath();

    // let newAgents = [];
    // for (let i = 0; i < agents.length; i++) {
    const a = agents[0];

    let agentIndexNear = [];
    for (let j = 0; j < agents.length; j++) {
        const agent = agents[j];

        if (agent == a) continue;

        const xDistance = a.x - agent.x;
        const yDistance = a.y - agent.y;
        const distance = Math.sqrt(
            xDistance * xDistance + yDistance * yDistance
        );

        if (distance < 40) agentIndexNear.push(j);
    }
    console.log(agentIndexNear);

    const numberOfRays = 8;
    let rays = [];
    for (let i = 0; i < numberOfRays; i++) {
        const r = (360 / numberOfRays) * i;
        const ray = {
            x: Math.sin((Math.PI / 180) * r) * 20,
            y: Math.cos((Math.PI / 180) * r) * 20,
        };

        let dot = 0;
        for (const agentIndex of agentIndexNear) {
            const agent = agents[agentIndex];
            dot +=
                (ray.x / 20) * ((agent.x - a.x) / 20) +
                (ray.y / 20) * ((agent.y - a.y) / 20);
        }
        dot /= agentIndexNear.length;
        console.log(dot);

        if (!dot) {
            ray.x *= dot;
            ray.y *= dot;
        }

        rays.push(ray);
    }

    // Render agent
    ctx.save();

    ctx.translate(a.x, a.y);
    ctx.rotate(a.r);

    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.lineWidth = 5;
    ctx.moveTo(0, 0);
    ctx.lineTo(0, 30);
    ctx.stroke();

    ctx.fill(agent);

    ctx.lineWidth = 1;
    ctx.strokeStyle = "gray";
    for (const ray of rays) {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(ray.x, ray.y);
        ctx.stroke();
    }

    ctx.restore();
    // }

    // requestAnimationFrame(draw);
}
draw();
