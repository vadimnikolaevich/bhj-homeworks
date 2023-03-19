'use strict';

const dropdownList = document.querySelector('.dropdown__list');
const dropdownValue = document.querySelector('.dropdown__value');
const dropdownItem = document.querySelectorAll('.dropdown__item');
const dropdownItemArray = Array.from(dropdownItem);

dropdownValue.addEventListener('click', function(event){
    if(dropdownList.classList.contains('dropdown__list_active')){
        dropdownList.classList.remove('dropdown__list_active');
        event.preventDefault();
    } else{
        dropdownList.classList.add('dropdown__list_active');
        event.preventDefault();
    };
});
for(let element of dropdownItemArray){
    element.addEventListener('click', function(event){
        event.preventDefault();
        dropdownList.classList.remove('dropdown__list_active');
        dropdownValue.innerHTML = element.textContent;
    });
};