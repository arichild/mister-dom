// delete card for cart.html
document.body.addEventListener('click', (e) => {
  const getClass = e.target.classList[1];

  if(getClass === 'remove') {
    const cartItem = e.target.closest('.cart-item');

    cartItem.remove();
  }
})

// search menu onclick for header input and clear button
const search = document.getElementById('search');
const btnClear = document.getElementsByClassName('clear-input')[0];
const searchMenu = document.querySelector('.header-search-result');

// search.addEventListener('focus', () => {
//   const numberBlock = document.querySelector('.header-control-number');
//   const infoBlock = document.querySelector('.header-control-item');
//   const headerControlBlock = document.querySelector('.header-control-top');

//   numberBlock.style.display = 'none'
//   infoBlock.style.display = 'none'

//   headerControlBlock.style.justifyContent = 'space-between'

//   searchMenu.classList.add('active')
//   btnClear.classList.add('active')
// });

document.body.addEventListener('click', (e) => {
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

// @note: is not a function
// btnClear.addEventListener('click', (e) => {
//   const input = document.querySelector('.ui-input');

//   e.preventDefault();

//   input.value = '';
// })

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

burgerBtn.addEventListener('click', () => {
  const burgerMenu = document.querySelector('.header-burger')

  burgerMenu.classList.add('active')
})

burgerBtnClose.addEventListener('click', (e) => {
  console.log(e.target)
  const burgerMenu = document.querySelector('.header-burger')

  burgerMenu.classList.remove('active')
})


//@note: мб сделать для making-order чтобы span.current при заполненом ипнуте не уберался, а когда пустой, то убирать?
