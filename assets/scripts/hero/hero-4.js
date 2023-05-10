/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
new window.helpFunctions.swiper.Swiper('.hero-4 .swiper', {
  modules: [window.helpFunctions.swiper.Pagination, window.helpFunctions.swiper.Autoplay],
  pagination: {
    clickable: true,
    type: 'bullets',
    el: '.hero-4__slider-pagination',
    bulletClass: 'hero-4__slider-pagination-bullet',
    bulletActiveClass: 'hero-4__slider-pagination-bullet_active'
  },
  autoplay: {
    delay: 5000
  },
  speed: 1500,
  spaceBetween: 0,
  keyboard: true,
  rewind: true,
  simulateTouch: false
});
/******/ })()
;