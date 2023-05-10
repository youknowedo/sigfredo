import {
    createAgent,
    createAgents,
    createGroups,
    drawAgent,
} from "./agents.js";

const canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Variables
export let playing = false;
export var center = { x: 0, y: 0 };

let haveChosen = true;
let numberOfGroups = 4;
let numberOfAgents = 200;
export let haveGroupColors = true;
let discordOtherGroups = true;

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

document.getElementById("numOfAgents").value = numberOfAgents;
document.getElementById("numOfAgents").onchange = () => {
    const oldNOA = numberOfAgents;
    numberOfAgents = document.getElementById("numOfAgents").value;

    if (numberOfAgents < oldNOA)
        for (let i = 0; i < oldNOA - numberOfAgents; i++) {
            agents.splice(agents.length - 1, agents.length - 1);
        }
    if (numberOfAgents > oldNOA)
        for (let i = 0; i < numberOfAgents - oldNOA; i++) {
            const newAgent = createAgent(canvas.width, canvas.height);
            newAgent.group = Math.ceil(Math.random() * numberOfGroups) - 1;
            agents.push(newAgent);
        }

    if (!playing) draw();
};
document.getElementById("numOfGroups").value = numberOfGroups;
document.getElementById("numOfGroups").onchange = () => {
    numberOfGroups = document.getElementById("numOfGroups").value;

    const g = createGroups(numberOfGroups, agents);
    agents = g.agents;
    groups = g.groups;

    if (!playing) draw();
};

document.getElementById("hasChosen").checked = haveChosen;
document.getElementById("hasChosen").onchange = () => {
    haveChosen = !haveChosen;
};
document.getElementById("groupColors").checked = haveGroupColors;
document.getElementById("groupColors").onchange = () => {
    haveGroupColors = !haveGroupColors;
};
document.getElementById("discordOtherGroups").checked = discordOtherGroups;
document.getElementById("discordOtherGroups").onchange = () => {
    discordOtherGroups = !discordOtherGroups;
};

document.getElementById("doAvoid").checked = doAvoid;
document.getElementById("doAvoid").onchange = () => {
    doAvoid = !doAvoid;
    document.getElementById("avoidanceWeight").disabled =
        !document.getElementById("avoidanceWeight").disabled;
};
document.getElementById("doAlign").checked = doAlign;
document.getElementById("doAlign").onchange = () => (doAlign = !doAlign);
document.getElementById("doCohesion").checked = doCohesion;
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
const setCanvasSize = () => {
    // Set the width of the canvas to 80% of the screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Set the center of the canvas
    center = {
        x: canvas.width / 2,
        y: canvas.height / 2,
    };
};
setCanvasSize();

