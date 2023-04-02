import { drawAgent, generateAgents } from "./agents.js";

const canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Variables
export let playing = false;
export var center = { x: 0, y: 0 };

// Agent-variables
const agentHeight = 20;
const agentWidth = 15;
export const blindSpot = 0.2;

document.getElementById("playButton").onclick = () => {
    playing = !playing;

    playButton.innerText = playing ? "Pause" : "Play";

    if (playing) draw();
};

window.onresize = () => {
    // Set the width of the canvas to 80% of the screen
    canvas.width = window.innerWidth * 0.8;

    // Set the center of the canvas
    center = {
        x: canvas.width / 2,
        y: canvas.height / 2,
    };
};
window.onresize();

let agents = generateAgents(50, canvas.width - 50, canvas.height - 50, 50, 50);

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();

    agents = agents.map((agent, i) => {
        agent.chosen = i == 0;

        ctx.fillStyle = agent.chosen ? "blue" : "black";

        if (agent.chosen) {
            const currentDir = {
                x: -Math.sin(agent.rotation),
                y: -Math.cos(agent.rotation),
            };

            for (const otherAgent of agents) {
                if (agent == otherAgent) continue;

                const distanceX = otherAgent.x - agent.x;
                const distanceY = agent.y - otherAgent.y;
                const distance = Math.sqrt(
                    distanceX * distanceX + distanceY * distanceY
                );

                const toOther = {
                    x: distanceX / distance,
                    y: distanceY / distance,
                };

                const dotToCurrentDir =
                    currentDir.x * toOther.x + currentDir.y * toOther.y;
                if (distance < 60 && dotToCurrentDir > blindSpot - 1) {
                    ctx.beginPath();
                    ctx.strokeStyle = "red";
                    ctx.moveTo(agent.x, agent.y);
                    ctx.lineTo(otherAgent.x, otherAgent.y);
                    ctx.stroke();
                    ctx.strokeStyle = "black";

                    if (agent.chosen)
                        ctx.globalCompositeOperation = "source-over";
                }
            }
        }

        drawAgent(ctx, agent, agentHeight, agentWidth);

        if (playing) {
            agent.x = agent.x - Math.sin(agent.rotation) * 2;
            agent.y = agent.y + Math.cos(agent.rotation) * 2;

            // Teleport to other side if out of view
            if (agent.x < 0 - agentWidth * 1.5)
                agent.x = canvas.width + agentWidth;
            else if (agent.x > canvas.width + agentWidth)
                agent.x = 0 - agentWidth;

            if (agent.y < 0 - agentHeight * 1.5)
                agent.y = canvas.height + agentHeight;
            else if (agent.y > canvas.height + agentHeight)
                agent.y = 0 - agentHeight;
        }

        return agent;
    });

    if (playing) requestAnimationFrame(draw);
}
draw();
