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




/*
Hay que Almacenar usuario en local Storage

Probar con 
    correo          alfonso@cafe.com
    contraseña      aguacafe123

    // Crear Objeto
var usuario={
    correo:"alfonso@cafe.com",
    contrasena:"aguacafe123"
}

    // Almacenar objeto en Local Storage
localStorage.setItem("usuario", JSON.stringify(usuario));

    //Recuperar el objeto del localStorage
var elUser = JSON.parse(localStorage.getItem("miObjeto"));
elUser.correo()
elUser.contrasena()
*/
   


// Solo si se llena el formulario con formato correcto
// se llama a esta funcion  
function miFuncion(event){

    // La primera validacion es con html 
    // la segunda validacion es con JS y regExp
    event.preventDefault();
    const usuario = document.getElementById("email").value;
    const contrasena = document.getElementById("password").value;

    var texto="";
    var fallo=0;

    // regExp a probar con los datos introducidos
    const regexpUs = /[a-zA-Z0-9_]*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}/
    const regexpCo = /[a-zA-Z0-9_]\S{7,20}/
    
    // regExp para correo 
    if(!regexpUs.test(usuario)){
        texto+="El formato del email es incorrecto";
        //fallo++;
        //console.log(texto)
    }

    // regExp para contraseña
    if(!regexpCo.test(contrasena)){
        texto+="El tamaño de la contraseña debe ser minimo 7 caracteres";
        //fallo++;
        //console.log(texto)
    }

    //Datos de unaCuenta de prueba de usuario
    // Esto debera ser un objeto y llamar a correo y contrasena 
    var correoUser = "alfonso@cafe.com";
    var contrasenaUser = "aguacafe123";

    // Si los datos SI son acordes a los almacendos 
    // se direcciona a mi cuenta
    if(usuario==correoUser && contrasena == contrasenaUser){
        window.location.href = "./account.html"
    }
  /*else if(){
        // datos y control para admin
    }*/

    // Si los datos No son acordes a los almacendos
    // se manda una alerta de que datos no son validos para ingresar
    else{
    document.getElementById("texto").innerHTML=
     `
     <div class="alert alert-warning" role="alert">
        ¡Correo y/o contraseña invalidos!
    </div>
    `;
    }
}


