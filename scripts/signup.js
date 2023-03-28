

// Al dar click al submit del formulario 
// se ejecuta esta funcion 

function validarForm(){
  
  // Se crean varibles acorde al valor de los input del formulario
  const nombre = document.getElementById("name").value;
  const apellido = document.getElementById("lana").value;
  const correo = document.getElementById("email").value;
  const contrasena = document.getElementById("password").value;
  const tel = document.getElementById("tel").value;
  const fecha = document.getElementById("date").value;
  const direccion = document.getElementById("addr").value;
  const numDire = document.getElementById("numd").value;
  const colonia = document.getElementById("colo").value;
  const municipio = document.getElementById("muni").value;
  const estado = document.getElementById("esta").value;
  const cp = document.getElementById("cp").value; 
  const modal = document.getElementById("miModal"); 
  var jsonDatosUser;
  var aviso=""


  // expresiones RegExp para validar algunas variables
  const regexCorreo=/[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}/;
  const regexContraseña =/[a-zA-Z0-9_]\S{7,20}/  
  const regexTel = /[0-9]{10}/
  const regexFecha = /[0-9-]{3,20}/
  const regexNum = /[0-9]{1,5}/


  var contador=0;
  //console.log("------------------")

  // Validaciones mediante RegExp y Numero de caracteres
  // se valida cada variable, si se cumple con alguno de los criterios
  // se entra a la estructura de control de flujo y se muestra 
  // un mensaje asociado a ese criterio cumplido en el modal  

  // validacion nombre por longitud
  if(nombre.length < 3){
    aviso+="El Nombre requiere por lo menos 3 caracteres\n"
    contador++;
  }

  // validacion apellido por longitud
  else if(apellido.length < 3){
    aviso+="El Apellido requiere por lo menos 3 caracteres\n"
    contador++;
  }
  
  // validacion correo por regexp
  else if(!regexCorreo.test(correo)){
    aviso+="El Correo no tiene un formato correcto\n"
    contador++;
  }

  // validacion contraseña por regexp y longitud
  else if(!regexContraseña.test(contrasena)|| contrasena.length<7){
    aviso+="La Contraseña no debe llevar espacios y requiere minimo 7 caracteres\n"
    contador++;
  }
  
  // validacion telefono por regexp
  else if(!regexTel.test(tel)){
    aviso+="El Telefono requiere 10 digitos\n"
    contador++;
  }

    // validacion fecha por regexp
  else if(!regexFecha.test(fecha)){
    aviso+="Selecciona la fecha\n"
    contador++;
  }

  // validacion direccion por longitud
  else if(direccion.length<5){
    aviso+="Tu Direccion debe tener al menos 5 caracteres\n"
    contador++;
  }

  // validacion numero direccion por regexp
  else if(!regexNum.test(numDire)){
    aviso+="Escribe un Numero de Direccion valido\n"
    contador++;
  }

  // validacion colonia por longitud
  else if(colonia.length<5){
    aviso+="Tu colonia requiere al menos 5 caracteres\n"
    contador++;
  }

  // validacion municipio por longitud
  else if(municipio.length<5){
    aviso+="Tu municipio requiere al menos 5 caracteres\n"
    contador++;
  }

  // validacion estado por longitud
  else if(estado.length<5){
    aviso+="Tu estado requiere al menos 5 caracteres\n"
    contador++;
  }

  // validacion codigo postal por regexp
  else if(!regexNum.test(cp)){
    aviso+="Escribe un Codigo Postal valido\n"
    contador++;
  }

  // Si se llega este ultimo else significa que los datos proporcionados son correctos
  // dado que no se entro a ninguna estructura de control
  // por lo cual el aviso corresponde a registro correcto
  else{
    aviso+="Bienvenido\n ¡Registro Exitoso!";
  }

  // Aqui se establece el aviso con la info correcta o incorrecta segun sea el caso
  // este aviso aparecera en una venatana modal, una vez que se da click en submit 
  modal.innerHTML=aviso;

  // Dado que el contador esta en cero, significa que no entro en algun flujo
  // de control, por lo cual los valores son correctos, se creo un objeto
  // y posteriormente un json
  if(contador==0){
    var usuario={
      nombre:nombre,
      apellido:apellido,
      email:correo,
      contrasena:contrasena,
      tel:tel,
      fechaNac:fecha,
      direccion:direccion,
      numeroDire:numDire,
      colonia:colonia,
      municipio:municipio,
      estado:estado,
      cp:cp
    }
    jsonDatosUser=JSON.stringify(usuario);  
    console.log(jsonDatosUser);
  }
}





