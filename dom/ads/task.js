'use strict'
const rotators = document.querySelectorAll('.rotator__case');
const arrayRotators = Array.from(rotators);
let speedRotator = arrayRotators[0].dataset.speed;

function switchingRotators (acceptedArray){
    let indexActive = acceptedArray.findIndex(element => element.classList.contains('rotator__case_active'));

    acceptedArray[indexActive].classList.remove('rotator__case_active');
    indexActive++;
    
    if(indexActive <= (acceptedArray.length - 1)){
        acceptedArray[indexActive].classList.add('rotator__case_active');
    } else{
        indexActive = 0;
        acceptedArray[indexActive].classList.add('rotator__case_active');
    };
    acceptedArray[indexActive].style.color = acceptedArray[indexActive].dataset.color;
    return speedRotator = acceptedArray[indexActive].dataset.speed;
};
let interval = setInterval( () => {
    switchingRotators(arrayRotators);
}, speedRotator);