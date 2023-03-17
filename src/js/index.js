// event for the input to display the caption | making-order.html
function labelForInput(selector) {
  const inputField = document.querySelectorAll(selector);

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

    checkInputValue(selector)
  }
}


function lettersOnly() {
  jQuery.validator.addMethod("lettersonly", function(value, element) {
    return this.optional(element) || /^([а-яё ]+|[a-z ]+)$/i.test(value);
  }, "Поле может состоять из букв и пробелов, без цифр");
}

function phoneRule() {
  if (document.getElementById('phone')) {
    let phone = document.getElementById('phone')

    let phoneMask = IMask(phone, {
      mask: [
        {
          mask: '+{375} (00) 000 00 00',
          startsWith: '375',
          overwrite: true,
          lazy: false,
          placeholderChar: '_',
        },
        {
          mask: '+{7} (000) 000 00 00',
          startsWith: '7',
          overwrite: true,
          lazy: false,
          placeholderChar: '_',
        },
        {
          mask: '0000000000000',
          startsWith: '',
          country: 'unknown'
        }
      ],

      dispatch: function (appended, dynamicMasked) {
        var number = (dynamicMasked.value + appended).replace(/\D/g, '');

        return dynamicMasked.compiledMasks.find(function (m) {
          return number.indexOf(m.startsWith) === 0;
        });
      }
    })
  }

  jQuery.validator.addMethod("phone", function(value, element) {
    if(value.startsWith('+375')) {
      return /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){12}(\s*)?$/i.test(value);
    } else if(value.startsWith('+7')) {
      return /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11}(\s*)?$/i.test(value);
    } else {
      return /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11,14}(\s*)?$/i.test(value);
    }
  }, "Введите полный номер");
}

lettersOnly()
phoneRule()

function checkInputValue(input) {
  const inputField = document.querySelectorAll(input);

  for(let i = 0; i < inputField.length; i++) {
    const label = inputField[i].parentNode.querySelector('.ui-label');

    if(inputField[i].value !== '') {
      label.classList.add('active')

    } else {
      label.classList.remove('active')
    }
  }
}

