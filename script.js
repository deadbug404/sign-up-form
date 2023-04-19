email = document.getElementById('email');
username = document.getElementById('username');
password = document.getElementById('password');
error = document.getElementsByClassName('error');
form = document.querySelector('form');


email.addEventListener("input", () => {
    if(email.value.length === 0){
        email.className = '';
    }else if(email.validity.valid){
        email.className = "valid";
    }else{
        email.className = "invalid";
    }
})

username.addEventListener("input", () => {
    if(username.value.length === 0){
        username.className = '';
    }else if(username.validity.valid){
        username.className = "valid";
    }else{
        username.className = "invalid";
    }
})

password.addEventListener("input", () => {  
    if(password.value.length === 0){
        password.className = '';
    }else if(password.validity.valid){
        password.className = "valid";
    }else{
        password.className = "invalid";
    }
})


form.addEventListener("submit",  (event) =>{
    event.preventDefault();
    if(password.value.length < 5){
        password.className = "invalid";
        error[1].textContent = "Password is too weak";
    }

    if(username.value.length < 5){
        username.className = "invalid";
        error[0].textContent = "Username is too weak";
    }
})


