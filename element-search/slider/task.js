
const divImgs = document.querySelectorAll('.slider__item');
const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');
const arrayImg = Array.from(divImgs);

function leafNext(){
    let indexActive = arrayImg.findIndex(element => element.classList.contains("slider__item_active"));
    arrayImg[indexActive].classList.remove('slider__item_active');
    if(indexActive < (arrayImg.length-1)){
        indexActive += 1;
    } else{
        indexActive = 0;
    };
    return arrayImg[indexActive].classList.add('slider__item_active');
};
function leafPrev(){
    let indexActive = arrayImg.findIndex(element => element.classList.contains("slider__item_active"));
    arrayImg[indexActive].classList.remove('slider__item_active');
    if(indexActive > 0){
        indexActive -= 1;
    } else{
        indexActive = (arrayImg.length-1);
    };
    return arrayImg[indexActive].classList.add('slider__item_active');
};
arrowNext.addEventListener('click', leafNext);
arrowPrev.addEventListener('click', leafPrev);
