'use strict';
const imgLoader = document.querySelector('#loader');
const valutes = document.querySelector('#items');
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();
xhr.addEventListener('load', function(){
    try{
        if(xhr.status !== 200){
            alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
        } else{
            if(xhr.readyState === xhr.DONE){
                const objectJSON = JSON.parse(xhr.responseText).response.Valute;
                console.log(objectJSON);
                for (let value of Object.entries(objectJSON)) {
                    let obj = value[1];
                    let valuteName = obj.CharCode;
                    let valuteValue = obj.Value;
                    valutes.insertAdjacentHTML('beforeend', `
                    <div class="item">
                      <div class="item__code">
                          ${valuteName}
                      </div>
                      <div class="item__value">
                          ${valuteValue}
                      </div>
                      <div class="item__currency">
                          руб.
                      </div>
                    </div>
                    `);
                    };
                };
            imgLoader.classList.remove('loader_active');
        };
    } catch(err){
        alert('Запрос не удался!');
    };
});