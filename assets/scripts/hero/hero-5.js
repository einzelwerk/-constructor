/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
var hero5Swiper = new window.helpFunctions.swiper.Swiper('.hero-5 .swiper', {
  modules: [window.helpFunctions.swiper.Navigation, window.helpFunctions.swiper.Autoplay],
  navigation: {
    prevEl: '.hero-5__slider-btn_prev',
    nextEl: '.hero-5__slider-btn_next'
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
if (hero5Swiper.slides.length <= 1) {
  // Отключение navigation и pagination
  hero5Swiper.navigation.destroy();

  // Скрытие элементов navigation и pagination
  document.querySelector('.hero-5__slider-btn_prev').style.display = 'none';
  document.querySelector('.hero-5__slider-btn_next').style.display = 'none';
}
/******/ })()
;