const search = document.getElementById('search');
const btnClear = document.querySelector('.header-control-btn.clear-input');
const searchResult = document.querySelector('.header-search-result');

search.addEventListener('focus', (e) => {
  searchResult.classList.add('active')
  btnClear.classList.add('active')
});

document.body.addEventListener('click', (e) => {
  if(e.target.closest('.header-search-result.active') === null && e.target !== search && e.target !== btnClear) {
    searchResult.classList.remove('active')
  }
});

btnClear.addEventListener('click', (e) => {
  const input = document.querySelector('.ui-input');

  e.preventDefault();

  input.value = ''
})
