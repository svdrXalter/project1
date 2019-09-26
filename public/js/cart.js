let cart = {};
document.querySelectorAll('.add-to-cart').forEach(function (element) {
    element.onclick = addToCart;
});

document.querySelectorAll('.cart-minus').forEach(function (element) {
    element.onclick = cartMinus;
});
document.querySelectorAll('.cart-plus').forEach(function (element) {
    element.onclick = cartPlus;
});

document.querySelectorAll('.showAlert').forEach(function (element) {
    element.onclick = showAlert;
});


if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
    ajaxGetGoodsInfo();
}


function cartPlus() {
    let goodsId = this.dataset.goods_id;
    // console.log(cart[goodsId]);
    cart[goodsId]++;
    // updateStorage();
    ajaxGetGoodsInfo();
    // updates();


}

function updates() {
    let mix1 = document.querySelector('.tester1');
    let mix2 = document.querySelector('.tester15');
    let mix3 = document.querySelector('.tester57');
    let mix4 = document.querySelector('.tester68');
    let mix5 = document.querySelector('.tester72');
    let mix6 = document.querySelector('.tester95');
    let mix7 = document.querySelector('.tester101');
    let mix8 = document.querySelector('.tester129');
    let mix9 = document.querySelector('.tester136');
    if (mix1) {
        let test = JSON.parse(localStorage.getItem('cart'));
        document.querySelector('.tester1').innerHTML = `<p>${test[1]}м²</p>`;
        document.querySelector('.tester2').innerHTML = `<p>${test[2]}м²</p>`;
        document.querySelector('.tester3').innerHTML = `<p>${test[3]}м²</p>`;
        document.querySelector('.tester4').innerHTML = `<p>${test[4]}м²</p>`;
        document.querySelector('.tester5').innerHTML = `<p>${test[5]}м²</p>`;
        document.querySelector('.tester6').innerHTML = `<p>${test[6]}м²</p>`;
        document.querySelector('.tester7').innerHTML = `<p>${test[7]}м²</p>`;
        document.querySelector('.tester8').innerHTML = `<p>${test[8]}м²</p>`;
        document.querySelector('.tester9').innerHTML = `<p>${test[9]}м²</p>`;
        document.querySelector('.tester10').innerHTML = `<p>${test[10]}м²</p>`;
        document.querySelector('.tester11').innerHTML = `<p>${test[11]}м²</p>`;
        document.querySelector('.tester12').innerHTML = `<p>${test[12]}м²</p>`;
        document.querySelector('.tester13').innerHTML = `<p>${test[13]}м²</p>`;
        document.querySelector('.tester14').innerHTML = `<p>${test[14]}м²</p>`;

    }
    else if (mix2) {
        let test = JSON.parse(localStorage.getItem('cart'));
        document.querySelector('.tester15').innerHTML = `<p>${test[15]}м²</p>`;
        document.querySelector('.tester16').innerHTML = `<p>${test[16]}м²</p>`;
        document.querySelector('.tester17').innerHTML = `<p>${test[17]}м²</p>`;
        document.querySelector('.tester18').innerHTML = `<p>${test[18]}м²</p>`;
        document.querySelector('.tester19').innerHTML = `<p>${test[19]}м²</p>`;
        document.querySelector('.tester20').innerHTML = `<p>${test[20]}м²</p>`;
        document.querySelector('.tester21').innerHTML = `<p>${test[21]}м²</p>`;
        document.querySelector('.tester22').innerHTML = `<p>${test[22]}м²</p>`;
        document.querySelector('.tester23').innerHTML = `<p>${test[23]}м²</p>`;
        document.querySelector('.tester24').innerHTML = `<p>${test[24]}м²</p>`;
        document.querySelector('.tester25').innerHTML = `<p>${test[25]}м²</p>`;
        document.querySelector('.tester26').innerHTML = `<p>${test[26]}м²</p>`;
        document.querySelector('.tester27').innerHTML = `<p>${test[27]}м²</p>`;
        document.querySelector('.tester28').innerHTML = `<p>${test[28]}м²</p>`;
        document.querySelector('.tester29').innerHTML = `<p>${test[29]}м²</p>`;
        // document.querySelector('.tester30').innerHTML = `<p>${test[30]}м²</p>`;
        document.querySelector('.tester31').innerHTML = `<p>${test[31]}м²</p>`;
        document.querySelector('.tester32').innerHTML = `<p>${test[32]}м²</p>`;
        document.querySelector('.tester33').innerHTML = `<p>${test[33]}м²</p>`;
        document.querySelector('.tester34').innerHTML = `<p>${test[34]}м²</p>`;
        // document.querySelector('.tester35').innerHTML = `<p>${test[35]}м²</p>`;
        // document.querySelector('.tester36').innerHTML = `<p>${test[36]}м²</p>`;
        document.querySelector('.tester37').innerHTML = `<p>${test[37]}м²</p>`;
        document.querySelector('.tester38').innerHTML = `<p>${test[38]}м²</p>`;
        document.querySelector('.tester39').innerHTML = `<p>${test[39]}м²</p>`;
        document.querySelector('.tester40').innerHTML = `<p>${test[40]}м²</p>`;
        document.querySelector('.tester41').innerHTML = `<p>${test[41]}м²</p>`;
        document.querySelector('.tester42').innerHTML = `<p>${test[42]}м²</p>`;
        // document.querySelector('.tester43').innerHTML = `<p>${test[43]}м²</p>`;
        document.querySelector('.tester44').innerHTML = `<p>${test[44]}м²</p>`;
        document.querySelector('.tester45').innerHTML = `<p>${test[45]}м²</p>`;
        document.querySelector('.tester46').innerHTML = `<p>${test[46]}м²</p>`;
        document.querySelector('.tester47').innerHTML = `<p>${test[47]}м²</p>`;
        document.querySelector('.tester48').innerHTML = `<p>${test[48]}м²</p>`;
        document.querySelector('.tester49').innerHTML = `<p>${test[49]}м²</p>`;
        document.querySelector('.tester50').innerHTML = `<p>${test[50]}м²</p>`;
        document.querySelector('.tester51').innerHTML = `<p>${test[51]}м²</p>`;
        document.querySelector('.tester52').innerHTML = `<p>${test[52]}м²</p>`;
        document.querySelector('.tester53').innerHTML = `<p>${test[53]}м²</p>`;
        document.querySelector('.tester54').innerHTML = `<p>${test[54]}м²</p>`;
        document.querySelector('.tester55').innerHTML = `<p>${test[55]}м²</p>`;
    }
    else if (mix3) {
        let test = JSON.parse(localStorage.getItem('cart'));
        // document.querySelector('.tester56').innerHTML = `<p>${test[56]}м²</p>`;
        document.querySelector('.tester57').innerHTML = `<p>${test[57]}м²</p>`;
        document.querySelector('.tester58').innerHTML = `<p>${test[58]}м²</p>`;
        document.querySelector('.tester59').innerHTML = `<p>${test[59]}м²</p>`;
        document.querySelector('.tester60').innerHTML = `<p>${test[60]}м²</p>`;
        document.querySelector('.tester61').innerHTML = `<p>${test[61]}м²</p>`;
        document.querySelector('.tester62').innerHTML = `<p>${test[62]}м²</p>`;
        document.querySelector('.tester63').innerHTML = `<p>${test[63]}м²</p>`;
        document.querySelector('.tester64').innerHTML = `<p>${test[64]}м²</p>`;
        document.querySelector('.tester65').innerHTML = `<p>${test[65]}м²</p>`;
        document.querySelector('.tester66').innerHTML = `<p>${test[66]}м²</p>`;
        document.querySelector('.tester67').innerHTML = `<p>${test[67]}м²</p>`;
        document.querySelector('.tester142').innerHTML = `<p>${test[142]}м²</p>`;
        document.querySelector('.tester143').innerHTML = `<p>${test[143]}м²</p>`;
        document.querySelector('.tester144').innerHTML = `<p>${test[144]}м²</p>`;
        document.querySelector('.tester145').innerHTML = `<p>${test[145]}м²</p>`;
        document.querySelector('.tester146').innerHTML = `<p>${test[146]}м²</p>`;
        document.querySelector('.tester147').innerHTML = `<p>${test[147]}м²</p>`;
        document.querySelector('.tester148').innerHTML = `<p>${test[148]}м²</p>`;
    }
    else if (mix4) {
        let test = JSON.parse(localStorage.getItem('cart'));
        document.querySelector('.tester68').innerHTML = `<p>${test[68]}м²</p>`;
        document.querySelector('.tester69').innerHTML = `<p>${test[69]}м²</p>`;
        document.querySelector('.tester70').innerHTML = `<p>${test[70]}м²</p>`;
        document.querySelector('.tester71').innerHTML = `<p>${test[71]}м²</p>`;
    }
    else if (mix5) {
        let test = JSON.parse(localStorage.getItem('cart'));
        document.querySelector('.tester72').innerHTML = `<p>${test[72]}м²</p>`;
        // document.querySelector('.tester73').innerHTML = `<p>${test[73]}м²</p>`;
        document.querySelector('.tester74').innerHTML = `<p>${test[74]}м²</p>`;
        document.querySelector('.tester75').innerHTML = `<p>${test[75]}м²</p>`;
        document.querySelector('.tester76').innerHTML = `<p>${test[76]}м²</p>`;
        document.querySelector('.tester77').innerHTML = `<p>${test[77]}м²</p>`;
        document.querySelector('.tester78').innerHTML = `<p>${test[78]}м²</p>`;
        document.querySelector('.tester79').innerHTML = `<p>${test[79]}м²</p>`;
        document.querySelector('.tester80').innerHTML = `<p>${test[80]}м²</p>`;
        // document.querySelector('.tester81').innerHTML = `<p>${test[81]}м²</p>`;
        document.querySelector('.tester82').innerHTML = `<p>${test[82]}м²</p>`;
        document.querySelector('.tester83').innerHTML = `<p>${test[83]}м²</p>`;
        document.querySelector('.tester84').innerHTML = `<p>${test[84]}м²</p>`;
        document.querySelector('.tester85').innerHTML = `<p>${test[85]}м²</p>`;
        document.querySelector('.tester86').innerHTML = `<p>${test[86]}м²</p>`;
        document.querySelector('.tester87').innerHTML = `<p>${test[87]}м²</p>`;
        document.querySelector('.tester88').innerHTML = `<p>${test[88]}м²</p>`;
        document.querySelector('.tester89').innerHTML = `<p>${test[89]}м²</p>`;
        document.querySelector('.tester90').innerHTML = `<p>${test[90]}м²</p>`;
        document.querySelector('.tester91').innerHTML = `<p>${test[91]}м²</p>`;
        // document.querySelector('.tester92').innerHTML = `<p>${test[92]}м²</p>`;
        document.querySelector('.tester93').innerHTML = `<p>${test[93]}м²</p>`;
        document.querySelector('.tester94').innerHTML = `<p>${test[94]}м²</p>`;
    }
    else if (mix6) {
        let test = JSON.parse(localStorage.getItem('cart'));
        document.querySelector('.tester95').innerHTML = `<p>${test[95]}м²</p>`;
        document.querySelector('.tester96').innerHTML = `<p>${test[96]}м²</p>`;
        document.querySelector('.tester97').innerHTML = `<p>${test[97]}м²</p>`;
        document.querySelector('.tester98').innerHTML = `<p>${test[98]}м²</p>`;
        document.querySelector('.tester99').innerHTML = `<p>${test[99]}м²</p>`;
        document.querySelector('.tester100').innerHTML = `<p>${test[100]}м²</p>`;
    }
    else if (mix7) {
        let test = JSON.parse(localStorage.getItem('cart'));
        document.querySelector('.tester101').innerHTML = `<p>${test[101]}м²</p>`;
        document.querySelector('.tester102').innerHTML = `<p>${test[102]}м²</p>`;
        document.querySelector('.tester103').innerHTML = `<p>${test[103]}м²</p>`;
        document.querySelector('.tester104').innerHTML = `<p>${test[104]}м²</p>`;
        document.querySelector('.tester105').innerHTML = `<p>${test[105]}м²</p>`;
        document.querySelector('.tester106').innerHTML = `<p>${test[106]}м²</p>`;
        document.querySelector('.tester107').innerHTML = `<p>${test[107]}м²</p>`;
        document.querySelector('.tester108').innerHTML = `<p>${test[108]}м²</p>`;
        document.querySelector('.tester109').innerHTML = `<p>${test[109]}м²</p>`;
        document.querySelector('.tester110').innerHTML = `<p>${test[110]}м²</p>`;
        document.querySelector('.tester111').innerHTML = `<p>${test[111]}м²</p>`;
        document.querySelector('.tester112').innerHTML = `<p>${test[112]}м²</p>`;
        document.querySelector('.tester113').innerHTML = `<p>${test[113]}м²</p>`;
        document.querySelector('.tester114').innerHTML = `<p>${test[114]}м²</p>`;
        document.querySelector('.tester115').innerHTML = `<p>${test[115]}м²</p>`;
        document.querySelector('.tester116').innerHTML = `<p>${test[116]}м²</p>`;
        document.querySelector('.tester117').innerHTML = `<p>${test[117]}м²</p>`;
        document.querySelector('.tester118').innerHTML = `<p>${test[118]}м²</p>`;
        document.querySelector('.tester119').innerHTML = `<p>${test[119]}м²</p>`;
        document.querySelector('.tester120').innerHTML = `<p>${test[120]}м²</p>`;
        document.querySelector('.tester121').innerHTML = `<p>${test[121]}м²</p>`;
        document.querySelector('.tester122').innerHTML = `<p>${test[122]}м²</p>`;
        document.querySelector('.tester123').innerHTML = `<p>${test[123]}м²</p>`;
        document.querySelector('.tester124').innerHTML = `<p>${test[124]}м²</p>`;
        document.querySelector('.tester125').innerHTML = `<p>${test[125]}м²</p>`;
        document.querySelector('.tester126').innerHTML = `<p>${test[126]}м²</p>`;
        document.querySelector('.tester127').innerHTML = `<p>${test[127]}м²</p>`;
        document.querySelector('.tester128').innerHTML = `<p>${test[128]}м²</p>`;
    }
    else if (mix8) {
        let test = JSON.parse(localStorage.getItem('cart'));
        document.querySelector('.tester129').innerHTML = `<p>${test[129]}м²</p>`;
        document.querySelector('.tester130').innerHTML = `<p>${test[130]}м²</p>`;
        document.querySelector('.tester131').innerHTML = `<p>${test[131]}м²</p>`;
        document.querySelector('.tester132').innerHTML = `<p>${test[132]}м²</p>`;
        document.querySelector('.tester133').innerHTML = `<p>${test[133]}м²</p>`;
        document.querySelector('.tester134').innerHTML = `<p>${test[134]}м²</p>`;
        document.querySelector('.tester135').innerHTML = `<p>${test[135]}м²</p>`;
    }
    else if (mix9) {
        let test = JSON.parse(localStorage.getItem('cart'));
        document.querySelector('.tester136').innerHTML = `<p>${test[136]}м²</p>`;
        document.querySelector('.tester137').innerHTML = `<p>${test[137]}м²</p>`;
        document.querySelector('.tester138').innerHTML = `<p>${test[138]}м²</p>`;
        document.querySelector('.tester139').innerHTML = `<p>${test[139]}м²</p>`;
        document.querySelector('.tester140').innerHTML = `<p>${test[140]}м²</p>`;
        document.querySelector('.tester141').innerHTML = `<p>${test[141]}м²</p>`;

    }


}

