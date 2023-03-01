(function () {
    const navbar = document.querySelector('.navbar');
    window.onscroll = function () {
        if (window.scrollY > 80) {
            navbar.classList.add('navbar_active')
        }
        else {
            navbar.classList.remove('navbar_active')
        }
    }
}());

(function  () {
    const burgerItem = document.querySelector('.navbar__burger');
    const menu = document.querySelector('.nav-list');
    const closeBtn = document.querySelector('.navbar__close');
    burgerItem.onclick = function () {
        menu.classList.add('nav-list__active');
    }
    closeBtn.onclick = function () {
        menu.classList.remove('nav-list__active');
    }
}());