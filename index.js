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
});