function miniCart() {
    let number = JSON.parse(localStorage.getItem('cart'));
    let minNum = Object.keys(number).length;
    if (minNum != 0) {
    document.querySelector('.minCart').innerHTML = `<p>${minNum}</p>`;
    }
    else {
        document.querySelector('.minCart p').style.display = 'none';
    }
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
        cart[goodsId] = cart[goodsId];
    }
    else {
        cart[goodsId] = 1;
    }

    console.log(cart);
    ajaxGetGoodsInfo();

    // updates();

}

function showCart(data) {
    updates();
    miniCart();
}

function showAlert() {

    Swal.fire({
        position: "center",
        type: "success",
        title: 'Товар успешно добавлен в корзину!',
        showConfirmButton: false,
        timer: 1500
    }).then(closeModal);

}






function cartMinus() {
    let goodsId = this.dataset.goods_id;
    if (cart[goodsId] -1 > 0) {
        cart[goodsId] --;
    }
    else {
        delete(cart[goodsId]);
    }
    ajaxGetGoodsInfo();
    // updates();
}

function cartDelete() {
    let goodsId = this.dataset.goods_id;
    delete (cart[goodsId]);
    ajaxGetGoodsInfo();

}

function updateStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));

}


let modalBtn = document.querySelectorAll('.modalBtn');
let closeBtn = document.querySelectorAll('.closeBtn');
let testBtn = document.querySelectorAll('.testBtn');
let nextBtn = document.querySelectorAll('.nextBtn');

for (let i = 0; i < modalBtn.length; i++) {
    modalBtn[i].addEventListener('click', openModal);
    // Listen for close click
    closeBtn[i].addEventListener('click', closeModal);
    testBtn[i].addEventListener('click', closeModal);
    nextBtn[i].addEventListener('click', closeModal);
    window.addEventListener('click', outsideClick);
}

function getModal(child) {
    let modal = child.parentNode;

    while (modal && modal.className && !modal.className.includes("simpleModal")) {
        modal = modal.parentNode;
    }
    return modal;
}


function openModal() {
    let modal = this.nextElementSibling;

    if (modal && modal.className.includes("simpleModal")) {
        modal.style.display = 'block';
    }
}

// Function to close modal
function closeModal() {
    let modal = getModal(this);
    if (modal)
        modal.style.display = 'none';
}

// Function to close modal if outside click
function outsideClick(e) {
    if (e.target && !e.target.className.includes("simpleModal") &&
        !getModal(e.target)) {
        e.target.style.display = 'none';
    }
}
