/** @format */

var canHandleOrientation;
if (window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', handleOrientation, false);
}

function handleOrientation(event) {
  console.log('Orientation:' + event.alpha + ', ' + event.beta + ', ' + event.gamma);
  canHandleOrientation = event; // will be either null or with event data
}
//-----detect----gyroscope------

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
    console.log('contentElement: ', contentElement);
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
  if (!canHandleOrientation) {
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
  }
  //--------------------------------MOVE-------------------------------------------------

  //--------------------------------GyroDevices----------------------------------------
  console.log('canHandleOrientation: ', canHandleOrientation);
  if (canHandleOrientation) {
    let counter = 0;
    const updateRate = 10;
    const limit = 45;

    let constraint = -100;

    function updateNow() {
      return counter++ % updateRate === 0;
    }

    window.addEventListener('deviceorientation', function (event) {
      console.log('updateNow(): ', updateNow());
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

        let style =
          'perspective(500px)  rotateX(' + position2 + 'deg) rotateY(' + position + 'deg)';
        let style2 =
          'perspective(100px) rotateX(' + position2 + 'deg) rotateY(' + position + 'deg)';

        moveForeground.style.transform = style;
        moveBackground.style.transform = style2;
      }
    });
  }
  //--------------------------------MobileDevices----------------------------------------
});
window.addEventListener('load', () => {
  const mainElement = document.querySelector('[data-js-main]');
  mainElement.classList.add('-Show');
});
