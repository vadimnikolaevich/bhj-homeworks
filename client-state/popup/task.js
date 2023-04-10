'use strict';
// задание переменных 
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');
// задание cookie
if(document.cookie !== 'modal_active=on' && document.cookie !== 'modal_active=off'){
    document.cookie = 'modal_active=on; max-age=3600; secure';
    modal.classList.add('modal_active');
};
const lengthCookie = 'modal_active='.length;
const cookie = document.cookie.slice(lengthCookie, document.cookie.length);
if(cookie === 'off'){
    modal.classList.remove('modal_active');
} else{
    modal.classList.add('modal_active');
};
console.log(cookie);
console.log(document.cookie);
// задаем обработчик событий
modalClose.addEventListener('click', function(){
    modal.classList.remove('modal_active');
    document.cookie = 'modal_active=off; max-age=3600; secure';
    console.log(document.cookie);
});