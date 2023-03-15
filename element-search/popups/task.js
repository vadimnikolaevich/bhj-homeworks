const mainModal = document.getElementById("modal_main");
const successModal = document.getElementById("modal_success");

document.addEventListener("DOMContentLoaded", function(event) {
    mainModal.classList.add('modal_active');
});

const close = Array.from(document.getElementsByClassName("modal__close"));
const success = Array.from(document.getElementsByClassName("show-success"));

function closePopup() {
    this.closest(".modal_active").classList.remove("modal_active");
}

function successPopup() {
    mainModal.onclick = closePopup;
    successModal.classList.add('modal_active');
}

close.forEach(popup => popup.onclick = closePopup);
success.forEach(popup => popup.onclick = successPopup);