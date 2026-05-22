import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

let gallerySwiper = null;
let reviewsSwiper = null;

function initSwipers() {
  const isDesktop = window.innerWidth >= 1440;

  // =========================
  // Gallery
  // =========================

  if (!gallerySwiper) {
    gallerySwiper = new Swiper('.gallery-swiper', {
      modules: [Navigation, Autoplay],

      loop: true,
      speed: 800,

      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

      navigation: {
        nextEl: '.gallery-next',
        prevEl: '.gallery-prev',
      },

      slidesPerView: 1.7,
      spaceBetween: 16,

      breakpoints: {
        1440: {
          slidesPerView: 6,
          spaceBetween: 24,
        },
      },
    });
  }

  // =========================
  // Reviews
  // =========================

  if (isDesktop) {
    if (reviewsSwiper) {
      reviewsSwiper.destroy(true, true);
      reviewsSwiper = null;
    }
  } else {
    if (!reviewsSwiper) {
      reviewsSwiper = new Swiper('.reviews-swiper', {
        modules: [Autoplay],

        loop: true,
        speed: 800,

        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },

        slidesPerView: 1.06,
        spaceBetween: 16,
      });
    }
  }
}

initSwipers();

window.addEventListener('resize', () => {
  initSwipers();
});