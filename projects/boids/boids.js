const c = document.getElementById("canvas");
const parent = c.parentElement;
c.width = window.innerWidth * 0.8;

let agents = [];

// Generate boids
for (let i = 0; i < 50; i++) {
    agents.push({
        x: Math.random() * c.width,
        y: Math.random() * c.height,
        r: Math.random() * (Math.PI * 2),
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

    let newAgents = [];
    for (let i = 0; i < agents.length; i++) {
        const a = agents[i];

        let agentIndexNear = [];
        for (let j = 0; j < agents.length; j++) {
            const agent = agents[j];

            if (agent == a) continue;

            const xDistance = a.x - agent.x;
            const yDistance = a.y - agent.y;
            const distance = Math.sqrt(
                xDistance * xDistance + yDistance * yDistance
            );

            if (distance < 60) agentIndexNear.push(j);
        }

        const numberOfRays = 16;
        let rays = [];
        for (let i = 0; i < numberOfRays; i++) {
            const r = ((Math.PI * 2) / numberOfRays) * i;
            const ray = {
                x: Math.cos(r),
                y: Math.sin(r),
                r,
                dot: 0,
            };

            if (agentIndexNear.length) {
                for (const agentIndex of agentIndexNear) {
                    const r = agents[agentIndex].r;
                    const agent = {
                        x: Math.cos(r),
                        y: Math.sin(r),
                        r: r,
                    };

                    ray.dot += agent.x * ray.x + agent.y * ray.y;
                }
                ray.dot /= agentIndexNear.length + 1;

                ray.x = ray.x * ray.dot * (ray.dot > 0 ? 40 : -20);
                ray.y = ray.y * ray.dot * (ray.dot > 0 ? 40 : -20);
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

        ctx.restore();
        ctx.save();
        ctx.translate(a.x, a.y);
        ctx.lineWidth = 1;
        let largestRay = { dot: 0 };
        for (const ray of rays) {
            if (ray.dot > largestRay.dot) largestRay = ray;

            if (ray.dot >= 0) ctx.strokeStyle = "gray";
            else ctx.strokeStyle = "red";

            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(ray.x, ray.y);
            ctx.stroke();
        }
        ctx.beginPath();
        ctx.strokeStyle = "blue";
        ctx.arc(0, 0, 60, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.restore();

        const normLargestRay = {
            x: Math.cos(largestRay.r),
            y: Math.sin(largestRay.r),
            r: largestRay.r,
        };
        console.log(normLargestRay);
        newAgents.push({
            x: a.x + normLargestRay.x,
            y: a.y + normLargestRay.y,
            r: normLargestRay.r,
        });
    }
    agents = newAgents;

    requestAnimationFrame(draw);
}
draw();
