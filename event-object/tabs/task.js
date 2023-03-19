'use strict';
const tab = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab__content');
const arrayTab = Array.from(tab);
const arrayTabContent = Array.from(tabContent);
for(let element of arrayTab){
    element.addEventListener('click', function(){
        let index = arrayTab.indexOf(element);
        for(let elem of arrayTab){
            if(elem.classList.contains('tab_active')){
                elem.classList.remove('tab_active');
            };
        };
        for(let elem of arrayTabContent){
            if(elem.classList.contains('tab__content_active')){
                elem.classList.remove('tab__content_active');
            };
        };
        element.classList.add('tab_active')
        arrayTabContent[index].classList.add('tab__content_active');
    });
};