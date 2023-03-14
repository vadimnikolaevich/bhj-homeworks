const mainMod = document.getElementById('modal_main');
const successMod = document.getElementById('modal_success');
const successShow = document.querySelector('.show-success');
const closes = document.querySelectorAll('div.modal__close');

mainMod.classList.toggle('modal_active');
successShow.onclick = () => {
    mainMod.classList.toggle('modal_active');
    successMod.classList.toggle('modal_active');
}

for (let i = 0; i < closes.length; i++) {
    let close = closes[i];
    close.onclick = () => {
        mainMod.classList.remove('modal_active');
        successMod.classList.remove('modal_active');
    }
}