let { agents, groups } = createAgents(
    numberOfAgents,
    canvas.width,
    canvas.height,
    0,
    0,
    numberOfGroups
);

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();

    agents = agents.map((agent, i) => {
        const agentIsChosen = i == 0 && haveChosen;

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

        let vectorPointingToCohesion = {
            x: 0,
            y: 0,
        };

        const isOutside =
            agent.x < 0 ||
            agent.x > canvas.width ||
            agent.y < 0 ||
            agent.y > canvas.height;
        let mirroredAgent;
        if (isOutside) {
            mirroredAgent = { ...agent };
            if (agent.x < 0) mirroredAgent.x += canvas.width + acRadius;
            else if (agent.x > canvas.width)
                mirroredAgent.x -= canvas.width + acRadius;

            if (agent.y < 0) mirroredAgent.y += canvas.height + acRadius;
            else if (agent.y > canvas.height)
                mirroredAgent.y -= canvas.height + acRadius;
        }

        for (const otherAgent of agents) {
            if (agent == otherAgent) continue;

            let distanceX = agent.x - otherAgent.x;
            let distanceY = agent.y - otherAgent.y;
            let distanceToOtherAgent = Math.sqrt(
                distanceX * distanceX + distanceY * distanceY
            );

            let toOther = {
                x: distanceX / distanceToOtherAgent,
                y: distanceY / distanceToOtherAgent,
            };

            let dotToCurrentDir =
                currentDir.x * toOther.x + currentDir.y * toOther.y;

            let inMirroredAgentsRange = false;
            if (
                dotToCurrentDir <= blindSpot - 1 ||
                distanceToOtherAgent > acRadius
            ) {
                if (isOutside) {
                    distanceX = mirroredAgent.x - otherAgent.x;
                    distanceY = mirroredAgent.y - otherAgent.y;
                    distanceToOtherAgent = Math.sqrt(
                        distanceX * distanceX + distanceY * distanceY
                    );

                    toOther = {
                        x: distanceX / distanceToOtherAgent,
                        y: distanceY / distanceToOtherAgent,
                    };

                    dotToCurrentDir =
                        currentDir.x * toOther.x + currentDir.y * toOther.y;

                    if (
                        dotToCurrentDir <= blindSpot - 1 ||
                        distanceToOtherAgent > acRadius
                    )
                        continue;

                    inMirroredAgentsRange = true;
                } else continue;
            }

            if (doAvoid) {
                if (
                    distanceToOtherAgent < avoidRadius ||
                    (discordOtherGroups && agent.group != otherAgent.group)
                ) {
                    agent.left.dot +=
                        agent.left.x * toOther.x + agent.left.y * toOther.y;
                    agent.right.dot +=
                        agent.right.x * toOther.x + agent.right.y * toOther.y;
                    inAvoidRadius++;

                    if (agentIsChosen) {
                        ctx.beginPath();

                        if (doAlign) ctx.lineWidth = 2;

                        ctx.strokeStyle = "red";
                        ctx.moveTo(
                            inMirroredAgentsRange ? mirroredAgent.x : agent.x,
                            inMirroredAgentsRange ? mirroredAgent.y : agent.y
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
                    if (agent.group != otherAgent.group)
                        alignRotation -= otherAgent.rotation;
                    else alignRotation += otherAgent.rotation;

                    if (agentIsChosen) {
                        ctx.beginPath();
                        ctx.strokeStyle = "green";
                        ctx.moveTo(
                            inMirroredAgentsRange ? mirroredAgent.x : agent.x,
                            inMirroredAgentsRange ? mirroredAgent.y : agent.y
                        );
                        ctx.lineTo(otherAgent.x, otherAgent.y);
                        ctx.stroke();
                        ctx.strokeStyle = "black";
                    }
                }
            }

            if (doCohesion) {
                if (agent.group == otherAgent.group) {
                    const positionComparedToAgent = {
                        x: otherAgent.x,
                        y: otherAgent.y,
                    };

                    if (inMirroredAgentsRange) {
                        positionComparedToAgent.x +=
                            (canvas.width + acRadius) * (agent.x < 0 ? 1 : -1);
                        positionComparedToAgent.y +=
                            (canvas.height + acRadius) * (agent.y < 0 ? 1 : -1);
                    }

                    vectorPointingToCohesion.x += positionComparedToAgent.x;
                    vectorPointingToCohesion.y += positionComparedToAgent.y;
                }
            }

            if (doAlign || doCohesion) {
                if (agent.group == otherAgent.group) {
                    inACRadius++;
                    if (agentIsChosen) {
                        ctx.beginPath();
                        ctx.strokeStyle = "green";
                        ctx.moveTo(
                            inMirroredAgentsRange ? mirroredAgent.x : agent.x,
                            inMirroredAgentsRange ? mirroredAgent.y : agent.y
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

        vectorPointingToCohesion.x /= inACRadius;
        vectorPointingToCohesion.y /= inACRadius;

        drawAgent(ctx, agent, agentHeight, agentWidth, groups);
        if (isOutside)
            drawAgent(ctx, mirroredAgent, agentHeight, agentWidth, groups);

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
                const distanceX = agent.x - vectorPointingToCohesion.x;
                const distanceY = agent.y - vectorPointingToCohesion.y;
                const distanceToOtherAgent = Math.sqrt(
                    distanceX * distanceX + distanceY * distanceY
                );

                const radius = Math.acos(distanceX / distanceToOtherAgent);

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

window.onresize = () => {
    setCanvasSize();

    if (!playing) draw();
};
