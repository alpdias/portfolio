/*
Created in 09/2020
@Author: Paulo https://github.com/alpdias
*/

let buttonElement = document.querySelector('.main-menu__btn');
let menuElement = document.querySelector('.main-menu__list');
let item1 = document.getElementById('b1one');
let item2 = document.getElementById('b2two');
let item3 = document.getElementById('b3three');

function openClose(evento) {
    buttonElement.classList.toggle('main-menu__btn--close');
    menuElement.classList.toggle('main-menu__list--close');
    item1.classList.toggle('main-menu__item--close');
    item2.classList.toggle('main-menu__item--close');
    item3.classList.toggle('main-menu__item--close');
};

buttonElement.addEventListener('click', openClose); 
