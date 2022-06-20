let priceHT = $('#Price');
let qty = $('#Qua');
let name = $('#name');
let btn = $("button")
let tbody = $('tbody')
let products = [];

if (localStorage.getItem('products') == null) {
    localStorage.setItem('products', JSON.stringify(products))
} else {
    products = JSON.parse(localStorage.getItem('products'))
}
showProductsInTable(products)

btn.on('click', () => {
    let product = {
        productName: name.val(),
        price: priceHT.val(),
        qty: qty.val()
    }
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products))
    tbody.html('')
    showProductsInTable(products)
    name.val("")
    priceHT.val("")
    qty.val("")
})

function showProductsInTable(products) {
    for (let i = 0; i < products.length; i++) {
        tbody.append("<tr>" +
            "<td>" + products[i].productName + "</td>" +
            "<td>" + products[i].price + "</td>" +
            "<td>" + products[i].qty + "</td>" +
            "<td>" + getTTC(products[i].price * products[i].qty) + "</td>" +
            `<td ><button class='btn btn-danger btn-sm'  onclick='removeProduct(${i})'>Supprimer</button></td>` +
            "</tr>")

    }

}

function getTTC(price) {
    return Math.round(price * 1.2);
}


function removeProduct(indice) {
    products.splice(indice, 1)
    localStorage.setItem('products', JSON.stringify(products));
    tbody.html('')
    showProductsInTable(products)
}