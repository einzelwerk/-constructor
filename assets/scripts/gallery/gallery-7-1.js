/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
new window.helpFunctions.swiper.Swiper('.swiper.gallery-7-1__slider', {
  modules: [window.helpFunctions.swiper.Navigation, window.helpFunctions.swiper.Autoplay],
  navigation: {
    prevEl: '.gallery-7-1__slider-btn_prev',
    nextEl: '.gallery-7-1__slider-btn_next'
  },
  autoplay: {
    delay: 5000
  },
  speed: 1000,
  slidesPerView: 'auto',
  spaceBetween: 12,
  keyboard: true,
  loop: true,
  centeredSlides: true,
  breakpoints: _defineProperty({}, window.helpFunctions.breakpointsMin.md, {
    spaceBetween: 30,
    slidesPerView: 1.3
  })
});
/******/ })()
;