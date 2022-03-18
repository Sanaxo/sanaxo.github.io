/** @format */

for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
  e.style.setProperty('--value', e.value);
  e.style.setProperty('--min', e.min == '' ? '0' : e.min);
  e.style.setProperty('--max', e.max == '' ? '100' : e.max);
  e.addEventListener('input', () => e.style.setProperty('--value', e.value));
}

// mousestop event which triggers if mouse movement stops
(function (mouseStopDelay) {
  var timeout;
  document.addEventListener('mousemove', function (e) {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      var event = new CustomEvent('mousestop', {
        detail: {
          clientX: e.clientX,
          clientY: e.clientY,
        },
        bubbles: true,
        cancelable: true,
      });
      e.target.dispatchEvent(event);
    }, mouseStopDelay);
  });
})(1000);

document.addEventListener('DOMContentLoaded', () => {
  const videoWrapper = document.querySelector('.VideoWrapper');
  const videoElement = videoWrapper.querySelector('.Video__Video');
  const videoControls = videoWrapper.querySelector('.VideoControls');
  const playButton = videoWrapper.querySelector('.PlayButton');
  const inlinePlayIcon = videoWrapper.querySelector('.InlinePlayIcon');
  const inlinePauseIcon = videoWrapper.querySelector('.InlinePauseIcon');
  const progressBar = videoWrapper.querySelector('.ProgressBar');
  const seekBar = videoWrapper.querySelector('.Seek');
  const seekTime = videoWrapper.querySelector('.SeekTime');
  const timeElapsed = videoWrapper.querySelector('.TimeElapsed');
  const duration = videoWrapper.querySelector('.Duration');
  const volumeButton = videoWrapper.querySelector('.Unmuted');
  const volumeMute = videoWrapper.querySelector('.Mute');
  const volumeLow = videoWrapper.querySelector('.VolumeLow');
  const volumeMid = videoWrapper.querySelector('.VolumeMid');
  const volumeHigh = videoWrapper.querySelector('.VolumeHigh');
  const volumeLevelIcons = videoWrapper.querySelectorAll('.VLevel');
  const volumeSlider = videoWrapper.querySelector('.VolumeSlider');
  const fullscreenButton = videoWrapper.querySelector('.FullscreenButton');
  const fullscreenIcon = videoWrapper.querySelector('.Fullscreen');
  const exitFullscreenIcon = videoWrapper.querySelector('.ExitFullscreen');
  const pipButton = videoWrapper.querySelector('.PIPButton');

  if (!('pictureInPictureEnabled' in document)) {
    pipButton.classList.add('hidden');
  }

  function togglePlayPauseButton() {
    inlinePlayIcon.classList.toggle('hide');
    inlinePauseIcon.classList.toggle('hide');
  }

  function togglePlay() {
    if (videoElement.paused || videoElement.ended) {
      setTimeout(() => {
        videoElement.play();
        hideControls();
        togglePlayPauseButton();
      }, 20);
    } else {
      setTimeout(() => {
        videoElement.pause();
        showControls();
        togglePlayPauseButton();
      }, 20);
    }
  }

  function formatTime(timeInSeconds) {
    const result = new Date(timeInSeconds * 1000).toISOString().substr(11, 8);

    return {
      minutes: result.substr(3, 2),
      seconds: result.substr(6, 2),
    };
  }

  function updateTimeElapsed() {
    const time = formatTime(Math.round(videoElement.currentTime));
    timeElapsed.innerText = `${time.minutes}:${time.seconds}`;
    timeElapsed.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`);
  }

  function initializeVideo() {
    const videoDuration = Math.round(videoElement.duration);
    seekBar.setAttribute('max', videoDuration);
    progressBar.setAttribute('max', videoDuration);
    const time = formatTime(videoDuration);
    duration.innerText = `${time.minutes}:${time.seconds}`;
    duration.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`);
  }

  function updateProgress() {
    seekBar.value = Math.floor(videoElement.currentTime);
    progressBar.value = Math.floor(videoElement.currentTime);
  }

  function updateSeekTooltip(event) {
    const skipTo = Math.round(
      (event.offsetX / event.target.clientWidth) * parseInt(event.target.getAttribute('max'), 10)
    );
    seekBar.setAttribute('data-seek', skipTo);
    const t = formatTime(skipTo);
    seekTime.textContent = `${t.minutes}:${t.seconds}`;
    const rect = videoElement.getBoundingClientRect();
    seekTime.style.left = `${event.pageX - rect.left - 20}px`;
  }

  function skipAhead(event) {
    const skipTo = event.target.dataset.seek ? event.target.dataset.seek : event.target.value;
    videoElement.currentTime = skipTo;
    progressBar.value = skipTo;
    seekBar.value = skipTo;
  }

  function updateVolume() {
    if (videoElement.muted) {
      videoElement.muted = false;
    }

    videoElement.volume = volumeSlider.value;
    volumeButton.setAttribute('data-volume', videoElement.volume);
    updateVolumeIcon();
  }

  function toggleMute() {
    videoElement.muted = !videoElement.muted;

    if (videoElement.muted) {
      volumeButton.setAttribute('data-volume', volumeSlider.value);
      volumeSlider.value = 0;
      volumeMute.classList.toggle('hide');
      volumeButton.classList.toggle('hide');
    } else {
      volumeSlider.value = volumeButton.getAttribute('data-volume');
      volumeMute.classList.toggle('hide');
      volumeButton.classList.toggle('hide');
    }
  }

  function updateVolumeIcon() {
    volumeLevelIcons.forEach((icon) => {
      icon.classList.add('hide');
    });

    if (videoElement.muted || videoElement.volume === 0) {
      volumeMute.classList.remove('hide');
    }
    if (videoElement.volume > 0) {
      volumeMute.classList.add('hide');
      volumeButton.classList.remove('hide');
      volumeLow.classList.remove('hide');
    }
    if (videoElement.volume > 0.3) {
      volumeMid.classList.remove('hide');
    }
    if (videoElement.volume > 0.6) {
      volumeHigh.classList.remove('hide');
    }
  }

  function toggleFullscreenButton() {
    exitFullscreenIcon.classList.toggle('hide');
    fullscreenIcon.classList.toggle('hide');
  }

  function toggleFullScreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      toggleFullscreenButton();
    } else if (document.webkitFullscreenElement) {
      // Need this to support Safari
      document.webkitExitFullscreen();
      toggleFullscreenButton();
    } else if (videoWrapper.webkitRequestFullscreen) {
      // Need this to support Safari
      videoWrapper.webkitRequestFullscreen();
      toggleFullscreenButton();
    } else {
      videoWrapper.requestFullscreen();
      toggleFullscreenButton();
    }
  }

  async function togglePip() {
    try {
      if (videoElement !== document.pictureInPictureElement) {
        pipButton.disabled = true;
        await videoElement.requestPictureInPicture();
      } else {
        await document.exitPictureInPicture();
      }
    } catch (error) {
      console.error(error);
    } finally {
      pipButton.disabled = false;
    }
  }

  function hideControls() {
    if (videoElement.paused) {
      return;
    }
    videoControls.classList.add('transition');
    setTimeout(() => {
      videoControls.classList.remove('transition');
      videoControls.classList.add('hide');
    }, 500);
  }

  function showControls() {
    if (videoControls.classList.contains('hide')) {
      videoControls.classList.remove('hide');
      videoControls.classList.add('transition');
      setTimeout(() => {
        videoControls.classList.remove('transition');
      }, 100);
    }
  }

  playButton.addEventListener('click', togglePlay);
  videoElement.addEventListener('click', togglePlay);
  videoElement.addEventListener('loadedmetadata', initializeVideo);
  videoElement.addEventListener('timeupdate', updateTimeElapsed);
  videoElement.addEventListener('timeupdate', updateProgress);
  seekBar.addEventListener('mousemove', updateSeekTooltip);
  seekBar.addEventListener('input', skipAhead);
  volumeSlider.addEventListener('input', updateVolume);
  volumeButton.addEventListener('click', toggleMute);
  volumeMute.addEventListener('click', toggleMute);
  fullscreenButton.addEventListener('click', toggleFullScreen);
  pipButton.addEventListener('click', togglePip);
  videoControls.addEventListener('mouseenter', showControls);
  document.addEventListener('mousestop', hideControls);
  videoElement.addEventListener('mousemove', showControls);
});
