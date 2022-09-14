/** @format */
document.addEventListener('DOMContentLoaded', () => {
  const megamenuItemElements = document.querySelectorAll('[data-js-menu-item]');
  console.log('megamenuItemElements: ', megamenuItemElements);

  const selectActiveContent = (menuItems) => {
    let activeContent;

    menuItems.forEach((item) => {
      const itemState = item.getAttribute('data-js-menu-item');
      if (itemState === 'active') {
        const itemType = item.getAttribute('data-js-content-type');
        const selector = `
          [data-container="${itemType}"]
        `;
        console.log('selector: ', selector);
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
    megamenuItem.addEventListener('click', (event) => {
      const aciveContent = selectActiveContent(megamenuItemElements);
      console.log('aciveContent: ', aciveContent);
      closeContentContainer(megamenuItem, aciveContent);
      const contentToBeOpened = selectContentToBeOpened(megamenuItem);
      console.log('contentToBeOpened: ', contentToBeOpened);
      openContentContainer(megamenuItem, contentToBeOpened);
    });
  });
});
