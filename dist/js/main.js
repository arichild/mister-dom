// delete card for cart.html
const cartList = document.querySelector('.cart-list');

if(cartList) {
  cartList.addEventListener('click', (e) => {
    const getClass = e.target.classList[1];

    if(getClass === 'remove') {
      const cartItem = e.target.closest('.cart-item');

      cartItem.remove();
    }
  })
}

const search = document.getElementById('search');

if(search) {
  const btnClear = document.querySelector('.clear-input');
  const searchMenu = document.querySelector('.header-search-result');
  const numberBlock = document.querySelector('.header-control-number');
  const infoBlock = document.querySelector('.header-control-item');
  const headerControlBlock = document.querySelector('.header-control-top');
  const searchBlock = document.querySelector('.header-control-search');

  search.addEventListener('focus', () => {
    searchMenu.classList.add('active')
    btnClear.classList.add('active')

    numberBlock.classList.add('hidden');
    infoBlock.classList.add('hidden-search');
    headerControlBlock.classList.add('current');
    searchBlock.classList.add('current');
  })

  $(document).on('mouseup',function(e) {
    if ($('.form-header').has(e.target).length === 0) {
      searchMenu.classList.remove('active');
      btnClear.classList.remove('active');

      numberBlock.classList.remove('hidden');
      infoBlock.classList.remove('hidden-search');
      headerControlBlock.classList.remove('current');
      searchBlock.classList.remove('current');
    }
  });

  btnClear.addEventListener('click', (e) => {
    e.preventDefault();

    search.value = '';
  });

  (function() {
    if(matchMedia) {
      const screen1024 = window.matchMedia('(max-width:1024px)');

      screen1024.addListener(changes);
      changes(screen1024);
    }

    function changes(screen) {
      if(screen.matches) {
        //экран менее 1024
        $('.header-mob .header-mob-bottom').append($('.form-header'))
      } else {
        //экран более 1024
        $('.header-control-search.main').append($('.form-header'))
      }
    }
  })();
}

// tab
let openTabs = document.querySelector('.ui-tab.tabs');

if(openTabs) {
  openTabs.addEventListener('click', (e) => {
    if(e.target.classList[0] === 'ui-tab-link') {
      let dataName = e.target.dataset.name;
      let activeTab = document.querySelector('.swiper.active') || document.querySelector('.slider-tab.active');
      let activeLink = document.querySelector('.ui-tab-link.active');
      let tab = document.querySelector(`.swiper.${dataName}`) || document.querySelector(`.slider-tab.${dataName}`);
      let tabLink = document.querySelector(`.ui-tab-link.${dataName}`);

      activeTab.classList.remove('active');
      activeLink.classList.remove('active');

      tab.classList.add('active');
      tabLink.classList.add('active');

      if(tab === document.querySelector(`.swiper.${dataName}`)) {
        for(let i = 0; i < swiperTab.length; i++) {
          swiperTab[i].slideTo(0)
        }
      }
    }
  })
}

// burger
const burgerBtn = document.querySelector('.header-icon.burger');
const burgerBtnClose = document.querySelector('.header-burger-close');

if(burgerBtn) {
  burgerBtn.addEventListener('click', () => {
    const burgerMenu = document.querySelector('.header-burger')

    burgerMenu.classList.add('active');

    document.body.style.overflow = 'hidden';

    $('.header-burger-search').append($('.form-header'))
  })
}

if(burgerBtnClose) {
  burgerBtnClose.addEventListener('click', (e) => {
    const burgerMenu = document.querySelector('.header-burger');

    burgerMenu.classList.remove('active');

    document.body.style.overflow = 'visible';

    $('.header-mob-bottom').append($('.form-header'))
  })
}

// dropdown
const dropdownItem = document.querySelectorAll('.dropdown');

if(dropdownItem) {
  for(let i = 0; i < dropdownItem.length; i++) {
    dropdownItem[i].addEventListener('click', (e) => {
      const dropdown = e.target.closest('.dropdown').querySelector('.dropdown-content');

      if(e.target.classList[0] === 'dropbtn') {

        dropdown.classList.add('active')
      }

      if(e.target.classList[0] === 'dropdown-option') {
        const selectedCountryName = e.target.textContent;
        const countryNamePlace = e.target.closest('.dropdown').querySelector('.dropbtn');
        const countryNameOption = e.target.closest('.dropdown').querySelectorAll('.dropdown-option.active');

        countryNamePlace.textContent = selectedCountryName;

        dropdown.classList.remove('active');

        for(let i = 0; i < countryNameOption.length; i++) {
          countryNameOption[i].classList.remove('active');
        }

        e.target.classList.add('active')
      }
    })
  }
}

