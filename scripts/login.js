// alert('Log In')

let $btn_login = document.querySelector("#btn-login");
let $input_email = document.querySelector("#input-email");
let $input_password = document.querySelector("#input-password");

$btn_login.addEventListener("click", login);

function login() {
    if ($input_email.value == "admin" || $input_password.value == "admin"){
        let DATA_USER = {
            user: "ADMIN",
        };
        localStorage.setItem("DATA_USER", JSON.stringify(DATA_USER));
        updateNavUser();
        window.location.href = "./";
    }
}
