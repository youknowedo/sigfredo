import { blindSpot } from "./boids.js";

export const generateAgents = (
    amountOfAgents,
    maxX,
    maxY,
    minX = 0,
    minY = 0
) => {
    const agents = [];

    for (let i = 0; i < amountOfAgents; i++) {
        agents.push({
            x: Math.random() * (maxX - minX) + minX,
            y: Math.random() * (maxY - minY) + minY,
            rotation: Math.random() * (2 * Math.PI),
        });
    }

    return agents;
};

export const drawAgent = (ctx, agent, height, width) => {
    ctx.translate(agent.x, agent.y);
    ctx.rotate(agent.rotation);

    ctx.moveTo(-(width / 2), -(height / 2));

    ctx.beginPath();

    ctx.lineTo(0, -(height / 3));
    ctx.lineTo(width / 2, -(height / 2));
    ctx.lineTo(0, height / 2);
    ctx.lineTo(-(width / 2), -(height / 2));

    ctx.fill();

    if (agent.chosen) {
        ctx.fillStyle = "rgba(122, 122, 122, .2)";

        ctx.beginPath();

        ctx.rotate(Math.PI / -2);
        ctx.moveTo(0, 0);
        const blindSpotInRadians = 2 * Math.PI * blindSpot;
        ctx.arc(
            0,
            0,
            60,
            2 * Math.PI + blindSpotInRadians / 2,
            2 * Math.PI - blindSpotInRadians / 2
        );
        ctx.lineTo(0, 0);

        ctx.fill();
    }

    ctx.setTransform(1, 0, 0, 1, 0, 0);
};
