'use strict';
// задание констант
const text = document.querySelector('#editor');
const btn_clear = document.querySelector('.btn_clear');
text.value = localStorage.getItem('text');
// задание обработчика событий
text.addEventListener('change', function(event){
    localStorage.setItem('text', event.target.value); 
});
btn_clear.addEventListener('click', function(){
    text.value = '';
    localStorage.removeItem('text');
});