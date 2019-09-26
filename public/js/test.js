let cart = {};
document.querySelectorAll('.add-to-cart').forEach(function (element) {
    element.onclick = addToCart;
});
document.querySelector('.modal-toggle').addEventListener('click', showModal);
document.querySelectorAll('.modal-close').forEach(function (element) {
    element.onclick = closeModal;
});
document.querySelectorAll('.modal-closing').forEach(function (element) {
    element.onclick = closeModal;
});
document.querySelector('.openBar').addEventListener('click',openBar);



if (!localStorage.getItem('cart') || Object.keys(JSON.parse(localStorage.getItem('cart'))).length == 0 ){
    document.querySelector('.alternative').style.display = 'block';
    document.querySelector('.modal-toggle').style.display = 'none';
    document.querySelector('.total').style.display = 'none';
}

if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
    ajaxGetGoodsInfo();
}

function openBar() {
    document.querySelector('.mobSideB').style.display = 'block';
    document.querySelector('.closeBar').style.display = 'block';
    document.querySelector('.closeBar').addEventListener('click', closeBar);
}
function closeBar() {
    document.querySelector('.mobSideB').style.display = 'none';
    document.querySelector('.closeBar').style.display = 'none';

}
function showModal() {
    document.querySelector('.modal').style.display = 'block';
}

function closeModal() {
    document.querySelector('.modal').style.display = 'none';
}

function cartPlus() {
    let goodsId = this.dataset.goods_id;
    // console.log(cart[goodsId]);
    cart[goodsId]++;
    ajaxGetGoodsInfo();
}


function ajaxGetGoodsInfo() {
    updateStorage();
    fetch('/get-goods-info', {
        method: 'POST',
        body: JSON.stringify({key: Object.keys(cart)}),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(function (response) {
            return response.text();
        })
        .then(function (body) {
            // console.log(body);
            showCart(JSON.parse(body));
        });
}

function addToCart() {
    let goodsId = this.dataset.product_id;
    if (cart[goodsId]){
        cart[goodsId]++;
    }
    else {
        cart[goodsId] = 1;
    }
    console.log(cart);
    ajaxGetGoodsInfo();

}

function showCart(data) {
    let out = '';
    let total = 0;
    for (let key in cart) {
        // out +=`<p>${data[key]['name']}</p>`;
        // out +=`<p>${cart[key]}</p>`;
        // out += `<p>${data[key]['cost']*cart[key]} грн</p>`;
        // out +=`<button class="cart-minus" data-goods_id="${data[key]['id']}">-</button>`;
        // out +=`<button class="cart-plus" data-goods_id="${data[key]['id']}">+</button>`;
        // total += cart[key]*data[key]['cost'];

        out += `<table class="table">`;
        out += `<tr>`;
        out += `<th>Фото:  </th>`;
        out += `<th>Наименование:  </th>`;
        out += `<th>Количество: </th>`;
        out += `<th> Цена :      </th>`;
        out += `<th> Удалить </th>`;
        out +=  `<tr>`;
        out += `<th><img class="photo" src="images/micron/${data[key]['image']}"> </th>                     `;
        out += `<th>        ${data[key]['name']  }</th>`;
        out += `<th>  <button data-goods_id="${data[key]['id']}" class="cart-minus">-</button>  `;
        out += `                     ${cart[key]  }`;
        out += `  <button data-goods_id="${data[key]['id']}" class="cart-plus">+</button> </th> `;
        out += `<th>  `;
        out +=        `${data[key]['cost']*cart[key]} грн` ;
        out += `</th>`;
        out += `<th><button data-goods_id="${data[key]['id']}" class="cartDelete">x</button></th>`;
        out += '<br>';
        out += `</tr>`;
        out +=`</table>`;
        total += cart[key]*data[key]['cost'];


    }
    out += `<div class="total"><h2>Всего: ${total} грн</h2></div>`;
    document.querySelector('.cart-cart').innerHTML = out;
    document.querySelectorAll('.cart-minus').forEach(function (element) {
        element.onclick = cartMinus;
    });
    document.querySelectorAll('.cart-plus').forEach(function (element) {
        element.onclick = cartPlus;
    });
    document.querySelectorAll('.cartDelete').forEach(function (element) {
        element.onclick = cartDelete;
    });
}



function cartMinus() {
    let goodsId = this.dataset.goods_id;
    if (cart[goodsId] -1 > 0) {
        cart[goodsId] --;
    }
    else{
        delete(cart[goodsId]);
    }
    ajaxGetGoodsInfo();
    updView();
}

function cartDelete() {
    let goodsId = this.dataset.goods_id;
    delete (cart[goodsId]);
    ajaxGetGoodsInfo();
   updView();
}

function updateStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));

}

function updView() {
    if (Object.keys(JSON.parse(localStorage.getItem('cart'))).length == 0){
        document.querySelector('.alternative').style.display = 'block';
        document.querySelector('.modal-toggle').style.display = 'none';
        document.querySelector('.total').style.display = 'none';
    }

}