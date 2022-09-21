/** @format */
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

const gyroParallaxEffect = (event, moveForeground, moveBackground) => {
  if (!event) return;

  let counter = 0;
  const updateRate = 10;
  const limit = 45;
  let constraint = -20;
  function updateNow() {
    return counter++ % updateRate === 0;
  }

  if (updateNow()) {
    let position = Math.round(event.gamma);
    let position2 = Math.round(event.beta);

    if (Math.abs(position) > limit) {
      if (position > limit) {
        position = limit;
      } else {
        position = -limit;
      }
    }

    if (Math.abs(position2) > limit) {
      if (position2 > limit) {
        position2 = limit;
      } else {
        position2 = -limit;
      }
    }

    position = position / constraint;
    position2 = position2 / constraint;

    let perspective = window.screen.width / 2;

    let style =
      'perspective(' +
      perspective +
      'px)  rotateX(' +
      position2 +
      'deg) rotateY(' +
      position +
      'deg)';
    let style2 =
      'perspective(' +
      perspective +
      'px) rotateX(' +
      position2 +
      'deg) rotateY(' +
      position +
      'deg)';

    moveForeground.style.transform = style;
    moveBackground.style.transform = style2;
  }
};
//-----------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  const megaMenuElement = document.querySelector('[data-js-megamenu]');

  const overlayElement = document.querySelector('[data-js-overlay]');
  const navDrawerTriggerElement = document.querySelector('[data-js-nav-drawer]');

  const showOverlay = () => {
    overlayElement.classList.remove('-Hidden');
    requestAnimationFrame(() => {
      overlayElement.classList.add('-Show');
    });
  };

  const hideOverlay = () => {
    overlayElement.classList.remove('-Show');
    requestAnimationFrame(() => {
      overlayElement.classList.add('-Hidden');
    });
  };

  const openNavDrawer = () => {
    if (megaMenuElement.classList.contains('-Show')) return;
    megaMenuElement.classList.add('-Show');
    showOverlay();
    navDrawerTriggerElement.removeEventListener('click', openNavDrawer);
    requestAnimationFrame(() => {
      navDrawerTriggerElement.addEventListener('click', closeNavDrawer);
      overlayElement.addEventListener('click', closeNavDrawer);
    });
  };

  const closeNavDrawer = () => {
    navDrawerTriggerElement.removeEventListener('click', closeNavDrawer);
    overlayElement.removeEventListener('click', closeNavDrawer);
    megaMenuElement.classList.remove('-Show');
    hideOverlay();
    requestAnimationFrame(() => {
      navDrawerTriggerElement.addEventListener('click', openNavDrawer);
    });
  };

  navDrawerTriggerElement.addEventListener('click', openNavDrawer);

  //------------------------------------MOVE------------------------------------
  let constrain = 20;
  let constrain2 = 80;
  const mouseOverContainer = document.getElementById('Move__Container');
  const moveForeground = document.getElementById('Foreground2');
  const moveBackground = document.getElementById('Background2');

  if (!mouseOverContainer || !moveForeground || !moveBackground) return;

  function transforms(x, y, el) {
    let box = el.getBoundingClientRect();
    let calcY = -(y - box.y - box.height / 2) / constrain;
    let calcX = -(x - box.x - box.width / 2) / constrain;

    return 'translateX(' + calcX + 'px) ' + '   translateY(' + calcY + 'px) ';
  }

  function transformElement(el, xyEl) {
    el.style.transform = transforms.apply(null, xyEl);
  }

  mouseOverContainer.onmousemove = function (e) {
    let xy = [e.clientX, e.clientY];
    let position = xy.concat([moveForeground]);
    let position2 = xy.concat([moveBackground]);

    window.requestAnimationFrame(function () {
      transformElement(moveForeground, position);
      transformElement2(moveBackground, position2);
    });
  };

  function transforms2(x2, y2, el2) {
    let box2 = el2.getBoundingClientRect();
    let calcY2 = -(y2 - box2.y - box2.height / 2) / constrain2;
    let calcX2 = (x2 - box2.x - box2.width / 2) / constrain2;

    return 'translateX(' + calcX2 + 'px) ' + '   translateY(' + calcY2 + 'px) ';
  }

  function transformElement2(el2, xyE2) {
    el2.style.transform = transforms2.apply(null, xyE2);
  }
  window.addEventListener('deviceorientation', (event) => {
    gyroParallaxEffect(event, moveForeground, moveBackground);
  });
  //--------------------------------MOVE-------------------------------------------------

  //-----------------------------------VidepPlayer-----------------------------------------------------
  /** @format */

  const swiperNavigationElements = document.querySelectorAll('[data-js-video-swiper-navigatinon]');

  const hideSwiperNavigation = (swiperNavigationElementArray) => {
    swiperNavigationElementArray.forEach((element) => {
      if (element.classList.contains('-Hidden')) return;

      element.classList.add('-Hidden');
    });
  };

  const showSwiperNavigation = (swiperNavigationElementArray) => {
    swiperNavigationElementArray.forEach((element) => {
      if (!element.classList.contains('-Hidden')) return;

      element.classList.remove('-Hidden');
    });
  };

  const createVideoElement = (url, videoContainer) => {
    const videoElement = document.createElement('video');
    const videoSourceElement = document.createElement('source');
    videoElement.append(videoSourceElement);
    videoElement.classList.add('Video__Video');
    videoElement.setAttribute('preload', 'auto');
    videoSourceElement.setAttribute('src', url);
    videoSourceElement.setAttribute('type', 'video/mp4');
    videoContainer.append(videoElement);
  };

  const initializeVideo = (videoContainer) => {
    const videoThumbail = videoContainer.querySelector('.Video__Thumbnail');
    const timelineContainer = videoContainer.querySelector('.Controls__TimelineContainer');
    const timeline = timelineContainer.querySelector('.Timeline');
    const timelinePreviewImage = timeline.querySelector('.Timeline__PreviewImage');
    const timelineThumbIndicator = timeline.querySelector('.Timeline__ThumbIndicator');
    const playPauseButton = videoContainer.querySelector('.Controls__PlayPause');
    const volumeButton = videoContainer.querySelector('.Volume__Icon');
    const volumeSlider = videoContainer.querySelector('.Volume__Slider');
    const durationContainer = videoContainer.querySelector('.Duration__Container');
    const currentTimeElement = videoContainer.querySelector('.Duration__CurrentTime');
    const totalTimeElement = videoContainer.querySelector('.Duration__TotalTime');
    const captionsButton = videoContainer.querySelector('.Controls__ClosedCaption');
    const playbackSpeedButton = videoContainer.querySelector('.Controls__PlaybackSpeed');
    const miniPlayerButton = videoContainer.querySelector('.Controls__MiniPlayer');
    const theaterButton = videoContainer.querySelector('.Controls__Theater');
    const fullscreenButton = videoContainer.querySelector('.Controls__Fullscreen');
    const video = videoContainer.querySelector('.Video__Video');
    const controlsContainer = videoContainer.querySelector('.Controls__Container');

    function togglePlay() {
      video.paused ? video.play() : video.pause();
    }

    playPauseButton.addEventListener('click', togglePlay);

    // keyboard events
    document.addEventListener('keydown', (e) => {
      const tagName = document.activeElement.tagName.toLowerCase();
      if (tagName === 'input') return;

      switch (e.key.toLowerCase()) {
        case ' ':
          if (tagName === 'button') return;

        case 'k':
          togglePlay();
          break;
        case 'i':
          toggelMiniPlayerMode();
          break;
        case 't':
          toggleTheaterMode();
          break;
        case 'f':
          toggleFullscreenMode();
          break;
        case 'm':
          toggleMute();
          break;
        case 'arrowleft':
        case 'j':
          skip(-5);
          break;
        case 'arrowright':
        case 'l':
          skip(5);
          break;
        case 'c':
          toggleCaptions();
          break;
      }
    });

    // Timeline

    timelineContainer.addEventListener('mousemove', handleTimelineUpdate);
    timelineContainer.addEventListener('mousedown', toggleScrubbing);
    document.addEventListener('mouseup', (event) => {
      if (videoIsScrubbing) toggleScrubbing(event);
    });
    document.addEventListener('mousemove', (event) => {
      if (videoIsScrubbing) handleTimelineUpdate(event);
    });

    let videoIsScrubbing = false;
    let videoWasPaused = false;

    function toggleScrubbing(event) {
      const timelineContainerRectangle = timelineContainer.getBoundingClientRect();
      const horizontalCursorPosition =
        Math.min(
          Math.max(0, event.x - timelineContainerRectangle.x),
          timelineContainerRectangle.width
        ) / timelineContainerRectangle.width;
      videoIsScrubbing = (event.buttons & 1) === 1;
      videoContainer.classList.toggle('-Scrubbing');

      if (videoIsScrubbing) {
        videoWasPaused = video.paused;
        video.pause();
      } else {
        video.currentTime = horizontalCursorPosition * video.duration;

        if (!videoWasPaused) {
          video.play();
        }
      }

      handleTimelineUpdate(event);
    }

    function handleTimelineUpdate(event) {
      const timelineContainerRectangle = timelineContainer.getBoundingClientRect();
      const horizontalCursorPosition =
        Math.min(
          Math.max(0, event.x - timelineContainerRectangle.x),
          timelineContainerRectangle.width
        ) / timelineContainerRectangle.width;

      const previewImageNumber = Math.max(
        1,
        Math.floor((horizontalCursorPosition * video.duration) / 1)
      );

      const videoPreviewName = videoContainer.getAttribute('data-js-preview-name');
      const previewImageSource = `https://sanaxo.github.io/assets/preview/${videoPreviewName}-${previewImageNumber}.png`;
      timelinePreviewImage.src = previewImageSource;
      timelineContainer.style.setProperty('--preview-position', horizontalCursorPosition);

      if (videoIsScrubbing) {
        event.preventDefault();
        videoThumbail.src = previewImageSource;
        timelineContainer.style.setProperty('--progress-position', horizontalCursorPosition);
      }
    }

    // Playback Speed

    playbackSpeedButton.addEventListener('click', changePlaybackSpeed);

    function changePlaybackSpeed() {
      let newPlaybackSpeed = video.playbackRate + 0.25;
      if (newPlaybackSpeed > 2) newPlaybackSpeed = 0.25;
      video.playbackRate = newPlaybackSpeed;
      playbackSpeedButton.textContent = `${newPlaybackSpeed}x`;
    }

    /*
    // Captions
    const captions = video.textTracks[0];
    captions.mode = 'hidden';
    
    captionsButton.addEventListener('click', toggleCaptions);
    
    function toggleCaptions() {
      const areCaptionsHidden = captions.mode === 'hidden';
      captions.mode = areCaptionsHidden ? 'showing' : 'hidden';
      videoContainer.classList.toggle('-Captions', areCaptionsHidden);
    }
    */

    // Duration
    video.addEventListener('loadeddata', () => {
      totalTimeElement.textContent = formatDuration(video.duration);
    });

    video.addEventListener('timeupdate', () => {
      currentTimeElement.textContent = formatDuration(video.currentTime);
      const videoProgress = video.currentTime / video.duration;
      timelineContainer.style.setProperty('--progress-position', videoProgress);
    });

    const leadingZeroFormatter = new Intl.NumberFormat(undefined, {
      minimumIntegerDigits: 2,
    });

    function formatDuration(time) {
      const seconds = Math.floor(time % 60);
      const minutes = Math.floor(time / 60) % 60;
      const hours = Math.floor(time / 3600);
      if (hours === 0) {
        return `${minutes}:${leadingZeroFormatter.format(seconds)}`;
      } else {
        return `${hours}:${leadingZeroFormatter.format(minutes)}:${leadingZeroFormatter.format(
          seconds
        )}`;
      }
    }

    function skip(duration) {
      video.currentTime += duration;
    }

    //Volume Controls

    function toggleMute() {
      video.muted = !video.muted;
    }

    volumeSlider.addEventListener('input', (e) => {
      video.volume = e.target.value;
      video.muted = e.target.value === 0;
    });
    volumeButton.addEventListener('click', toggleMute);
    video.addEventListener('volumechange', () => {
      volumeSlider.value = video.volume;
      let volumeLevel;
      if (video.muted || video.volume === 0) {
        volumeSlider.value = 0;
        volumeLevel = 'muted';
      } else if (video.volume >= 0.5) {
        volumeLevel = 'high';
      } else {
        volumeLevel = 'low';
      }

      videoContainer.dataset.volume = volumeLevel;
    });

    //ViewModes

    function toggelMiniPlayerMode() {
      if (videoContainer.classList.contains('-MiniPlayer')) {
        document.exitPictureInPicture();
      } else {
        video.requestPictureInPicture();
      }
    }

    function toggleTheaterMode() {
      videoContainer.classList.toggle('-Theater');
    }

    function toggleFullscreenMode() {
      if (document.fullscreenElement == null) {
        videoContainer.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    }

    miniPlayerButton.addEventListener('click', toggelMiniPlayerMode);
    theaterButton.addEventListener('click', toggleTheaterMode);
    fullscreenButton.addEventListener('click', toggleFullscreenMode);
    document.addEventListener('fullscreenchange', () => {
      videoContainer.classList.toggle('-Fullscreen', document.fullscreenElement);
    });
    video.addEventListener('enterpictureinpicture', () => {
      videoContainer.classList.add('-MiniPlayer');
    });
    video.addEventListener('leavepictureinpicture', () => {
      videoContainer.classList.remove('-MiniPlayer');
    });

    const hideControls = () => {
      if (video.paused) {
        return;
      }
      controlsContainer.classList.add('-VisuallyHidden');
      requestAnimationFrame(() => {
        controlsContainer.classList.add('-Hidden');
      });
    };

    const showControls = () => {
      if (controlsContainer.classList.contains('-Hidden')) {
        controlsContainer.classList.remove('-Hidden');

        requestAnimationFrame(() => {
          controlsContainer.classList.remove('-VisuallyHidden');
        });
      }
    };

    // Play/Pause
    video.addEventListener('play', () => {
      videoContainer.classList.remove('-Paused');
      hideSwiperNavigation(swiperNavigationElements);
      document.addEventListener('mousestop', hideControls);
      document.addEventListener('mousemove', showControls);
    });

    video.addEventListener('pause', () => {
      videoContainer.classList.add('-Paused');
      showSwiperNavigation(swiperNavigationElements);
      document.removeEventListener('mousestop', hideControls);
      document.removeEventListener('mousemove', showControls);
    });

    video.addEventListener('click', togglePlay);

    const videoSlide = videoContainer.parentNode;

    function callback(mutationList, observer) {
      mutationList.forEach(function (mutation) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          if (!mutation.target.classList.contains('swiper-slide-active')) {
            video.pause();
          }
        } else return;
      });
    }

    const mutationObserver = new MutationObserver(callback);
    mutationObserver.observe(videoSlide, { attributes: true });

    const videoPlayerDemoContainer = document.querySelector('[data-js-video-demo]');
    if (videoPlayerDemoContainer.classList.contains('-Show')) return;
    videoPlayerDemoContainer.classList.add('-Show');
  };

  const videoContainerElements = document.querySelectorAll('[data-js-video]');
  if (videoContainerElements.length > 0) {
    videoContainerElements.forEach((videoContainer) => {
      const videoSourceURL = videoContainer.getAttribute('data-js-url');

      createVideoElement(videoSourceURL, videoContainer);

      initializeVideo(videoContainer);
    });
  } else return;

  for (let e of document.querySelectorAll('input[type="range"].Volume__Slider')) {
    e.style.setProperty('--value', e.value);
    e.style.setProperty('--min', e.min == '' ? '0' : e.min);
    e.style.setProperty('--max', e.max == '' ? '100' : e.max);
    e.addEventListener('input', () => e.style.setProperty('--value', e.value));
  }

  const showElement = (element) => {
    if (element.classList.contains('-Show')) return;

    element.classList.add('-Show');
  };

  function checkImageLazyloading(mutationList, observer) {
    mutationList.forEach(function (mutation) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        if (mutation.target.classList.contains('lazyloaded')) {
          const type = mutation.target.getAttribute('alt');
          parallaxDemoImages[type] = 'loaded';
        }
        if (
          parallaxDemoImages.foreground === 'loaded' &&
          parallaxDemoImages.background === 'loaded'
        ) {
          const parallaxDemoContainer = document.querySelector('[data-js-parallex-demo]');
          showElement(parallaxDemoContainer);
        }
      } else return;
    });
  }

  let parallaxDemoImages = {
    'foreground': '',
    'background': '',
  };

  const parallaxDemoImageElements = document.querySelectorAll('[data-js-image] .Image');
  parallaxDemoImageElements.forEach((element) => {
    const parallaxDemomutationObserver = new MutationObserver(checkImageLazyloading);
    parallaxDemomutationObserver.observe(element, { attributes: true });
  });
});

window.addEventListener('load', () => {
  const mainElement = document.querySelector('[data-js-main]');
  mainElement.classList.add('-Show');
});
