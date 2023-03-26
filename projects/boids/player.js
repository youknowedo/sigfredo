const playButton = document.getElementById("playButton");

playButton.onclick = () => {
    if (playButton.classList.contains("playing")) {
        playButton.classList.remove("playing");
        playButton.innerText = "Play";
    } else {
        playButton.classList.add("playing");
        playButton.innerText = "Pause";
    }
};
