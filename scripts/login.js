
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


