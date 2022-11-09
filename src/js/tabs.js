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
