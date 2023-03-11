const sliderItem = document.querySelectorAll(".slider__item");
const prev = document.querySelector(".slider__arrow_prev");
const next = document.querySelector(".slider__arrow_next");
let slideNumber = 0;

next.onclick = () => {
    sliderItem[slideNumber].classList.remove("slider__item_active");
        if (slideNumber == sliderItem.length - 1) {
            slideNumber = 0;
        } else {
            slideNumber++;
        }
        sliderItem[slideNumber].classList.add("slider__item_active");
}

prev.onclick = () => {
    sliderItem[slideNumber].classList.remove("slider__item_active");
        if (slideNumber == 0) {
            slideNumber = sliderItem.length - 1;
        } else {
            slideNumber--;
        }
    sliderItem[slideNumber].classList.add("slider__item_active");
}