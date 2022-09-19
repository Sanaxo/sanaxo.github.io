/** @format */

document.addEventListener('DOMContentLoaded', () => {
  const megamenuItemElements = document.querySelectorAll('[data-js-menu-item]');
  const megaMenuElement = document.querySelector('[data-js-megamenu]');

  const selectActiveContent = (menuItems) => {
    let activeContent;

    menuItems.forEach((item) => {
      const itemState = item.getAttribute('data-js-menu-item');
      if (itemState === 'active') {
        const itemType = item.getAttribute('data-js-content-type');
        const selector = `
          [data-container="${itemType}"]
        `;
        activeContent = document.querySelector(selector);
      } else return;
    });

    return activeContent;
  };

  const selectContentToBeOpened = (target) => {
    const clickedElementType = target.getAttribute('data-js-content-type');
    const selector = `
  [data-container="${clickedElementType}"]
    `;
    const contentToBeOpened = document.querySelector(selector);
    return contentToBeOpened;
  };

  const openContentContainer = (menuItem, contentElement) => {
    contentElement.classList.remove('-Hidden');
    requestAnimationFrame(() => {
      contentElement.classList.add('-Show');
      menuItem.setAttribute('data-js-menu-item', 'active');
    });
  };

  const closeContentContainer = (menuItem, contentElement) => {
    contentElement.classList.remove('-Show');
    requestAnimationFrame(() => {
      contentElement.classList.add('-Hidden');
      menuItem.setAttribute('data-js-menu-item', 'not-active');
    });
  };

  megamenuItemElements.forEach((megamenuItem) => {
    megamenuItem.addEventListener('click', () => {
      const aciveContent = selectActiveContent(megamenuItemElements);
      closeContentContainer(megamenuItem, aciveContent);
      const contentToBeOpened = selectContentToBeOpened(megamenuItem);
      openContentContainer(megamenuItem, contentToBeOpened);
    });
  });

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

  //--------------------------------MOVE-------------------------------------------------

  //--------------------------------GyroDevices----------------------------------------
  let counter = 0;
  const updateRate = 10;
  const limit = 45;
  let constraint = -20;
  function updateNow() {
    return counter++ % updateRate === 0;
  }
  window.addEventListener('deviceorientation', function (event) {
    if (!event) return;

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

    //-----------------------------------VidepPlayer-----------------------------------------------------
    /** @format */
    const swiperNavigationElement = document.querySelectorAll('[data-js-video-swiper-navigatinon]');

    const hideSwiperNavigation = () => {
      swiperNavigationElement.forEach((element) => {
        if (element.classList.contains('-Hidden')) return;

        element.classList.add('-Hidden');
      });
    };

    const showSwiperNavigation = () => {
      swiperNavigationElement.forEach((element) => {
        if (!element.classList.contains('-Hidden')) return;

        element.classList.remove('-Hidden');
      });
    };

    const VideoContainerElements = document.querySelectorAll('[data-js-video]');
    if (VideoContainerElements.length > 0) {
      VideoContainerElements.forEach((videoElement) => {
        const videoThumbail = videoElement.querySelector('.Video__Thumbnail');
        const timelineContainer = videoElement.querySelector('.Controls__TimelineContainer');
        const timeline = timelineContainer.querySelector('.Timeline');
        const timelinePreviewImage = timeline.querySelector('.Timeline__PreviewImage');
        const timelineThumbIndicator = timeline.querySelector('.Timeline__ThumbIndicator');
        const playPauseButton = videoElement.querySelector('.Controls__PlayPause');
        const volumeButton = videoElement.querySelector('.Volume__Icon');
        const volumeSlider = videoElement.querySelector('.Volume__Slider');
        const durationContainer = videoElement.querySelector('.Duration__Container');
        const currentTimeElement = videoElement.querySelector('.Duration__CurrentTime');
        const totalTimeElement = videoElement.querySelector('.Duration__TotalTime');
        const captionsButton = videoElement.querySelector('.Controls__ClosedCaption');
        const playbackSpeedButton = videoElement.querySelector('.Controls__PlaybackSpeed');
        const miniPlayerButton = videoElement.querySelector('.Controls__MiniPlayer');
        const theaterButton = videoElement.querySelector('.Controls__Theater');
        const fullscreenButton = videoElement.querySelector('.Controls__Fullscreen');
        const video = videoElement.querySelector('.Video__Video');

        function togglePlay() {
          video.paused ? video.play() : video.pause();
        }

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

        playPauseButton.addEventListener('click', togglePlay);

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
          videoElement.classList.toggle('-Scrubbing');

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

          let videoName = video.getAttribute('src');
          videoName = videoName.replace(
            'https://unmemorable-commiss.000webhostapp.com/assets/',
            ''
          );
          videoName = videoName.replace('.mp4', '');

          const previewImageSource = `assets/preview/${videoName}-${previewImageNumber}.png`;
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

        // Captions
        /*
      const captions = video.textTracks[0];
      captions.mode = 'hidden';

      captionsButton.addEventListener('click', toggleCaptions);

      function toggleCaptions() {
        const areCaptionsHidden = captions.mode === 'hidden';
        captions.mode = areCaptionsHidden ? 'showing' : 'hidden';
        videoElement.classList.toggle('-Captions', areCaptionsHidden);
      }
      */
        // Duration

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

        video.addEventListener('timeupdate', () => {
          currentTimeElement.textContent = formatDuration(video.currentTime);
          const videoProgress = video.currentTime / video.duration;
          timelineContainer.style.setProperty('--progress-position', videoProgress);
        });

        const leadingZeroFormatter = new Intl.NumberFormat(undefined, {
          minimumIntegerDigits: 2,
        });

        function skip(duration) {
          video.currentTime += duration;
        }

        video.addEventListener('loadeddata', () => {
          totalTimeElement.innerText = formatDuration(video.duration);
        });

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
          volumeSlider.style.setProperty('--value', video.volume);

          volumeSlider.value = video.volume;
          let volumeLevel;
          if (video.muted || video.volume === 0) {
            volumeSlider.value = 0;
            volumeLevel = 'muted';
            volumeSlider.style.setProperty('--value', '0');
          } else if (video.volume >= 0.5) {
            volumeLevel = 'high';
          } else {
            volumeLevel = 'low';
          }
          videoElement.dataset.volume = volumeLevel;
        });

        //ViewModes

        function toggelMiniPlayerMode() {
          if (videoElement.classList.contains('-MiniPlayer')) {
            document.exitPictureInPicture();
          } else {
            video.requestPictureInPicture();
          }
        }

        function toggleTheaterMode() {
          videoElement.classList.toggle('-Theater');
        }

        function toggleFullscreenMode() {
          if (document.fullscreenElement == null) {
            videoElement.requestFullscreen();
          } else {
            document.exitFullscreen();
          }
        }

        miniPlayerButton.addEventListener('click', toggelMiniPlayerMode);
        theaterButton.addEventListener('click', toggleTheaterMode);
        fullscreenButton.addEventListener('click', toggleFullscreenMode);
        document.addEventListener('fullscreenchange', () => {
          videoElement.classList.toggle('-Fullscreen', document.fullscreenElement);
        });
        video.addEventListener('enterpictureinpicture', () => {
          videoElement.classList.add('-MiniPlayer');
        });
        video.addEventListener('leavepictureinpicture', () => {
          videoElement.classList.remove('-MiniPlayer');
        });

        // Play/Pause
        video.addEventListener('play', () => {
          videoElement.classList.remove('-Paused');
          hideSwiperNavigation();
        });

        video.addEventListener('pause', () => {
          videoElement.classList.add('-Paused');
          showSwiperNavigation();
        });

        video.addEventListener('click', togglePlay);

        const videoSlide = videoElement.parentNode;

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
      });
    } else return;

    //-----------------------------------VidepPlayer-----------------------------------------------------

    for (let e of document.querySelectorAll('input[type="range"].Volume__Slider')) {
      e.style.setProperty('--value', e.value);
      e.style.setProperty('--min', e.min == '' ? '0' : e.min);
      e.style.setProperty('--max', e.max == '' ? '100' : e.max);
      e.addEventListener('input', () => e.style.setProperty('--value', e.value));
    }
  });

  //--------------------------------GyroDevices----------------------------------------
});
window.addEventListener('load', () => {
  const mainElement = document.querySelector('[data-js-main]');
  mainElement.classList.add('-Show');
});
