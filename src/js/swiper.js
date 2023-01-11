const swiperTab = new Swiper('.swiper.slider-new', {
  slidesPerView: 4,
  spaceBetween: 40,
  setWrapperSize: true,

  navigation: {
    nextEl: '.swiper-button-next.btn-new-next',
    prevEl: '.swiper-button-prev.btn-new-prev',
  },

  pagination: {
    el: '.swiper-pagination.new-pagination',
    type: 'bullets',
    clickable: true,
  },

  breakpoints: {
    // when window width is >= 320px
    1024: {
      slidesPerView: 4,
      spaceBetween: 40
    },
    // when window width is >= 320px
    576: {
      slidesPerView: 3,
      spaceBetween: 25
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 40
    },
  }
});

const duosMain = new Swiper('.swiper.duos-main', {
  slidesPerView: 1,
  setWrapperSize: true,

  navigation: {
    nextEl: '.swiper-button-next.btn-main-next',
    prevEl: '.swiper-button-prev.btn-main-prev',
  },

  pagination: {
    el: '.swiper-pagination.duos-main',
    type: 'bullets',
    clickable: true
  },
});

const duosSecond = new Swiper('.swiper.duos-second', {
  slidesPerView: 1,
  setWrapperSize: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
});
