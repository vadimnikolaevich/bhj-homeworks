const menuLinks = document.querySelectorAll('.menu__link');
const menuItems = document.querySelectorAll('.menu__item');
const arrayLinks = Array.from(menuLinks);
const arrayItems = Array.from(menuItems);

function openLink(element, event){
    for(let elementItem of arrayItems){
        if(element === elementItem.firstElementChild && element.matches('a[href=""]')){
            let menuSub = elementItem.querySelector('.menu__item > .menu_sub');
            if(menuSub.classList.contains('menu_active')){
                menuSub.classList.remove('menu_active');
            } else{
                menuSub.classList.add('menu_active');
            };
            event.preventDefault();
        };
    };
};

for(let element of arrayLinks){
    element.addEventListener("click", function(){openLink(element, event)});
};
