import Module from "./AirportSimulation.js";

let master;
let simTime;
let intervalsSimulated;

var simTimeText = document.getElementById("simTime");
var intervalsText = document.getElementById("intervalsText");
var avgWaitTimeText = document.getElementById("avgWaitTime");
var longestWaitTime = document.getElementById("longestWaitTime");
var runwayBusy = document.getElementById("runwayBusy");
var logs = document.getElementById("logs");

const addLogs = (intervals) => {
  for (let i = 0; i < intervals.size(); i++) {
    const interval = intervals.get(i);

    const intervalWrapper = logs.appendChild(document.createElement("tr"));

    const intervalNumText = intervalWrapper.appendChild(
      document.createElement("td")
    );
    intervalNumText.innerText = i + 1;

    const newPlaneText = intervalWrapper.appendChild(
      document.createElement("td")
    );
    newPlaneText.innerText =
      interval.newPlane == -1
        ? "false"
        : interval.newPlane
        ? "In air"
        : "On ground";

    const queueSizeText = intervalWrapper.appendChild(
      document.createElement("td")
    );
    queueSizeText.innerText = interval.queueSize;

    const message = intervalWrapper.appendChild(document.createElement("td"));
    message.innerText = interval.message;
  }
};

const resetStats = () => {
  intervalsText.innerHTML = "0";
  simTimeText.innerHTML = "0ms";
  avgWaitTimeText.innerHTML = "0";
  longestWaitTime.innerHTML = "0";
  runwayBusy.innerHTML = "0%";
};

document.getElementById("simulate").onclick = async (e) => {
  e.preventDefault();

  const numberOfIntervals = document.getElementById("intervals").value;
  intervalsSimulated = parseInt(numberOfIntervals);

  resetStats();
  logs.innerHTML =
    "<th>#</th><th>New Plane</th><th>Queue Size</th><th>Message</th>";

  let startTime = new Date();
  master = new (await Module()).Master();
  const intervals = master.nextIntervals(parseInt(numberOfIntervals));

  const stats = master.stats();
  simTime = new Date() - startTime;

  simTimeText.innerHTML = `${simTime}ms`;
  intervalsText.innerHTML = intervalsSimulated;
  avgWaitTimeText.innerHTML = stats.averageAircraftWaitTime.toFixed(2);
  longestWaitTime.innerHTML = stats.longestAircraftWaitTime;
  runwayBusy.innerHTML = `${(
    (stats.numberOfTimeUnitsRunwayBusy / intervalsSimulated) *
    100
  ).toFixed(2)}%`;
  document.getElementById("continue").disabled = false;

  addLogs(intervals);
};

document.getElementById("continue").onclick = async (e) => {
  e.preventDefault();

  const numberOfIntervals = document.getElementById("intervals").value;
  intervalsSimulated += parseInt(numberOfIntervals);

  resetStats();

  const startTime = new Date();
  const intervals = master.nextIntervals(parseInt(numberOfIntervals));

  simTime += new Date() - startTime;
  const stats = master.stats();

  simTimeText.innerHTML = `${simTime}ms`;
  intervalsText.innerHTML = `${intervalsSimulated}`;
  avgWaitTimeText.innerHTML = stats.averageAircraftWaitTime.toFixed(2);
  longestWaitTime.innerHTML = stats.longestAircraftWaitTime;
  runwayBusy.innerHTML = `${(
    (stats.numberOfTimeUnitsRunwayBusy / intervalsSimulated) *
    100
  ).toFixed(2)}%`;

  addLogs(intervals);
};
