const signin = document.getElementById('signin');
const signinForm = document.getElementById('signin__form');
const welcome = document.getElementById("welcome");
const userId = document.getElementById("user_id");
const localUserId = localStorage.getItem('userId');
const signOut = document.getElementById("sign__out");

//localStorage.clear();


function auth(id) {
    signin.classList.toggle('signin_active');
    welcome.classList.toggle('welcome_active');
    userId.innerText = id;
}   

if (localUserId != null) {
    auth(localUserId);
}

signinForm.addEventListener('submit', function (e) {
    let formData = new FormData(signinForm);
    let request = new XMLHttpRequest();
    request.responseType = 'json';
    request.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth', true);
    request.send(formData);

    request.addEventListener('load', () => {
        let authr = request.response;
    
        if (authr.success) {
          localStorage.setItem('userId', auth.user_id);
          auth(authr.user_id);
        } else {
          alert('Неверный логин/пароль');
          //form.reset();
        }
      });
      e.preventDefault();
    });
    
    
    window.onload = function() {
        const storedUserId = localStorage.getItem('id');
        console.log(storedUserId);
    
        if(userId) {
            userId.textContent = storedUserId;
            auth();
        }
    }