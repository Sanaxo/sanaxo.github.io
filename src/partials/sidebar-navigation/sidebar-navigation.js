document.addEventListener('DOMContentLoaded', () => {
  const sidebars = document.querySelectorAll('[data-js-sidebar]')

  sidebars.forEach((sidebar) => {
    const toggle = sidebar.querySelector('[data-js-toggle]')
    const sidebarList = sidebar.querySelector('[data-js-sidebar-list]')

    toggle.addEventListener('click', () => {
      sidebarList.classList.toggle('open')
    })
  })
})