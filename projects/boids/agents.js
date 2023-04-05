import { acRadius, avoidRadius, blindSpot, groupColors } from "./boids.js";

export const generateAgents = (
    amountOfAgents,
    maxX,
    maxY,
    minX = 0,
    minY = 0,
    numOfGroups = 1
) => {
    const agents = [];

    for (let i = 0; i < amountOfAgents; i++) {
        agents.push({
            x: Math.random() * (maxX - minX) + minX,
            y: Math.random() * (maxY - minY) + minY,
            rotation: Math.random() * (2 * Math.PI),
            group: Math.ceil(Math.random() * numOfGroups) - 1,

            left: {
                dot: 0,
            },
            right: {
                dot: 0,
            },
        });
    }

    const groups = [];
    for (let i = 0; i < numOfGroups; i++) {
        groups.push({
            color: `rgba(${Math.floor(Math.random() * 255)},${Math.floor(
                Math.random() * 255
            )},${Math.floor(Math.random() * 255)},1)`,
        });
    }

    return { agents, groups };
};

export const drawAgent = (ctx, agent, height, width, groups) => {
    ctx.fillStyle = groupColors ? groups[agent.group].color : "black";

    ctx.translate(agent.x, agent.y);
    ctx.rotate(agent.rotation - Math.PI / -2);

    ctx.moveTo(-(width / 2), -(height / 2));

    ctx.beginPath();

    ctx.lineTo(0, -(height / 3));
    ctx.lineTo(width / 2, -(height / 2));
    ctx.lineTo(0, height / 2);
    ctx.lineTo(-(width / 2), -(height / 2));

    ctx.fill();

    if (agent.chosen) {
        ctx.fillStyle = "rgba(122, 122, 122, .2)";

        ctx.rotate(Math.PI / -2);

        ctx.beginPath();
        ctx.moveTo(0, 0);
        const blindSpotInRadians = 2 * Math.PI * blindSpot;
        ctx.arc(
            0,
            0,
            acRadius,
            2 * Math.PI + blindSpotInRadians / 2,
            2 * Math.PI - blindSpotInRadians / 2
        );
        ctx.lineTo(0, 0);

        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(
            0,
            0,
            avoidRadius,
            2 * Math.PI + blindSpotInRadians / 2,
            2 * Math.PI - blindSpotInRadians / 2
        );
        ctx.lineTo(0, 0);

        ctx.fill();
    }

    ctx.setTransform(1, 0, 0, 1, 0, 0);
};
