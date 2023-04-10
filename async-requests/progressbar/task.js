'use strict';
// задаем переменные
const xhr = new XMLHttpRequest();
const progress = document.querySelector('#progress');
const form = document.forms.form;
const btn = document.querySelector('#send');
const input = document.querySelector('#file');
// вешаем на форму событи submit
form.addEventListener('submit', function(event){
    // отключаем события по умолчанию и создаем новый файл FormData
    event.preventDefault();
    const formData = new FormData(form);
    formData.append(input.files[0].name, input.files[0]);
    console.log(input.files[0].name);
    // задаем событие пост для инициализации запроса на сервер
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    // задаем событие загрузки файла на сервер
    xhr.upload.addEventListener('progress', function(event){
        progress.value = event.loaded / event.total;
    });
    // отправляем запрос на сервер
    xhr.send(formData);
});