'use strict';

const reveal = document.querySelectorAll('.reveal');
const revealArray = Array.from(reveal);

function isVisibility(elements){
    let arraysBound = [];
    let windowHeight = document.documentElement.clientHeight;
    
    for(let element of elements){
        arraysBound.push(element.getBoundingClientRect());     
    };
    
    for(let elem of arraysBound){
        if(((elem.bottom < windowHeight) && (elem.bottom > 0)) || (elem.top > 0) && (elem.top < windowHeight)){
            let indexVisibilityElem = arraysBound.findIndex(item => item === elem);
            if(!revealArray[indexVisibilityElem].classList.contains('reveal_active')){
                revealArray[indexVisibilityElem].classList.add('reveal_active');
            };
        } else{
            let indexNoVisibilityElem = arraysBound.findIndex(item => item === elem);
            if(revealArray[indexNoVisibilityElem].classList.contains('reveal_active')){
                revealArray[indexNoVisibilityElem].classList.remove('reveal_active');
            };
        };
    };
};
setInterval( () => {
    isVisibility(revealArray);
}, 1000);