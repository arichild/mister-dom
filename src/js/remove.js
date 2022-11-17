document.body.addEventListener('click', (e) => {
  if(e.target.classList[1] === 'remove') {
    const cartItem = e.target.closest('.cart-item')

    cartItem.remove()
  }
})
