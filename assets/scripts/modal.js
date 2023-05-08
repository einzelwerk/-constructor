/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/scripts/modules/modal.js
function openModal() {
  document.querySelectorAll("[data-modal-open]").forEach(function (openBtn) {
    openBtn.addEventListener('click', function () {
      var modalName = openBtn.dataset.modalOpen;
      var modal = document.querySelector("[data-modal=\"".concat(modalName, "\"]"));
      modal.classList.add('modal_active');
      document.body.style.overflow = 'hidden';
    });
  });
  document.addEventListener('click', function (e) {
    document.querySelectorAll("[data-modal].modal_active").forEach(function (modal) {
      var closeBtn = modal.querySelector(".modal__close");
      if (e.target.closest('[data-modal-open]') || !modal || e.target.closest('.modal__inner') && !closeBtn.contains(e.target)) return;
      modal.classList.remove('modal_active');
      document.body.style.overflow = null;
    });
  });
}
;// CONCATENATED MODULE: ./src/scripts/components/modal.js

openModal();
/******/ })()
;