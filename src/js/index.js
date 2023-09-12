import autoCompleteFunc from "./modules/autoComplete";
import { TimePlugin, easepick } from "@easepick/bundle";
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import ScrollReveal from "scrollreveal";

autoCompleteFunc()

const picker = new easepick.create({
    element: document.getElementById('datepicker'),
    format: 'HH:mm, DD/MM/YY',
    plugins: [TimePlugin],
    zIndex: 10,
    css: ['https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css'],
})

const swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  spaceBetween: 32,
  navigation: {
    nextEl: '#sliderNext',
    prevEl: '#sliderPrev',
  },
})


ScrollReveal({
  distance: '60px',
  duration: 2800,
})

ScrollReveal().reveal('.header, .partners', {
  origin: 'top'
})

ScrollReveal().reveal('.discover__picture-hint, .discover__title', {
  origin: 'left'
})

ScrollReveal().reveal('.discover__picture-scroll, .discover__text, .popular__controls', {
  origin: 'right'
})

ScrollReveal().reveal('.discover__form, .discover__picture-img', {
  origin: 'bottom'
})


// import mobileNav from './modules/mobile-nav.js';
// mobileNav();
