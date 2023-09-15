import Swiper from "swiper/bundle";
import "swiper/css/bundle";

function swiperFunc() {
  const swiper = new Swiper("#swiperPopular", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: "#sliderNext",
      prevEl: "#sliderPrev",
    },
    breakpoints: {
      660: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },

    },
  });
}

export default swiperFunc;
