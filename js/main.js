//calc__form
const products = document.querySelector('#products');
const orders = document.querySelector('#orders');
const selectPackage = document.querySelector('#package');
const terminal = document.querySelector('#terminal');
const accounting = document.querySelector('#accounting');



//calc__summary
const summaryProducts = document.querySelector('[data-id = "products"]');
const productsCalc = summaryProducts.querySelector('.item__calc');
const productsPrice = summaryProducts.querySelector('.item__price');
const summaryOrders = document.querySelector('[data-id = "orders"]');
const ordersCalc = summaryOrders.querySelector('.item__calc');
const ordersPrice = summaryOrders.querySelector('.item__price');
const summaryPackage =  document.querySelector('[data-id = "package"]');
const summaryTotalPrice = document.querySelector('#total-price');
const summaryAccounting =  document.querySelector('[data-id = "accounting"]');
const summaryTerminal =  document.querySelector('[data-id = "terminal"]');


let productPrices = 0;
let ordersPrices = 0;
let packagePrice = 0;
let terminalPrice = 0;
let accountingPrice = 0;

function totalSum() {
    let sum = productPrices + ordersPrices + packagePrice + terminalPrice + accountingPrice;
    summaryTotalPrice.children[1].innerText = '$' + sum;
    if (summaryTotalPrice.children[1].innerText !== '$0') {
        summaryTotalPrice.classList.add('open');
    }
}


products.addEventListener('change', () => {
    if (products.value > 0) {
        summaryProducts.style.display = 'flex';
        productsCalc.textContent = `${products.value} * $0.5`;
        productPrices = products.value * 0.5
        productsPrice.textContent = '$' + productPrices
    } else {
        summaryProducts.style.display = 'none';
        products.value = 0
        productPrices = 0
    }


    totalSum();
});


orders.addEventListener('change', () => {
    if (orders.value > 0) {
        summaryOrders.style.display = 'flex';
        ordersCalc.textContent = `${orders.value} * $0.25`;
        ordersPrices = orders.value * 0.25
        ordersPrice.textContent = '$' + ordersPrices
    } else {
        summaryOrders.style.display = 'none';
        orders.value = 0
        ordersPrices = 0
    }


    totalSum();
});
console.log(!terminal.checked)

selectPackage.addEventListener('click', (event) => {
    selectPackage.classList.toggle("open");

    selectPackage.firstElementChild.innerText = event.target.innerText;
    summaryPackage.classList.add('open');
    summaryPackage.children[1].innerText = event.target.innerText;
    if (event.target.innerText === "Basic") {
        packagePrice = 0;
        summaryPackage.children[2].innerText = '$' + packagePrice;
    }
    if (event.target.innerText === "Professional") {
        packagePrice = 25;
        summaryPackage.children[2].innerText = '$' + packagePrice;
    }
    if (event.target.innerText === "Premium") {
        packagePrice = 60;
        summaryPackage.children[2].innerText = '$' + packagePrice;
    }
    totalSum();
});

accounting.addEventListener('change', () => {
    if (accounting.checked) {
        summaryAccounting.classList.add("open");
        accountingPrice = 35;
    } else {
        summaryAccounting.classList.remove("open");
        accountingPrice = 0;
    }

    totalSum();
});

terminal.addEventListener('change', () => {
    if (terminal.checked) {
        summaryTerminal.classList.add("open");
        terminalPrice = 10;
    } else{
        summaryTerminal.classList.remove("open");
        terminalPrice = 0;;
    }

    totalSum();
});
