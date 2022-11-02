let openTabs = document.querySelector('.ui-breadcrumbs.tabs');

openTabs.addEventListener('click', (e) => {
  if(e.target.classList[0] === 'ui-breadcrumbs-link') {
    let dataName = e.target.dataset.name;
    let activeTab = document.querySelector('.swiper-wrapper.active');
    let activeLink = document.querySelector('.ui-breadcrumbs-link.active');
    let tab = document.querySelector(`.swiper-wrapper.${dataName}`);
    let tabLink = document.querySelector(`.ui-breadcrumbs-link.${dataName}`);

    activeTab.classList.remove('active');
    activeLink.classList.remove('active');

    tab.classList.add('active');
    tabLink.classList.add('active');

    swiperTab.slideTo(0)
  }
})