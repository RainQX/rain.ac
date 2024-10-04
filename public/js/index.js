function showPopup(popupId) {
  document.getElementById(popupId).style.display = "block";
}

function hidePopup(popupId) {
  document.getElementById(popupId).style.display = "none";
}

function togglePopup(id) {
  const popup = document.getElementById(id);
  if (popup.style.display === "block") {
    popup.style.display = "none";
  } else {
    popup.style.display = "block";
  }
}

function addPopupListeners(popupId, closeBtnClass, okBtnClass) {
  document
    .querySelector(`button[class='${closeBtnClass}']`)
    .addEventListener("click", function () {
      hidePopup(popupId);
    });
  document
    .querySelector(`button[class='${okBtnClass}']`)
    .addEventListener("click", function () {
      hidePopup(popupId);
    });
}

document.addEventListener("DOMContentLoaded", function () {
  addPopupListeners("PopUpMain", "MainClose", "MainOK");
});

let date = new Date();

setInterval(function () {
  document.querySelector('.time').innerText = date.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });
}, 1000);

document.addEventListener("DOMContentLoaded", function () {
  let audio = document.getElementById("audio");
  let range = document.getElementById("range26");
  range.addEventListener("input", function () {
    audio.volume = range.value / 50;
  });
});

if (window.matchMedia("(max-width: 767px)").matches) {
  console.log("This is a mobile device, the code will not run");
} else {
  document.addEventListener("DOMContentLoaded", function () {
    let button = document.querySelector('.start-button');
    let desktop = document.querySelector('#desktop');
    let videoElement = document.createElement('video');
    videoElement.id = 'videoPlayer';
    desktop.appendChild(videoElement);
  
    const videos = ['../media/video1.mp4', '../media/video2.mp4'];
    let isPlayingVideo = false;
  
    function toggleVideoAndImage() {
      if (isPlayingVideo) {
        // Switch to image
        videoElement.style.display = 'none';
        desktop.style.backgroundImage = 'url(../media/girl.jpg)';
        isPlayingVideo = false;
      } else {
        // Switch to video
        desktop.style.backgroundImage = 'none';
        videoElement.style.display = 'block';
        let randomIndex = Math.floor(Math.random() * videos.length);
        videoElement.src = videos[randomIndex];
        videoElement.play();
        isPlayingVideo = true;
      }
    }
  
    button.addEventListener('click', toggleVideoAndImage);
  
    videoElement.addEventListener('ended', function() {
      toggleVideoAndImage();
    });
  
    // Initially set the background to girl.jpg
    desktop.style.backgroundImage = 'url(../media/girl.jpg)';
  });
}

document.addEventListener("DOMContentLoaded", function () {

  $(document).ready(function () {
    $('.window-action-button.main').click(function () {
      $('#enter').hide();
      $('#main').show();
      $('#audio')[0].play();
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    document.getElementById("mobile-notice").innerHTML = "(View on PC for a better experience)";
  }
});