import { drawAgent, generateAgents } from "./agents.js";

const canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Variables
export let playing = false;
export var center = { x: 0, y: 0 };

const hasChosen = true;
const numOfGroups = 4;
export const groupColors = true;
const discordOtherGroups = true;

// Agent-variables
const agentHeight = 20;
const agentWidth = 15;
export const blindSpot = 0.2;
export const acRadius = 80;
export const avoidRadius = 30;

let speed = 1; // Pixels it moves forward each frame
let avoidanceWeight = 2.5; // Angle it will turn for avoidance
let alignWeight = 1; // Angle it will turn for align
let cohesionWeight = 1.5; // Angle it will turn for cohesion

let doAvoid = true;
let doAlign = true;
let doCohesion = true;

document.getElementById("playButton").onclick = () => {
    playing = !playing;

    playButton.innerText = playing ? "Pause" : "Play";

    if (playing) draw();
};

document.getElementById("doAvoid").onchange = () => {
    doAvoid = !doAvoid;
    document.getElementById("avoidanceWeight").disabled =
        !document.getElementById("avoidanceWeight").disabled;
};
document.getElementById("doAlign").onchange = () => (doAlign = !doAlign);
document.getElementById("doCohesion").onchange = () =>
    (doCohesion = !doCohesion);

document.getElementById("avoidanceWeight").value = avoidanceWeight * 20;
document.getElementById("avoidanceWeight").oninput = (e) => {
    avoidanceWeight = document.getElementById("avoidanceWeight").value / 20;
    console.log(avoidanceWeight);
};
document.getElementById("alignWeight").value = alignWeight * 20;
document.getElementById("alignWeight").oninput = (e) => {
    alignWeight = document.getElementById("alignWeight").value / 20;
    console.log(alignWeight);
};
document.getElementById("cohesionWeight").value = cohesionWeight * 20;
document.getElementById("cohesionWeight").oninput = (e) => {
    cohesionWeight = document.getElementById("cohesionWeight").value / 20;
    console.log(cohesionWeight);
};

window.onresize = () => {
    // Set the width of the canvas to 80% of the screen
    canvas.width = window.innerWidth;

    // Set the center of the canvas
    center = {
        x: canvas.width / 2,
        y: canvas.height / 2,
    };
};
window.onresize();

