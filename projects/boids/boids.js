const c = document.getElementById("canvas");
const parent = c.parentElement;
c.width = window.innerWidth * 0.8;

const center = {
    x: c.width / 2,
    y: c.height / 2,
};
let agents = [];
for (let i = 0; i < 0; i++) {
    agents.push({
        x: Math.random() * c.width,
        y: Math.random() * c.height,
        r: Math.random() * 2 * Math.PI,
    });
}

var ctx = c.getContext("2d");

function draw() {
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.beginPath();

    const newAgents = [];
    for (const a of agents) {
        let newAgent = { ...a };

        let rays = [];
        const numberOfRays = 16;
        for (let i = 0; i < numberOfRays; i++) {
            const r = ((2 * Math.PI) / numberOfRays) * i;
            let ray = {
                x: Math.sin(r),
                y: Math.cos(r),
                dot: 1,
                r,
            };

            let nearbyAgents = 0;
            let dot = 0;
            for (const agent of agents) {
                const xDistance = agent.x - a.x;
                const yDistance = agent.y - a.y;
                if (
                    Math.sqrt(xDistance * xDistance + yDistance * yDistance) <
                        60 &&
                    agent != a
                ) {
                    const otherAgent = {
                        x: Math.cos(agent.r),
                        y: Math.sin(agent.r),
                        r: agent.r,
                    };

                    dot += otherAgent.x * ray.x + otherAgent.y * ray.y;
                    nearbyAgents++;
                }
            }
            dot /= nearbyAgents;
            newAgent.nearby = nearbyAgents;

            if (nearbyAgents == 0) {
                dot = Math.sin(a.r) * ray.x + Math.cos(a.r) * ray.y;
            }

            ray.x = ray.x * dot;
            ray.y = ray.y * dot;
            ray.dot = dot;

            rays.push(ray);
        }

        for (let i = 0; i < agents.length; i++) {
            const agent = agents[i];

            if (i == 0) ctx.fillStyle = "blue";
            else ctx.fillStyle = "black";
            ctx.beginPath();
            ctx.rect(agent.x - 5, agent.y - 5, 10, 10);
            ctx.fill();
            ctx.globalCompositeOperation = "destination-over";

            ctx.beginPath();
            ctx.lineWidth = 1;
            ctx.strokeStyle = "blue";
            ctx.arc(agent.x, agent.y, 60, 0, 2 * Math.PI);
            ctx.stroke();
        }

        // Render agent
        ctx.save();

        ctx.translate(a.x, a.y);

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

        ctx.lineWidth = 3;
        ctx.strokeStyle = "orange";
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(Math.sin(a.r) * 20, Math.cos(a.r) * 20);
        ctx.stroke();

        ctx.restore();

        const distPlus = (largestRay.r - a.r + 2 * Math.PI) % (2 * Math.PI);
        const distMinus = (a.r - largestRay.r + 2 * Math.PI) % (2 * Math.PI);

        if (
            document.getElementById("playButton").classList.contains("playing")
        ) {
            if (distPlus > Math.PI / 180 || distMinus > Math.PI / 180) {
                if (distMinus < distPlus) newAgent.r -= Math.PI / 180;
                else newAgent.r += Math.PI / 180;
            }

            newAgent.r += 2 * Math.PI;
            newAgent.r %= 2 * Math.PI;

            newAgent.x += Math.sin(newAgent.r);
            newAgent.y += Math.cos(newAgent.r);
        }

        newAgents.push({ ...newAgent, largestRay });
    }
    ctx.font = "30px Arial";
    ctx.fillText(`x: ${agents[0].x}deg`, 0, 30);
    ctx.fillText(`y: ${agents[0].y}deg`, 0, 60);
    ctx.fillText(`r: ${agents[0].r * (180 / Math.PI)}deg`, 0, 90);
    ctx.fillText(`nearby: ${agents[0].nearby}`, 0, 120);

    agents = newAgents;
    requestAnimationFrame(draw);
}
draw();
