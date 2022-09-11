import Swiper from './vendor/swiper-bundle';

let swiper = new Swiper('.coaches-slider__swiper', {
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.slider-controls-coaches-next',
    prevEl: '.slider-controls-coaches-prev',
  },
  breakpoints: {
    640: {
      centeredSlides: false,
      spaceBetween: 30,
    },

    1200: {
      centeredSlides: false,
      spaceBetween: 40,
    },
  },
});

let carousel = new Swiper('.reviews-swiper', {
  slidesPerView: 1,
  spaceBetween: -1,
  autoHeight: true,
  navigation: {
    nextEl: '.slider-controls-review-next',
    prevEl: '.slider-controls-review-prev',
  },
});

export {swiper, carousel};
