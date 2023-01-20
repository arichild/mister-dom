$(".order-form").validate({
  errorElement: "span",

  rules: {
    surname: {
      required: true,
      lettersonly: true,
    },
    name: {
      required: true,
      lettersonly: true,
    },
    lastName: {
      required: true,
      lettersonly: true,
    },
    email: {
      required: true,
      email: true,
    },
    phone: {
      required: true,
      minlength: 19,
      phoneNumber: true
    },
    town: {
      required: true,
      lettersonly: true,
    },
    address: {
      required: true,
    },
    select1: {
      required: true,
    },
    select: {
      required: true,
    }
  },

  errorPlacement: function (error, element) {
    if (element.hasClass('ui-radio')) {
      element.closest('.ui-select').append(error);
    }

    if (element.hasClass('ui-input')) {
      element.closest('.ui-field').append(error);
    }
  },

  messages: {
    surname: {
      required: "Пожалуйста, введите данные",
      lettersonly: "Ваше имя не может состоять из цифр",
    },
    name: {
      required: "Пожалуйста, введите данные",
      lettersonly: "Ваша фамилия не может состоять из цифр",
    },
    lastName: {
      required: "Пожалуйста, введите данные",
      lettersonly: "Ваше отчество не может состоять из цифр",
    },
    email: {
      required: "Пожалуйста, введите данные",
      email: "Введите корректный email",
    },
    phone: {
      required: "Пожалуйста, введите данные",
      minlength: "Введите полный номер",
    },
    town: {
      required: "Пожалуйста, введите данные",
    },
    address: {
      required: "Пожалуйста, введите данные",
    },
    select1: {
      required: "Пожалуйста, выберете способ доставки",
    },
    select: {
      required: "Пожалуйста, выберете способ оплаты",
    },
  }
});

jQuery.validator.addMethod("lettersonly", function(value, element) {
  return this.optional(element) || /^[a-z]+$/i.test(value);
}, "Letters only please");

jQuery.validator.addMethod("phoneNumber", function(value, element) {
  if(!value.match('_')){
    return element.value === value
  }

}, "Введите корректный номер");

let phone = document.getElementById('phone')

if(phone) {
  phone.addEventListener('focus', function(){
    mask = IMask(this, {
        mask: '+{375} (00) 000-00-00',
        overwrite: true,
        lazy: false,
        placeholderChar: '_',
    });
  })
}
