let clickerSpeed = document.getElementById('clicker__speed');
let timeStart= new Date();

function cookieCliker() {
    click = (document.getElementById('clicker__counter').textContent)++

    image.width = click++ % 2 ? 200 : 170;
    // if (click % 2) {
    //     image.width = 200;
    // } else {
    //     image.width = 170;
    // }
    
    let timeNow = new Date();
    clickerSpeed.textContent = (1 / ((timeNow.getTime() - timeStart.getTime()) / 1000)).toFixed(2);
    timeStart = new Date();
}

let image = document.getElementById('cookie');
image.onclick = cookieCliker;
