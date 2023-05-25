/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
new window.helpFunctions.swiper.Swiper('.swiper.cards-2__slider', {
  modules: [window.helpFunctions.swiper.Navigation, window.helpFunctions.swiper.Autoplay],
  navigation: {
    prevEl: '.cards-2__slider-btn_prev',
    nextEl: '.cards-2__slider-btn_next'
  },
  autoplay: {
    delay: 5000
  },
  speed: 1000,
  slidesPerView: 1.112,
  spaceBetween: 12,
  keyboard: true,
  rewind: true
});
/******/ })()
;