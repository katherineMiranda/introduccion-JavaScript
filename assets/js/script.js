// Variables
let quantity = document.querySelector('#quantity');
let color = document.querySelector('#color');
let price = document.querySelector('#price');
let total_p = document.querySelector('#total-p span');
let quantity_p = document.querySelector('#quantity-p span');
let color_c = document.querySelector('#color-circle');

let productPrice = 14990;
price.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "CLP" }).format(productPrice);

function total(){                   
    let total = Number(quantity.value) * productPrice;
    total_p.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "CLP" }).format(total);
    quantity_p.innerHTML = quantity.value;
    color_c.style.backgroundColor = color.value;
}