// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';


const video = document.querySelector('.video');
const button = document.querySelector('.video__play');
const src = video.dataset.src;

button.addEventListener('click', () => {
  if (video.classList.contains('video__iframe')) {
    return;
  }
  video.classList.add('video__iframe');
  video.insertAdjacentHTML('afterbegin', `<iframe class="video__iframe" src="${src}" title="video" frameborder="1" allow="autoplay"; allowfullscreen></iframe>`);
});
