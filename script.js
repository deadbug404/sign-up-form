const password = document.querySelector("#password");
const confirm_password = document.querySelector("#confirm-password");
const form = document.querySelector("form");
const errorText = document.querySelector("#error");


form.addEventListener("submit", (e) => {
    if(password.value !== confirm_password.value){
        e.preventDefault();
        errorText.textContent = "Password do not match, please try again";
        errorText.classList.toggle(show);
    }
});

