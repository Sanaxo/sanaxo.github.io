/** @format */

document.addEventListener('DOMContentLoaded', () => {
  const videoWrapper = document.querySelector('.VideoWrapper');
  const videoElement = videoWrapper.querySelector('.Video__Video');
  const videoControls = videoWrapper.querySelector('.VideoControls');
  const playbackIcons = videoWrapper.querySelectorAll('.playback-icon');
  const playButton = videoWrapper.querySelector('.PlayButton');
  const progressBar = videoWrapper.querySelector('.ProgressBar');
  const seekBar = videoWrapper.querySelector('.Seek');
  const seekTime = videoWrapper.querySelector('.SeekTime');
  const timeElapsed = videoWrapper.querySelector('.TimeElapsed');
  const duration = videoWrapper.querySelector('.Duration');
  const volumeButton = videoWrapper.querySelector('.VolumeButton');
  const volumeSlider = videoWrapper.querySelector('.VolumeSlider');
  const fullscreenButton = videoWrapper.querySelector('.FullscreenButton');
  const pipButton = videoWrapper.querySelector('.PIPButton');

  if (!('pictureInPictureEnabled' in document)) {
    pipButton.classList.add('hidden');
  }

  function animatePlayback() {
    playButton.animate(
      [
        {
          opacity: 1,
          transform: 'scale(1)',
        },
        {
          opacity: 0,
          transform: 'scale(1.3)',
        },
      ],
      {
        duration: 500,
      }
    );
  }

  function togglePlay() {
    if (videoElement.paused || videoElement.ended) {
      setTimeout(() => {
        videoElement.play();
        animatePlayback();
      }, 20);
      updatePlayButton();
    } else {
      setTimeout(() => {
        videoElement.pause();
      }, 20);
      updatePlayButton();
    }
  }

  function updatePlayButton() {
    playbackIcons.forEach((icon) => icon.classList.toggle('hidden'));
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
  }

  function toggleMute() {
    videoElement.muted = !videoElement.muted;

    if (videoElement.muted) {
      volumeButton.setAttribute('data-volume', volumeSlider.value);
      volumeSlider.value = 0;
    } else {
      volumeSlider.value = volumeButton.getAttribute('data-volume');
    }
  }

  function toggleFullScreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else if (document.webkitFullscreenElement) {
      // Need this to support Safari
      document.webkitExitFullscreen();
    } else if (videoWrapper.webkitRequestFullscreen) {
      // Need this to support Safari
      videoWrapper.webkitRequestFullscreen();
    } else {
      videoWrapper.requestFullscreen();
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

    videoControls.classList.add('hide');
  }

  // showControls displays the video controls
  function showControls() {
    videoControls.classList.remove('hide');
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
  fullscreenButton.addEventListener('click', toggleFullScreen);
  pipButton.addEventListener('click', togglePip);
  videoElement.addEventListener('mouseenter', showControls);
  videoElement.addEventListener('mouseleave', hideControls);
  videoControls.addEventListener('mouseenter', showControls);
  videoControls.addEventListener('mouseleave', hideControls);
});
