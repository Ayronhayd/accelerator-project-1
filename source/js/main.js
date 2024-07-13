import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const video = document.querySelector('.video');
const button = document.querySelector('.video__play');
const src = video.dataset.src;

button.addEventListener('click', () => {
  if (video.classList.contains('video__iframe')) {
    return;
  }
  video.insertAdjacentHTML('afterbegin', `<iframe class="video__iframe" src="${src}" width="100%" height="100%" title="video" allowfullscreen></iframe>`);
});


const swiper = new Swiper('.swiper__container', {
  modules: [Navigation],
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 2,
      allowTouchMove: true,
      spaceBetween: 40,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 40,
    }
  },
});


swiper();

