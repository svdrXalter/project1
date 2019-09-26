function getCategoryList() {
    fetch('/get-category-list',{
    method: 'POST'
    })
        .then(function (response) {
            return response.text();
        })
        .then(function (body) {
            showCategoryList(JSON.parse(body));
        })
}

function showCategoryList(data) {
    let out = '';
    for (let i = 0; i < data.length; i++) {
       out +=`<div class="product">`;
       out += `<a href="/production?id=${data[i]['id']}" >`;
       out += `<img src="images/goods/${data[i]['image']}" alt="${data[i]['category']}">`;
       out += `</a>`;
       out += `</div>`
    }
    document.querySelector('.goodsId').innerHTML = out;
    }

getCategoryList();