let { agents, groups } = generateAgents(
    200,
    canvas.width - 50,
    canvas.height - 50,
    50,
    50,
    numOfGroups
);

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();

    agents = agents.map((agent, i) => {
        agent.chosen = i == 0 && hasChosen;

        const currentDir = {
            x: Math.cos(agent.rotation),
            y: Math.sin(agent.rotation),
        };

        agent.left = {
            x: Math.cos(agent.rotation - (Math.PI / 180) * 45),
            y: Math.sin(agent.rotation - (Math.PI / 180) * 45),
            dot: 0,
        };
        agent.right = {
            x: Math.cos(agent.rotation + (Math.PI / 180) * 45),
            y: Math.sin(agent.rotation + (Math.PI / 180) * 45),
            dot: 0,
        };

        let inAvoidRadius = 0;

        let alignRotation = 0;
        let inACRadius = 0;

        let toCohesion = {
            x: 0,
            y: 0,
        };

        const isOutside =
            agent.x < 0 ||
            agent.x > canvas.width ||
            agent.y < 0 ||
            agent.y > canvas.height;
        let duplicateAgent = { ...agent };
        if (isOutside) {
            if (agent.x < 0) duplicateAgent.x += canvas.width + acRadius;
            else if (agent.x > canvas.width)
                duplicateAgent.x -= canvas.width + acRadius;

            if (agent.y < 0) duplicateAgent.y += canvas.height + acRadius;
            else if (agent.y > canvas.height)
                duplicateAgent.y -= canvas.height + acRadius;
        }

        for (const oa of agents) {
            if (agent == oa) continue;

            let otherAgent = { ...oa };

            let distanceX = agent.x - otherAgent.x;
            let distanceY = agent.y - otherAgent.y;
            let distance = Math.sqrt(
                distanceX * distanceX + distanceY * distanceY
            );

            let toOther = {
                x: distanceX / distance,
                y: distanceY / distance,
            };

            let dotToCurrentDir =
                currentDir.x * toOther.x + currentDir.y * toOther.y;

            let inDuplicatesRange = false;
            if (dotToCurrentDir <= blindSpot - 1 || distance > acRadius) {
                if (isOutside) {
                    distanceX = duplicateAgent.x - otherAgent.x;
                    distanceY = duplicateAgent.y - otherAgent.y;
                    distance = Math.sqrt(
                        distanceX * distanceX + distanceY * distanceY
                    );

                    toOther = {
                        x: distanceX / distance,
                        y: distanceY / distance,
                    };

                    dotToCurrentDir =
                        currentDir.x * toOther.x + currentDir.y * toOther.y;

                    if (dotToCurrentDir <= blindSpot - 1 || distance > acRadius)
                        continue;

                    inDuplicatesRange = true;
                } else continue;
            }

            if (doAvoid) {
                if (
                    distance < avoidRadius ||
                    (discordOtherGroups && agent.group != otherAgent.group)
                ) {
                    agent.left.dot +=
                        agent.left.x * toOther.x + agent.left.y * toOther.y;
                    agent.right.dot +=
                        agent.right.x * toOther.x + agent.right.y * toOther.y;
                    inAvoidRadius++;

                    if (agent.chosen) {
                        ctx.beginPath();

                        if (doAlign) ctx.lineWidth = 2;

                        ctx.strokeStyle = "red";
                        ctx.moveTo(
                            inDuplicatesRange ? duplicateAgent.x : agent.x,
                            inDuplicatesRange ? duplicateAgent.y : agent.y
                        );
                        ctx.lineTo(otherAgent.x, otherAgent.y);
                        ctx.stroke();

                        ctx.strokeStyle = "black";
                        if (doAlign) ctx.lineWidth = 1;
                    }
                }
            }

            if (doAlign) {
                if (agent.group == otherAgent.group || discordOtherGroups) {
                    if (discordOtherGroups)
                        alignRotation -= otherAgent.rotation;
                    else alignRotation += otherAgent.rotation;

                    if (agent.chosen) {
                        ctx.beginPath();
                        ctx.strokeStyle = "green";
                        ctx.moveTo(
                            inDuplicatesRange ? duplicateAgent.x : agent.x,
                            inDuplicatesRange ? duplicateAgent.y : agent.y
                        );
                        ctx.lineTo(otherAgent.x, otherAgent.y);
                        ctx.stroke();
                        ctx.strokeStyle = "black";
                    }
                }
            }

            if (doCohesion) {
                if (agent.group == otherAgent.group) {
                    toCohesion.x +=
                        otherAgent.x +
                        (isOutside &&
                            (canvas.width + acRadius) * (agent.x < 0 ? 1 : -1));
                    toCohesion.y +=
                        otherAgent.y +
                        (isOutside &&
                            (canvas.height + acRadius) *
                                (agent.y < 0 ? 1 : -1));
                }
            }

            if (doAlign || doCohesion) {
                if (agent.group == otherAgent.group) {
                    inACRadius++;
                    if (agent.chosen) {
                        ctx.beginPath();
                        ctx.strokeStyle = "green";
                        ctx.moveTo(
                            inDuplicatesRange ? duplicateAgent.x : agent.x,
                            inDuplicatesRange ? duplicateAgent.y : agent.y
                        );
                        ctx.lineTo(otherAgent.x, otherAgent.y);
                        ctx.stroke();
                        ctx.strokeStyle = "black";
                    }
                }
            }

            ctx.globalCompositeOperation = "source-over";
        }

        agent.left.dot /= inAvoidRadius;
        agent.right.dot /= inAvoidRadius;

        alignRotation /= inACRadius;

        toCohesion.x /= inACRadius;
        toCohesion.y /= inACRadius;

        drawAgent(ctx, agent, agentHeight, agentWidth, groups);
        if (isOutside)
            drawAgent(ctx, duplicateAgent, agentHeight, agentWidth, groups);

        if (playing) {
            if (doAvoid) {
                if (agent.left.dot > agent.right.dot)
                    agent.rotation += (Math.PI / 180) * avoidanceWeight;
                else if (agent.left.dot < agent.right.dot)
                    agent.rotation -= (Math.PI / 180) * avoidanceWeight;
            }

            if (doAlign) {
                const distPlus =
                    (agent.rotation - alignRotation + 2 * Math.PI) %
                    (2 * Math.PI);
                const distMinus =
                    (alignRotation - agent.rotation + 2 * Math.PI) %
                    (2 * Math.PI);

                if (distPlus > Math.PI / 180 || distMinus > Math.PI / 180) {
                    if (distMinus < distPlus)
                        agent.rotation += (Math.PI / 180) * alignWeight;
                    else agent.rotation -= (Math.PI / 180) * alignWeight;
                }
            }

            if (doCohesion) {
                const distanceX = agent.x - toCohesion.x;
                const distanceY = agent.y - toCohesion.y;
                const distance = Math.sqrt(
                    distanceX * distanceX + distanceY * distanceY
                );

                const radius = Math.acos(distanceX / distance);

                const distPlus =
                    (agent.rotation - radius + 2 * Math.PI) % (2 * Math.PI);
                const distMinus =
                    (radius - agent.rotation + 2 * Math.PI) % (2 * Math.PI);

                if (distPlus > Math.PI / 180 || distMinus > Math.PI / 180) {
                    if (distMinus < distPlus)
                        agent.rotation += (Math.PI / 180) * cohesionWeight;
                    else agent.rotation -= (Math.PI / 180) * cohesionWeight;
                }
            }

            agent.rotation %= 2 * Math.PI;

            agent.x = agent.x - Math.cos(agent.rotation) * speed;
            agent.y = agent.y - Math.sin(agent.rotation) * speed;

            // Teleport to other side if out of view
            if (agent.x < 0 - acRadius) agent.x = canvas.width;
            else if (agent.x > canvas.width + acRadius) agent.x = 0;

            if (agent.y < 0 - acRadius) agent.y = canvas.height;
            else if (agent.y > canvas.height + acRadius) agent.y = 0;
        }

        return agent;
    });

    if (playing) requestAnimationFrame(draw);
}
draw();
