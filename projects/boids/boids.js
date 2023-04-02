// Get html canvas
const canvas = document.getElementById("canvas");

// Constants
const nearAgentRadius = 80;
const closeAgentRadius = 30;
const wallPadding = 20;

let center = { x: 0, y: 0 };
let wallBalls = [];
window.onresize = () => {
    // Set the width of the canvas to 80% of the screen
    canvas.width = window.innerWidth * 0.8;

    // Set the center of the canvas
    center = {
        x: canvas.width / 2,
        y: canvas.height / 2,
    };

    const numOfHeightBalls = Math.ceil((canvas.height - wallPadding * 2) / 30);
    const heightSpacing = (canvas.height - wallPadding * 2) / numOfHeightBalls;

    const numOfWidthBalls = Math.ceil((canvas.width - wallPadding * 2) / 30);
    const widthSpacing = (canvas.width - wallPadding * 2) / numOfWidthBalls;

    wallBalls = [];
    for (let i = 0; i < numOfHeightBalls; i++) {
        wallBalls.push(
            {
                x: 20,
                y: heightSpacing * i + 20,
            },
            {
                x: widthSpacing * numOfWidthBalls + 20,
                y: heightSpacing * i + 20,
            }
        );
    }
    for (let i = 0; i < numOfWidthBalls; i++) {
        wallBalls.push(
            {
                y: 20,
                x: widthSpacing * i + 20,
            },
            {
                y: heightSpacing * numOfHeightBalls + 20,
                x: widthSpacing * i + 20,
            }
        );
    }
};
window.onresize();

// Generate agents
let agents = [];
for (let i = 0; i < 1; i++) {
    // Randomize position and rotation
    agents.push({
        x: Math.random() * (canvas.width - 60) + 30,
        y: Math.random() * (canvas.height - 60) + 30,
        r: Math.random() * 2 * Math.PI,
    });
}

var ctx = canvas.getContext("2d");

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();

    const newAgents = [];
    for (const a of agents) {
        let newAgent = { ...a };

        let nearbyAgents = [];
        let closeAgents = [];
        for (const agent of agents) {
            const xDistance = agent.x - a.x;
            const yDistance = agent.y - a.y;

            const distance = Math.sqrt(
                xDistance * xDistance + yDistance * yDistance
            );
            if (distance < nearAgentRadius && agent != a) {
                nearbyAgents.push(agent);

                if (distance < closeAgentRadius) closeAgents.push(agent);
            }
        }

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
            const forward = {
                x: Math.cos(a.r),
                y: Math.sin(a.r),
            };

            let nearby = 1;
            let dot = forward.x * ray.x + forward.y * ray.y;
            let medianPosition = { x: 0, y: 0 };
            for (const agent of nearbyAgents) {
                const toAgent = {
                    x: Math.cos(agent.r),
                    y: Math.sin(agent.r),
                };

                dot += toAgent.x * ray.x + toAgent.y * ray.y;
                medianPosition.x += agent.x;
                medianPosition.y += agent.y;
                nearby++;
            }
            medianPosition.x /= nearby;
            medianPosition.y /= nearby;

            const xDistanceToMedian = medianPosition.x - a.x;
            const yDistanceToMedian = medianPosition.y - a.y;
            const xy = xDistanceToMedian / yDistanceToMedian;

            const toMedianR =
                Math.atan(isFinite(xy) ? xy : xy * -1) -
                (xDistanceToMedian > 0 ? 0 : Math.PI);
            const toMedian = {
                x: Math.cos(toMedianR),
                y: Math.sin(toMedianR),
            };
            dot += toMedian.x * ray.x + toMedian.y * ray.y;

            for (const closeAgent of closeAgents) {
                const xDistance = closeAgent.x - a.x;
                const yDistance = closeAgent.y - a.y;
                const xy = xDistance / yDistance;

                const r =
                    Math.atan(isFinite(xy) ? xy : xy * -1) -
                    (xDistance > 0 ? 0 : Math.PI);

                const distance = Math.sqrt(
                    xDistance * xDistance + yDistance * yDistance
                );
                const toAgent = {
                    x: Math.cos(r),
                    y: Math.sin(r),
                };

                dot -=
                    (toAgent.x * ray.x + toAgent.y * ray.y) *
                    ((closeAgentRadius - distance) / closeAgentRadius) *
                    10;

                nearby++;
            }

            for (const wall of wallBalls) {
                const xDistance = wall.x - a.x;
                const yDistance = wall.y - a.y;
                const xy = xDistance / yDistance;

                const r =
                    Math.atan(isFinite(xy) ? xy : xy * -1) -
                    (xDistance > 0 ? 0 : Math.PI);

                const distance = Math.sqrt(
                    xDistance * xDistance + yDistance * yDistance
                );
                if (distance < nearAgentRadius) {
                    const w = {
                        x: Math.cos(r),
                        y: Math.sin(r),
                    };

                    dot -=
                        (w.x * ray.x + w.y * ray.y) *
                        ((nearAgentRadius - distance) / nearAgentRadius) *
                        10;

                    nearby++;
                }
            }

            if (nearby) dot /= nearby;
            newAgent.nearby = nearby;

            if (dot == 0) {
                dot = Math.sin(a.r) * ray.x + Math.cos(a.r) * ray.y;
            }

            ray.x = ray.x * dot;
            ray.y = ray.y * dot;
            ray.dot = dot;

            rays.push(ray);
        }

        for (const ball of wallBalls) {
            ctx.beginPath();
            ctx.fillStyle = "red";
            ctx.arc(ball.x, ball.y, 10, 0, 2 * Math.PI);
            ctx.fill();
        }

        for (let i = 0; i < agents.length; i++) {
            const agent = agents[i];

            if (i == 0) ctx.fillStyle = "blue";
            else ctx.fillStyle = "black";
            ctx.beginPath();
            ctx.rect(agent.x - 5, agent.y - 5, 10, 10);
            ctx.fill();
            ctx.globalCompositeOperation = "destination-over";
            ctx.fillStyle = "black";

            // ctx.beginPath();
            // ctx.lineWidth = 1;
            // ctx.strokeStyle = "blue";
            // ctx.arc(agent.x, agent.y, nearAgentRadius, 0, 2 * Math.PI);
            // ctx.stroke();
            // ctx.beginPath();
            // ctx.strokeStyle = "red";
            // ctx.arc(agent.x, agent.y, closeAgentRadius, 0, 2 * Math.PI);
            // ctx.stroke();
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
            if (
                distPlus > (Math.PI / 180) * 5 ||
                distMinus > (Math.PI / 180) * 5
            ) {
                if (distMinus < distPlus) newAgent.r -= (Math.PI / 180) * 5;
                else newAgent.r += (Math.PI / 180) * 5;
            }
            newAgent.r += (Math.PI / 180) * (Math.random() * 3 - 1.5);

            newAgent.r += 2 * Math.PI;
            newAgent.r %= 2 * Math.PI;

            newAgent.x += Math.sin(newAgent.r);
            newAgent.y += Math.cos(newAgent.r);
        }

        newAgents.push({ ...newAgent, largestRay });
    }
    ctx.font = "30px Arial";
    ctx.fillText(`x: ${agents[0]?.x}deg`, 45, 60);
    ctx.fillText(`y: ${agents[0]?.y}deg`, 45, 90);
    ctx.fillText(`r: ${agents[0]?.r * (180 / Math.PI)}deg`, 45, 120);
    ctx.fillText(`nearby: ${agents[0]?.nearby}`, 45, 150);

    agents = newAgents;
    requestAnimationFrame(draw);
}
draw();
