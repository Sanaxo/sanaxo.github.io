// import Swiper JS
import Swiper from 'swiper/bundle';
// import Swiper styles
import 'swiper/css';

document.addEventListener('DOMContentLoaded', () => {
  const galleries = document.querySelectorAll('[data-js-gallery]')

  const centerThumbnailSlide = (swiper, index) => {
    const containerWidth = swiper.el.clientWidth;
    const wrapperWidth = swiper.wrapperEl.scrollWidth;

    if (wrapperWidth <= containerWidth) return;

    const slide = swiper.slides[index];
    const slideOffset = slide.offsetLeft;
    const slideWidth = slide.offsetWidth;

    const offsetBefore = swiper.params.slidesOffsetBefore || 0;
    const offsetAfter = swiper.params.slidesOffsetAfter || 0;

    const targetScroll = slideOffset - (containerWidth / 2) + (slideWidth / 2);

    const minScroll = 0 - offsetBefore;
    const maxScroll = wrapperWidth - containerWidth + offsetAfter;
    const clampedScroll = Math.max(minScroll, Math.min(targetScroll, maxScroll));

    swiper.setTransition(300);
    swiper.setTranslate(-clampedScroll);
  }


  galleries.forEach((gallery) => {

    const galleryElement = gallery.querySelector('.Gallery')
    const galleryThumbnailsElement = gallery.querySelector('.GalleryThumbnails')
    const galleryPrevButton = gallery.querySelector('.swiper-button-prev')
    const galleryNextButton = gallery.querySelector('.swiper-button-next')

    const galleryThumbnail = new Swiper(galleryThumbnailsElement, {
      spaceBetween: 10,
      slidesPerView: 'auto',
      grabCursor: true,
      slidesOffsetAfter: 10,
      slidesOffsetBefore: 10,
      centeredSlides: false,
      slideToClickedSlide: true,
      freeMode: false,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });

    const gallerySwiper = new Swiper(galleryElement, {
      spaceBetween: 10,
      centeredSlides: true,
      slidesPerView: 1,
      centeredSlidesBounds: true,
      grabCursor: true,
      navigation: {
        nextEl: galleryNextButton,
        prevEl: galleryPrevButton,
      },
      zoom: {
        maxRatio: 5,
      },
      thumbs: {
        swiper: galleryThumbnail,
      },
    });

    gallerySwiper.on('slideChange', () => {
      const activeIndex = gallerySwiper.realIndex;
      centerThumbnailSlide(galleryThumbnail, activeIndex);
    });

    galleryThumbnail.on('click', (swiper) => {
      const clickedIndex = swiper.clickedIndex;
      if (clickedIndex !== undefined) {
        gallerySwiper.slideTo(clickedIndex);
        centerThumbnailSlide(galleryThumbnail, clickedIndex);
      }
    });
  })

});

