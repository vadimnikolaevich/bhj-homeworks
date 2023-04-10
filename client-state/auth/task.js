'use strict';
// задание переменных
const xhr = new XMLHttpRequest();
const signin = document.querySelector('#signin');
const signinBtn = document.querySelector('#signin__btn');
const formSingin = document.forms.signin__form;
const welcome = document.querySelector('#welcome');

// авторизуемся на странице
if(sessionStorage.getItem('id') !== null){
  welcome.classList.add('welcome_active');
  welcome.textContent += sessionStorage.getItem('id');
  signin.classList.remove('signin_active');
};
// задаем обработчик события для формы
formSingin.addEventListener('submit', function(event){
    event.preventDefault();
    const formData = new FormData(formSingin);
    for(let value of formData.entries()){
      sessionStorage.setItem(value[0], value[1]);
    };
    console.log(sessionStorage);
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.send(formData);
    xhr.addEventListener('load', function(event){
        let stringAnswer = xhr.response.split(',')[0].split(':')[1];
        console.log(stringAnswer);
        let stringId = xhr.response.split(',')[1].split(':')[1];
        console.log(stringId);
        sessionStorage.setItem('id', `${stringId.substring(0, stringId.length-1)}`);
        if(stringAnswer === 'true'){
          welcome.classList.add('welcome_active');
          welcome.textContent += stringId.substring(0, stringId.length-1);
          signin.classList.remove('signin_active');
        } else{
          alert('Ошибка авторизации!');
        };
    });
});