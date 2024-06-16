document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("audio");
  const trackList = document
    .getElementById("trackList")
    .getElementsByTagName("li");
  const songTitle = document.getElementById("songTitle");
  const forwardButton = document.getElementById("forward");
  const backwardButton = document.getElementById("backward");
  let songTime = document.getElementById("songTime");
  let pause = document.getElementById("pause");

  let currentTrack = Math.floor(Math.random() * trackList.length);

  audio.src = document.querySelector(
    `[data-track-number="${trackList[currentTrack].dataset.trackNumber}"]`
  ).src;
  songTitle.innerText = trackList[currentTrack].innerText;
  audio.play();

  forwardButton.addEventListener("click", function () {
    currentTrack = (currentTrack + 1) % trackList.length;
    audio.src = document.querySelector(
      `[data-track-number="${trackList[currentTrack].dataset.trackNumber}"]`
    ).src;
    songTitle.innerText = trackList[currentTrack].innerText;
    audio.play();
  });

  backwardButton.addEventListener("click", function () {
    if (audio.currentTime > 2) {
      audio.currentTime = 0;
      audio.play();
    } else {
      currentTrack = (currentTrack - 1 + trackList.length) % trackList.length;
      audio.src = document.querySelector(
        `[data-track-number="${trackList[currentTrack].dataset.trackNumber}"]`
      ).src;
      songTitle.innerText = trackList[currentTrack].innerText;
      audio.play();
    }
  });

  audio.addEventListener("ended", function () {
    // Update currentTrack to point to the next track
    currentTrack = (currentTrack + 1) % trackList.length;
  
    // Update audio source and song title for the next track
    audio.src = document.querySelector(
      `[data-track-number="${trackList[currentTrack].dataset.trackNumber}"]`
    ).src;
    songTitle.innerText = trackList[currentTrack].innerText;
  
    // Load and play the next track
    audio.load(); // Ensure the new audio source is loaded
    audio.play();
  });
  
  
  pause.addEventListener("click", function () {
    if (audio.paused) {
      audio.play();
      pause.classList.remove("fa-play");
      pause.classList.add("fa-pause");
    } else {
      audio.pause();
      pause.classList.remove("fa-pause");
      pause.classList.add("fa-play");
    }
  });

  function updateTime() {
    let currentTime = audio.currentTime;
    let minutes = Math.floor(currentTime / 60);
    let seconds = Math.floor(currentTime % 60);

    seconds = seconds < 10 ? "0" + seconds : seconds;
    songTime.innerHTML = `${minutes}:${seconds}`;
  }
  audio.addEventListener("timeupdate", function () {
    updateTime();
  });

  audio.addEventListener("loadedmetadata", function () {
    updateTime();
  });

  audio.addEventListener("play", function () {
    songTitle.innerHTML = trackList.querySelector(
      "li[data-track-number='" +
      audio.querySelector("source").getAttribute("data-track-number") +
      "']"
    ).innerHTML;
  });
});