const swiperTab = new Swiper('.swiper.slider-new', {
  slidesPerView: 4,
  spaceBetween: 40,
  setWrapperSize: true,

  navigation: {
    nextEl: '.swiper-button-next.btn-new-next',
    prevEl: '.swiper-button-prev.btn-new-prev',
  },
});

const duosMain = new Swiper('.swiper.duos-main', {
  slidesPerView: 1,
  setWrapperSize: true,

  navigation: {
    nextEl: '.swiper-button-next.btn-main-next',
    prevEl: '.swiper-button-prev.btn-main-prev',
  },
});

const duosSecond = new Swiper('.swiper.duos-second', {
  slidesPerView: 1,
  setWrapperSize: true,

  pagination: {
    el: ".swiper-pagination",
  },
});
