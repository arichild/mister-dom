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

// search menu onclick for header input and clear button
const wrapper = document.querySelector('.wrapper')

if(wrapper) {
  const search = document.getElementById('search');
  const btnClear = document.querySelector('.clear-input');
  const searchMenu = document.querySelector('.header-search-result');

  wrapper.addEventListener('click', (e) => {
    const parentSearchMenu = e.target.closest('.header-search-result.active');
    const numberBlock = document.querySelector('.header-control-number');
    const infoBlock = document.querySelector('.header-control-item');
    const headerControlBlock = document.querySelector('.header-control-top');
    const searchBlock = document.querySelector('.header-control-search');

    if(parentSearchMenu === null && e.target !== search && e.target !== btnClear) {
      searchMenu.classList.remove('active');
      btnClear.classList.remove('active');

      numberBlock.classList.remove('hidden');
      infoBlock.classList.remove('hidden-search');
      headerControlBlock.classList.remove('current');
      searchBlock.classList.remove('current');
    } else {
      searchMenu.classList.add('active');
      btnClear.classList.add('active');

      numberBlock.classList.add('hidden');
      infoBlock.classList.add('hidden-search');
      headerControlBlock.classList.add('current');
      searchBlock.classList.add('current');
    }
  });

  btnClear.addEventListener('click', (e) => {
    const input = document.querySelector('.ui-input');

    e.preventDefault();

    input.value = '';
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
