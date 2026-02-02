(()=>{
  const header = document.querySelector('[data-js-header]')
  const navItems = header.querySelectorAll('[data-js-nav-item]')
  const main = document.querySelector('[data-js-main]')
  const galleries = document.querySelectorAll('[data-js-gallery]')

  const openGallery = (galleryName) => {
    if(!galleryName) return
    const target = Array.from(galleries).find(g => g.getAttribute('data-js-gallery') === galleryName)
    if(!target) return

    // hide all galleries
    galleries.forEach((galleryContainer)=>{
      galleryContainer.classList.add('-hidden')
      const galleryEl = galleryContainer.querySelector('.Gallery')
      if(galleryEl){
        galleryEl.classList.remove('-loading')
      }
    })

    // show target and start loading state
    target.classList.remove('-hidden')
    const targetGalleryEl = target.querySelector('.Gallery')
    if(targetGalleryEl){
      targetGalleryEl.classList.add('-loading')
      window.setTimeout(()=>{
        targetGalleryEl.classList.remove('-loading')
      }, 400)
    }
  }

  // initialize: hide all but first gallery
  if(galleries.length > 0){
    galleries.forEach((g, index)=>{
      if(index === 0){
        g.classList.remove('-hidden')
      } else {
        g.classList.add('-hidden')
      }
    })
  }

  // wire nav clicks
  navItems.forEach((item)=>{
    item.addEventListener('click', ()=>{
      const name = item.getAttribute('data-js-name')
      openGallery(name)
    })
  })
  
})()