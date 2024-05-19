const burger = document.getElementById('burger');
const cartBar = document.getElementById('cart-side-bar');
const cartSide = document.getElementById('cart-side');
const cartClose = document.getElementById('cart-close');
const cart = document.getElementById('cart');
var nav = document.getElementById('nav');
var page = document.getElementById('page');

burger.addEventListener('click', function() {
    this.classList.toggle('active');
    if (nav.classList.contains('active')) nav.classList.remove('active');
    else  nav.classList.add('active');
});
cart.addEventListener('click', function() {
    if (nav.classList.contains('active')) {
        nav.classList.remove('active');
        burger.classList.remove('active');
    }
    document.body.classList.add('no-scroll')
    setTimeout(() => {
        cartSide.classList.toggle('active');
    }, .500);
    setTimeout(() => {
        cartBar.classList.toggle('active');
    }, 1.000);
});
cartClose.addEventListener('click', function() {
    cartBar.classList.toggle('active');
    cartSide.classList.toggle('active');
    document.body.classList.remove('no-scroll')
});


