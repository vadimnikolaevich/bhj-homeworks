const links = Array.from(document.querySelectorAll(".menu__link"));
const menuSub = Array.from(document.querySelectorAll(".menu_sub"));

links.forEach((link) => {
    link.onclick = () => {
        if (link.parentElement.querySelector(".menu_sub") !== null) {
            menuSub.forEach((item) => item.classList.remove("menu_active"));
                link.parentElement.querySelector(".menu_sub").classList.add("menu_active");
            return false;
        }
  };
});