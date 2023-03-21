'use strict';
const sizes = document.querySelectorAll('.font-size');
const colors = document.querySelectorAll('.book__control_color > a');
const backgrounds = document.querySelectorAll('.book__control_background > a');
const book = document.querySelector('.book');
const arraySizes = Array.from(sizes);
const arrayColors = Array.from(colors);
const arrayBackgrounds = Array.from(backgrounds);

function getFont(element, event, arr){
    event.preventDefault();
    let index = arr.findIndex(item => item === element);
    let indexActive = arr.findIndex(element => element.classList.contains('font-size_active'));
    let bookClass = 'book_fs-' + arr[index].dataset.size;

    arr[indexActive].classList.remove('font-size_active');
    console.log(arr[element]);
    arr[index].classList.add('font-size_active');
    book.classList.remove('book_fs-big', 'book_fs-small')
    book.classList.add(bookClass);
}
function getColor(element, event, arr){
    event.preventDefault();
    let index = arr.findIndex(item => item === element);
    let bookColor = 'book_color-' + arr[index].dataset.textColor;
    book.classList.remove('book_color-gray', 'book_color-whitesmoke');
    book.classList.add(bookColor);
};
function getBackground(element, event, arr){
    event.preventDefault();
    let index = arr.findIndex(item => item === element);
    let bookBg = 'book_bg-' + arr[index].dataset.bgColor;
    book.classList.remove('book_bg-gray', 'book_bg-black', 'book_bg-white');
    book.classList.add(bookBg);
};

for(let element of arraySizes){
    element.addEventListener('click', function(){ getFont(element, event, arraySizes);
    });
};
for(let element of arrayColors){
    element.addEventListener('click', function(){
        getColor(element, event, arrayColors);
    });
};
for(let element of arrayBackgrounds){
    element.addEventListener('click', function(){
        getBackground(element, event, arrayBackgrounds);
    });
};