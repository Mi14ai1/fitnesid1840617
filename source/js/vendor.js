import Swiper from './vendor/swiper-bundle';

let swiper = new Swiper('.coaches-slider__swiper', {
  loop: true,
  spaceBetween: 30,
  slidesPerView: 1,
  centeredSlides: true,
  navigation: {
    nextEl: '.slider-controls-coaches-next',
    prevEl: '.slider-controls-coaches-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      centeredSlides: true,
    },
    768: {
      centeredSlides: false,
      spaceBetween: 30,
      slidesPerView: 2,
    },

    1200: {
      slidesPerView: 4,
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
