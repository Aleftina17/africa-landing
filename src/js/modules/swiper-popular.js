import Swiper from "swiper/bundle";
import "swiper/css/bundle";

function swiperFunc() {
  const swiper = new Swiper("#swiperPopular", {
    slidesPerView: 1,
    spaceBetween: 32,
    navigation: {
      nextEl: "#sliderNext",
      prevEl: "#sliderPrev",
    },
    breakpoints: {
      425: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
      790: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
      1000: {
        slidesPerView: 4,
        spaceBetween: 32,
      },
      1080: {
        slidesPerView: 5,
        spaceBetween: 32,
      },

    },
  });
}

export default swiperFunc;
