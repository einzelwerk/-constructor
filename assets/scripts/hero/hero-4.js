/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
var hero4Swiper = new window.helpFunctions.swiper.Swiper('.hero-4 .swiper', {
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
if (hero4Swiper.slides.length <= 1) {
  // Отключение navigation и pagination
  hero4Swiper.pagination.destroy();

  // Скрытие элементов navigation и pagination
  document.querySelector('.hero-4__slider-pagination').style.display = 'none';
}
/******/ })()
;