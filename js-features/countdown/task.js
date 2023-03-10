countdown();
function countdown() {
    seconds = (document.getElementById('timer').textContent)--;
  
    if (seconds <= 0) {
      clearTimeout(timer);
      alert('Вы победили в конкурсе!')
    } else {
        setTimeout(countdown, 1000);
    }
}
