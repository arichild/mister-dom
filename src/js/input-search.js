const search = document.getElementById('search');
const btnClear = document.querySelector('.header-control-btn.clear-input');
const searchResult = document.querySelector('.header-search-result');

search.addEventListener('focus', () => {
  searchResult.classList.add('active')
  btnClear.classList.add('active')
});

// search.addEventListener('blur', () => {
//   searchResult.classList.remove('active')
// });

btnClear.addEventListener('click', (e) => {
  const input = document.querySelector('.ui-input');

  e.preventDefault();

  input.value = ''
})
