// import Swiper JS
import Swiper from 'swiper/bundle';
// import Swiper styles
import 'swiper/css';

document.addEventListener('DOMContentLoaded', () => {
  const galleryThumbnail = new Swiper('.GalleryThumbnails', {
    spaceBetween: 10,
    slidesPerView: 'auto',
    grabCursor: true,
    slidesOffsetAfter: 80,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });

  const gallery = new Swiper('.Gallery', {
    spaceBetween: 10,
    centeredSlides: true,
    centeredSlidesBounds: true,
    grabCursor: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    zoom: {
      maxRatio: 5,
    },
    thumbs: {
      swiper: galleryThumbnail,
    },
  });
});
