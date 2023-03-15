const slides = Array.from(document.getElementsByClassName('slider__item'));
const dots = Array.from(document.getElementsByClassName('slider__dot'));
const arrowNext = document.querySelector('.slider__arrow_next');
const arrowPrev = document.querySelector('.slider__arrow_prev');
let index = 0;

function changeSlides (index) {
    slides[index].classList.toggle('slider__item_active');
    dots[index].classList.toggle('slider__dot_active');
}

arrowNext.onclick = () => {
    changeSlides(index);
    index = index < slides.length - 1 ? index + 1 : 0;
    changeSlides(index);
}

arrowPrev.onclick = () => {
    changeSlides(index);
    index = index > 0 ? index - 1 : slides.length - 1;
    changeSlides(index);
}

function dotsToggle(index) {
    const activeDotIndex = dots.findIndex(dot => dot.classList.contains('slider__dot_active'));
    dots[activeDotIndex].classList.toggle('slider__dot_active');
    slides[activeDotIndex].classList.toggle('slider__item_active');

    dots[index].classList.toggle('slider__dot_active');
    slides[index].classList.toggle('slider__item_active');
}

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', () => {
        dotsToggle(index);
        index = i;
        dotsToggle(index);
    })
}
