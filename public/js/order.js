document.querySelector('#sendForm').onsubmit = function (event) {
    event.preventDefault();
    let username = document.querySelector('#name').value.trim();
    let mail = document.querySelector('#mail').value.trim();
    let phone = document.querySelector('#phone').value.trim();
    let delivery = document.querySelector('#delivery').value.trim();
    let adress = document.querySelector('#adress').value.trim();
    let comment = document.querySelector('#comment').value.trim();


    if (username =='' || mail=='' || phone =='' || delivery =='' || adress =='' ) {
        Swal.fire({
    type: "error",
    title: 'Ошибка!',
    text: 'Заполните поля для ввода',
        });
        return false;
    }


    fetch('/finish-order', {
        method: 'POST',
        body: JSON.stringify({
          'username' : username,
          'mail' : mail,
          'phone' : phone,
          'delivery' : delivery,
          'adress' : adress,
          'comment' : comment,
          'key' : JSON.parse(localStorage.getItem('cart'))
        }),
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(function (response) {
            return response.text();
        })
        .then(function (body) {
            if (body == 1) {
            Swal.fire({
                type: "success",
                title: 'Заказ отправлен',
                text: 'Ваш заказ успешно отправлен, мы с вами свяжемся в ближайшее время!',
                showCancelButton: true,
                showConfirmButton: true,
                confirmButtonText: '<a href="/goods" class="sweetA"> Продолжить покупки </a>',
                cancelButtonText: '<a href="/" class="sweetA"> Вернуться на главную</a>'
            })
                .then(document.querySelector('#sendForm').reset())
                .then(localStorage.setItem('cart', '{}'))
            }
    else {
     Swal.fire({
      type: "error",
      title: 'Возникла ошибка',
      text: 'Проверьте правильность ввода полей',
     });
            }
        })
};

