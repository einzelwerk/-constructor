/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/scripts/modules/modal.js
function openModal(name) {
  document.querySelectorAll("[data-modal-open=\"".concat(name, "\"]")).forEach(function (openBtn) {
    openBtn.addEventListener('click', function () {
      var modalName = openBtn.dataset.modalOpen;
      var modal = document.querySelector("[data-modal=\"".concat(modalName, "\"]"));
      modal.classList.add('modal_active');
      document.body.style.overflow = 'hidden';
    });
  });
  document.addEventListener('click', function (e) {
    var modal = document.querySelector("[data-modal=\"".concat(name, "\"].modal_active"));
    var closeBtn = document.querySelector("[data-modal=\"".concat(name, "\"] .modal__close"));
    if (e.target.closest('[data-modal-open]') || !modal || e.target.closest('.modal__content') && !closeBtn.contains(e.target)) return;
    modal.classList.remove('modal_active');
    document.body.style.overflow = null;
  });
}
;// CONCATENATED MODULE: ./src/scripts/components/modal-1.js

openModal('modal-1');
/******/ })()
;