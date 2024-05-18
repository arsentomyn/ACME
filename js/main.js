const burger = document.getElementById('burger');
var nav = document.getElementById('nav');

burger.addEventListener('click', function() {
    this.classList.toggle('active');
    if (nav.classList.contains('active')) nav.classList.remove('active');
    else  nav.classList.add('active');
    // console.log(nav.classList.contains('active'));
});