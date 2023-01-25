$( document ).ready(function() {
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

  // event for the input to display the caption | making-order.html
  if(document.querySelectorAll('.ui-field input').length !== 0) {
    const inputField = document.querySelectorAll('.ui-field input');

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

  // making-order.html display entry values in field like "Купон"

  if(document.querySelectorAll('.cart-txt .ui-input') !== 0) {
    const targetBlock = document.querySelectorAll('.cart-txt .ui-input');

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

  // making-order.html delete values at the click of a button
  if(document.querySelectorAll('.cart-price-discount') !== 0) {
    const deleteDiscount = document.querySelectorAll('.cart-price-discount');

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

  // jquery form styler
  $('.wrapper select').styler();

  // accrodion for category.html

  if(document.getElementsByClassName("item-title")) {
    const accordion = document.getElementsByClassName("item-title");

    for (let i = 0; i < accordion.length; i++) {
      accordion[i].addEventListener("click", function(e) {
        let panel = this.nextElementSibling;

        console.log(panel)

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

  if(document.getElementById('oct-price-slider')) {
    var oct_price_slider = document.getElementById('oct-price-slider');
    noUiSlider.create(oct_price_slider, {
      start: [3, 121],
      behaviour: 'hover',
      margin: 1,
      connect: true,
      range: {
        'min': [3],
        'max': [121]
      },
      format: wNumb({
        decimals: 0
      }),
      slide: function(event, ui) {
        if (ui.value == parseInt($('#oct-product-filter-data input[name=\'high_price\']').val())-1) {
          return false;
        }
      }
    });
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
});
