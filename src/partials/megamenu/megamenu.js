const megamenu = document.querySelector('[data-js-megamenu]');
const megamenuItems = megamenu.querySelectorAll('[data-js-megamenu-item]');

megamenuItems.forEach((megamenuItem) => {
  const link = megamenuItem.querySelector('[href]').getAttribute('href');
  const searchExpression = new RegExp(link);
  const url = document.URL;

  if (url.match(searchExpression)) {
    megamenuItem.setAttribute('item-state', 'active');
  } else {
    megamenuItem.setAttribute('item-state', 'not-active');
  }
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
  if (megamenu.classList.contains('-Show')) return;
  megamenu.classList.add('-Show');
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
  megamenu.classList.remove('-Show');
  hideOverlay();
  requestAnimationFrame(() => {
    navDrawerTriggerElement.addEventListener('click', openNavDrawer);
  });
};

navDrawerTriggerElement.addEventListener('click', openNavDrawer);
console.log('navDrawerTriggerElement: ', navDrawerTriggerElement);
