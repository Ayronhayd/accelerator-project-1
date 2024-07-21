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
    nextEl: '.juri__button-next',
    prevEl: '.juri__button-prev',
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
swiper.update();

const swiper1 = new Swiper('.reviews__swiper', {
  modules: [Navigation],
  spaceBetween: 40,
  slidesPerView: 1,
  loop: false,
  navigation: {
    nextEl: '.reviews__button-next',
    prevEl: '.reviews__button-prev',
  },
});

swiper1.update();
