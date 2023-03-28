// alert('Log In')
/*
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

*/


function miFuncion(){

    const usuario = document.getElementById("email");
    const contrasena = document.getElementById("password");

    var texto="PRUUUUUUUUEEEEEBAAAA";
    var fallo=0;

    const regexpUs = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}/
    const regexpCo = /[a-zA-Z0-9_]\S{7,20}/
    
    if(!regexpUs.test(usuario)){
        texto+="El formato del email es incorrecto";
        fallo++;
    }

    else if(!regexpCo.test(contrasena)){
        texto+="El tamaño de la contraseña debe ser minimo 7 caracteres";
        fallo++;
    }

    if(fallo == 1){
        console.log("Mal")
    }
    else{
        console.log("Bien ")
    }
    
    
}

