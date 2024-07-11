// https://swiperjs.com/get-started#installation

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const video = document.querySelector('.video');
const button = document.querySelector('.video__play');
const src = video.dataset.src;

button.addEventListener('click', () => {
  if (video.classList.contains('video__iframe')) {
    return;
  }
  video.insertAdjacentHTML('afterbegin', `<iframe class="video__iframe" src="${src}" width="100%" height="100%" title="video" allowfullscreen></iframe>`);
});


const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  allowTouchMove: true,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2,
      allowTouchMove: true
    },
    1366: {
      slidesPerView: 4
    }
  },
  grid: {
    rows: 2,
    fill: 'column',
  },
});


swiper.slideNext();
