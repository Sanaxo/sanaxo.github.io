document.addEventListener('DOMContentLoaded', () => {
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