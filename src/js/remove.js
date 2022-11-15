document.body.addEventListener('click', (e) => {
  console.log(e.target.classList[0])
  if(e.target.classList[1] === 'remove') {
    const cartItem = e.target.closest('.cart-item')

    cartItem.remove()
  }
})
