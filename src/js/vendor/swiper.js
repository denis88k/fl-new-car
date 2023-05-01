// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  Pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  Navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
