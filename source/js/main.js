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
  video.insertAdjacentHTML('afterbegin', `<iframe class="video__iframe" src="${src}" width="100%" height="100%" title="video" allowfullscreen></iframe>`);
});
