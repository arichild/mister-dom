let phone = document.getElementById('phone')

if(phone) {
  let phoneMask = IMask(
    phone, {
      mask: '+{375} (00) 000 00 00'
  });
}