const inputField = document.querySelectorAll('.ui-field input');

if(inputField) {
  for(let i = 0; i < inputField.length; i++) {
    inputField[i].addEventListener('focus', (e) => {
      const span = e.target.parentNode.querySelector('.ui-label');

      if(e.target.value === '') {
        span.classList.add('active')
      }
    })

    inputField[i].addEventListener('blur', (e) => {
      const span = e.target.parentNode.querySelector('.ui-label');

      if(e.target.value !== '') {
        span.classList.add('active')
      } else {
        span.classList.remove('active')
      }
    })
  }
}

const targetBlock = document.querySelectorAll('.cart-txt .ui-input');

if(targetBlock) {
  for(let i = 0; i < targetBlock.length; i++) {
    targetBlock[i].addEventListener('blur', (e) => {
      if(e.target.value !== '') {
        const discountBlock = e.target.closest('.cart-price').querySelector('.cart-price-discount')

        e.target.classList.add('hide');

        discountBlock.classList.add('active')
      }
    })
  }
}

const deleteDiscount = document.querySelectorAll('.cart-price-discount');

if(deleteDiscount) {
  for(let i = 0; i < deleteDiscount.length; i++) {
    deleteDiscount[i].addEventListener('click', (e) => {
      if(e.target.classList[0] === 'sprite') {
        const input = e.target.closest('.cart-price').querySelector('.ui-input');
        const thisBlock = e.target.closest('.cart-price-discount')

        input.classList.remove('hide')
        thisBlock.classList.remove('active')
      }
    })
  }
}

$(document).on("click", ".mfp-link", function () {
    var a = $(this);

    $.magnificPopup.open({
      items: { src: a.attr("data-href") },
      type: "ajax",
      overflowY: "scroll",
      removalDelay: 300,
      mainClass: 'my-mfp-zoom-in',
      ajax: {
        tError: "Error. Not valid url",
      },
      callbacks: {
        open: function () {
          setTimeout(function(){
            $('.mfp-wrap').addClass('not_delay');
            $('.mfp-popup').addClass('not_delay');
          },700);
        }
      },

      callbacks: {
        open: function() {
          document.documentElement.style.overflow = 'hidden'
        },

        close: function() {
          document.documentElement.style.overflow = ''
        }
      }
    });
    return false;
  });

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

$(".order-form").validate({
  errorElement: "span",

  rules: {
    surname: {
      required: true,
      lettersonly: true,
    },
    name: {
      required: true,
      lettersonly: true,
    },
    lastName: {
      required: true,
      lettersonly: true,
    },
    email: {
      required: true,
      email: true,
    },
    phone: {
      required: true,
      minlength: 19,
      phoneNumber: true
    },
    town: {
      required: true,
      lettersonly: true,
    },
    address: {
      required: true,
    },
    select1: {
      required: true,
    },
    select: {
      required: true,
    }
  },

  errorPlacement: function (error, element) {
    if (element.hasClass('ui-radio')) {
      element.closest('.ui-select').append(error);
    }

    if (element.hasClass('ui-input')) {
      element.closest('.ui-field').append(error);
    }
  },

  messages: {
    surname: {
      required: "Пожалуйста, введите данные",
      lettersonly: "Ваше имя не может состоять из цифр",
    },
    name: {
      required: "Пожалуйста, введите данные",
      lettersonly: "Ваша фамилия не может состоять из цифр",
    },
    lastName: {
      required: "Пожалуйста, введите данные",
      lettersonly: "Ваше отчество не может состоять из цифр",
    },
    email: {
      required: "Пожалуйста, введите данные",
      email: "Введите корректный email",
    },
    phone: {
      required: "Пожалуйста, введите данные",
      minlength: "Введите полный номер",
    },
    town: {
      required: "Пожалуйста, введите данные",
    },
    address: {
      required: "Пожалуйста, введите данные",
    },
    select1: {
      required: "Пожалуйста, выберете способ доставки",
    },
    select: {
      required: "Пожалуйста, выберете способ оплаты",
    },
  }
});

jQuery.validator.addMethod("lettersonly", function(value, element) {
  return this.optional(element) || /^[a-z]+$/i.test(value);
}, "Letters only please");

jQuery.validator.addMethod("phoneNumber", function(value, element) {
  if(!value.match('_')){
    return element.value === value
  }

}, "Введите корректный номер");

let phone = document.getElementById('phone')

if(phone) {
  phone.addEventListener('focus', function(){
    mask = IMask(this, {
        mask: '+{375} (00) 000-00-00',
        overwrite: true,
        lazy: false,
        placeholderChar: '_',
    });
  })
}