$( document ).ready(function() {
  labelForInput('.ui-input.label')

  // delete card for cart.html
  if(document.querySelector('.cart-list')) {
    const cartList = document.querySelector('.cart-list');

    cartList.addEventListener('click', (e) => {
      const getClass = e.target.classList[1];

      if(getClass === 'remove') {
        const cartItem = e.target.closest('.cart-item');

        cartItem.remove();
      }
    })
  }

  // search menu
  if(document.getElementById('search')) {
    const search = document.getElementById('search');
    const btnClear = document.querySelector('.clear-input');
    const searchMenu = document.querySelector('.header-search-result');
    const numberBlock = document.querySelector('.header-control-number');
    const infoBlock = document.querySelector('.header-control-item');
    const headerControlBlock = document.querySelector('.header-control-top');
    const searchBlock = document.querySelector('.header-control-search');

    function showSearchPopup() {
      searchMenu.classList.add('active')
      btnClear.classList.add('active')

      numberBlock.classList.add('hidden');
      infoBlock.classList.add('hidden-search');
      headerControlBlock.classList.add('current');
      searchBlock.classList.add('current');
    }

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
  if(document.querySelector('.ui-tab.tabs')) {
    let openTabs = document.querySelector('.ui-tab.tabs');

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
  if(document.querySelector('.header-icon.burger')) {
    const burgerBtn = document.querySelector('.header-icon.burger');

    burgerBtn.addEventListener('click', () => {
      const burgerMenu = document.querySelector('.header-burger')

      burgerMenu.classList.add('active');

      document.body.style.overflow = 'hidden';

      $('.header-burger-search').append($('.form-header'))
    })
  }

  if(document.querySelector('.header-burger-close')) {
    const burgerBtnClose = document.querySelector('.header-burger-close');

    burgerBtnClose.addEventListener('click', (e) => {
      const burgerMenu = document.querySelector('.header-burger');

      burgerMenu.classList.remove('active');

      document.body.style.overflow = 'visible';

      $('.header-mob-bottom').append($('.form-header'))
    })
  }

  // dropdown
  if(document.querySelectorAll('.dropdown').length !== 0) {
    const dropdownItem = document.querySelectorAll('.dropdown');

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

  // init magnific popup
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

  //init swiper slider
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

  const swiperRec = new Swiper('.swiper.slider-rec', {
    slidesPerView: 4,
    spaceBetween: 40,
    setWrapperSize: true,

    navigation: {
      nextEl: '.swiper-button-next.btn-rec-next',
      prevEl: '.swiper-button-prev.btn-rec-prev',
    },

    pagination: {
      el: '.swiper-pagination.rec-pagination',
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

  const imgsClone = $('.swiper-card-imgs').clone().addClass('swiper-mobile-imgs').removeClass('swiper-card-imgs');
  imgsClone.find('.card-imgs-prev').addClass('mobile-imgs-prev').removeClass('card-imgs-prev')
  imgsClone.find('.card-imgs-next').addClass('mobile-imgs-next').removeClass('card-imgs-next')
  imgsClone.find('.card-image').addClass('mobile-image').removeClass('card-image card-gallery').removeClass('card-image').removeAttr('data-qualification')
  imgsClone.find('.mobile-image').eq(0).addClass('active');

  $('.card-imgs').append(imgsClone)
  $('.swiper-mobile-imgs').wrap('<div class="mobile-imgs"></div>')

  const cardMini = new Swiper('.swiper-mobile-imgs',{
    // slidesPerView: 3,
      slidesPerView: "auto",
    // shortSwipes: false,
    spaceBetween: 15,
    navigation: {
      nextEl: ".mobile-imgs-next",
      prevEl: ".mobile-imgs-prev",
    },
    breakpoints: {
      576: {
        spaceBetween: 15
      },

      360: {
        spaceBetween: 10
      },

      300: {
        spaceBetween: 5
      }
    }
  })

  const cardSwiper = new Swiper('.swiper-card-imgs',{
    slidesPerView: 1,
    autoHeight: true, //enable auto height
    pagination: false,

    // shortSwipes: false,
    autoHeight: true,
    navigation: {
      nextEl: ".card-imgs-next",
      prevEl: ".card-imgs-prev",
    },
    // pagination: {
    //   el: '.card-imgs-pagination',
    //   type: 'bullets',
    //   clickable: true
    // },
    // breakpoints: {
    //   576: {
    //     pagination: false
    //   }
    // }
  })

  cardSwiper.on('slideChange',function(swiper){
    const index = swiper.realIndex

    cardMini.slideTo(index)
    $('.mobile-image').removeClass('active');
    $('.swiper-mobile-imgs .swiper-slide').eq(index).find('.mobile-image').addClass('active');
  })

  $(document).on('click','.mobile-image',function(e) {
    e.preventDefault();

    const index = $(this).closest('.swiper-slide').index()
    cardSwiper.slideTo(index)
    $('.mobile-image').removeClass('active')
    $(this).addClass('active');
  })

  // jquery form styler
  $('.wrapper select').styler();

  // accrodion for category.html

  if(document.getElementsByClassName("item-title")) {
    const accordion = document.getElementsByClassName("item-title");

    for (let i = 0; i < accordion.length; i++) {
      accordion[i].addEventListener("click", function(e) {
        let panel = this.nextElementSibling;

        panel.classList.toggle("active");
        this.classList.toggle("active");

        e.preventDefault()
      });
    }
  }

  // category.html
  (function() {
    if(matchMedia) {
      const screen1024 = window.matchMedia('(max-width:1024px)');

      screen1024.addListener(changes);
      changes(screen1024);
    }

    function changes(screen) {
      if(screen.matches) {
        //экран менее 1024
        $('.category-bottom').after($('.category-subscribe'))
      } else {
        //экран более 1024
        $('.category-filter-menu').after($('.category-subscribe'))
      }
    }
  })();

  // card.html
  (function() {
    if(matchMedia) {
      const screen1024 = window.matchMedia('(max-width:1024px)');

      screen1024.addListener(changes);
      changes(screen1024);
    }

    function changes(screen) {
      if(screen.matches) {
        //экран менее 1024
        $('.card-mob-slider').append($('.swiper.swiper-card-imgs'))
        $('.card-mob-slider').append($('.mobile-imgs'))
      } else {
        //экран более 1024
        $('.card-imgs').prepend($('.mobile-imgs'))
        $('.card-imgs').prepend($('.swiper.swiper-card-imgs'))
      }
    }
  })();

  // filter-menu
  if(document.querySelector('.category-btn-menu')) {
    const filterMenuBtn = document.querySelector('.category-btn-menu');
    const filterMenuClose = document.querySelector('.category-filter-close');
    const filterMenu = document.querySelector('.category-filter-menu');
    const filterMenuBg = document.querySelector('.category-filter-bg');

    filterMenuBtn.addEventListener('click', () => {
      filterMenu.classList.add('active');

      document.body.style.overflow = 'hidden'
    })

    filterMenuClose.addEventListener('click', () => {
      filterMenu.classList.remove('active')

      document.body.style.overflow = ''
    })

    filterMenuBg.addEventListener('click', () => {
      filterMenu.classList.remove('active')

      document.body.style.overflow = ''
    })
  }

  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

  if(document.querySelector('.card-tab-btn')) {
    let cardTab = document.querySelector('.card-tab-btn');

    cardTab.addEventListener('click', (e) => {
      if(e.target.classList[0] === 'card-tab-link') {
        let dataName = e.target.dataset.name;
        let activeTab = document.querySelector('.card-tab-block.active')
        let activeLink = document.querySelector('.card-tab-link.active');
        let tab = document.querySelector(`.card-tab-block.${dataName}`)
        let tabLink = document.querySelector(`.card-tab-link.${dataName}`);

        activeTab.classList.remove('active');
        activeLink.classList.remove('active');

        tab.classList.add('active');
        tabLink.classList.add('active');
      }
    })

    let openComment = document.querySelector('.card-comment-link.comment');

    openComment.addEventListener('click', (e) => {
      let comment = openComment.id;

      let activeTab = document.querySelector('.card-tab-block.active')
      let activeLink = document.querySelector('.card-tab-link.active');
      let tab = document.querySelector(`.card-tab-block.${comment}`)
      let tabLink = document.querySelector(`.card-tab-link.${comment}`);

      activeTab.classList.remove('active');
        activeLink.classList.remove('active');

        tab.classList.add('active');
        tabLink.classList.add('active');
    })

  }

  if(document.querySelector('.card-comment-form .ui-rating-stars')) {
    let arrBlock = document.querySelector('.card-comment-form .ui-rating-stars');

    arrBlock.addEventListener('click', (e) => {
      if(e.target.classList[0] === 'ui-rating-star') {
        let arrStars = document.querySelectorAll('.card-comment-form .ui-rating-star');
        let number = +e.target.dataset.value;
        let maxNumber = arrStars.length
        let count = maxNumber - (maxNumber - number)

        arrStars.forEach((e) => {
          e.classList.remove('active')
        })

        for(let i = 0; i < count; i++) {
          arrBlock.children[i].classList.add('active');
        }
      }
    })
  }

  if(document.querySelector('.card-imgs') && document.querySelectorAll('.card-imgs a.card-image').length) {
    let sliderGallery = document.querySelector('.card-imgs');

    lightGallery(sliderGallery, {
      selector: ".card-image",
      download: false,
    })
  }

  $(document).on('mouseup',function(e) {
    if ($('.dropdown-content').has(e.target).length === 0) {
      $('.dropdown-content').removeClass('active')
    }
  });
});
