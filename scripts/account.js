// Obtenemos los inputs y los botones
const userName = document.getElementById("UserName");
const nameInput = document.getElementById("inputNombre");
const apellidoInput = document.getElementById("inputApellido");
const emailInput = document.getElementById("inputEmail");
const nacimientoInput = document.getElementById("inputNacimiento");
const telefonoInput = document.getElementById("inputTelefono");
const contrasenaInput = document.getElementById("inputContrasena");
const calleInput = document.getElementById("inputCalle");
const numeroInput = document.getElementById("inputNumero");
const codigoPostalInput = document.getElementById("inputCodigoPostal");
const coloniaInput = document.getElementById("inputColonia");
const municipioInput = document.getElementById("inputMunicipio");
const estadoInput = document.getElementById("inputEstado");
const editBtn = document.getElementById("buttonEditar");
const saveBtn = document.getElementById("buttonGuardar");
const editBtn1 = document.getElementById("buttonEditar1");
const saveBtn1 = document.getElementById("buttonGuardar1");

const salirCuenta = document.querySelector("#salir-cuenta");
const eliminarCuenta = document.querySelector("#eliminar-cuenta");

salirCuenta.addEventListener("click", () => {
	localStorage.removeItem("DATA_USER");
	window.location.href = "./";
});

eliminarCuenta.addEventListener("click", () => {
	deleteUser();
});

window.onload = () => {
	updateData();
};

function updateData(){
	DATA_USER = JSON.parse(localStorage.getItem("DATA_USER"));
	// console.log(DATA_USER);
	userName.innerHTML = "Bienvenido " + DATA_USER.nombre;
	nameInput.value = DATA_USER.nombre;
	apellidoInput.value = DATA_USER.apellido;
	emailInput.value = DATA_USER.email;
	nacimientoInput.value = DATA_USER.nacimiento;
	telefonoInput.value = DATA_USER.telefono;
	calleInput.value = DATA_USER.calle;
	numeroInput.value = DATA_USER.numero;
	codigoPostalInput.value = DATA_USER.codigo_postal;
	coloniaInput.value = DATA_USER.colonia;
	municipioInput.value = DATA_USER.municipio;
	estadoInput.value = DATA_USER.estado;
}

function deleteUser() {
	let dataUser = JSON.parse(localStorage.getItem("DATA_USER"));

	let url = SERVER_URL + `usuarios/${dataUser.id}`;
	fetch(url, { method: "DELETE", headers: { "Content-Type": "application/json" } })
		.then((response) => {
			if (response.ok) {
				localStorage.removeItem("DATA_USER");
				window.location.href = "./";
			} else {
				alert("Error al eliminar cuenta");
			}
		})
		.catch((error) => console.error(error));
}

// Función para habilitar los inputs
function enableInputsDatos() {
	nameInput.disabled = false;
	apellidoInput.disabled = false;
	emailInput.disabled = false;
	nacimientoInput.disabled = false;
	telefonoInput.disabled = false;
	contrasenaInput.disabled = false;
}

function enableInputsDireccion() {
	calleInput.disabled = false;
	codigoPostalInput.disabled = false;
	coloniaInput.disabled = false;
	municipioInput.disabled = false;
	estadoInput.disabled = false;
	numeroInput.disabled = false;
}

// Función para deshabilitar los inputs
function disableInputsDatos() {
	nameInput.disabled = true;
	apellidoInput.disable = true;
	emailInput.disabled = true;
	nacimientoInput.disabled = true;
	telefonoInput.disabled = true;
	contrasenaInput.disabled = true;
}

function disableInputsDireccion() {
	calleInput.disabled = true;
	codigoPostalInput.disabled = true;
	coloniaInput.disabled = true;
	municipioInput.disabled = true;
	estadoInput.disabled = true;
	numeroInput.disabled = true;
}

// Al cargar la página, deshabilitamos los inputs
disableInputsDatos();
disableInputsDireccion();

// Agregamos un event listener al botón de "Editar" para habilitar los inputs
editBtn.addEventListener("click", enableInputsDatos);
editBtn1.addEventListener("click", enableInputsDireccion);

// Agregamos un event listener al botón de "Guardar" para guardar los cambios y deshabilitar los inputs
saveBtn.addEventListener("click", () => {
	// Aquí iría el código para guardar los cambios en la base de datos o enviarlos al servidor
	// alert('Cambios guardados correctamente');
	disableInputsDatos();
});
saveBtn1.addEventListener("click", () => {
	// alert('Cambios guardados correctamente');
	disableInputsDireccion();
});

// Al dar click al submit del formulario
// se ejecuta esta funcion

function validarForm(){
  
    // Se crean varibles acorde al valor de los input del formulario
    const nombre = document.getElementById("inputNombre").value;
    const apellido = document.getElementById("inputApellido").value;
    const correo = document.getElementById("inputEmail").value;
    const contrasena = document.getElementById("inputContrasena").value;
    const tel = document.getElementById("inputTelefono").value;
    const fecha = document.getElementById("inputNacimiento").value;
    const modal = document.getElementById("miModal"); 
    var jsonDatosUser;
    var aviso=""
  
  
    // expresiones RegExp para validar algunas variables
    const regexCorreo=/[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}/;
    const regexContraseña =/[a-zA-Z0-9_]\S{7,20}/  
    const regexTel = /[0-9]{10}/
    const regexFecha = /[0-9-]{3,20}/  
  
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
  

    
  
    // Si se llega este ultimo else significa que los datos proporcionados son correctos
    // dado que no se entro a ninguna estructura de control
    // por lo cual el aviso corresponde a registro correcto
    else{
      aviso+="Datos Guardados Correctamente";
    }
  
    // Aqui se establece el aviso con la info correcta o incorrecta segun sea el caso
    // este aviso aparecera en una venatana modal, una vez que se da click en submit 
    // modal.innerHTML=aviso
    alert(modal.innerHTML=aviso);
  
    // Dado que el contador esta en cero, significa que no entro en algun flujo
    // de control, por lo cual los valores son correctos, se creo un objeto
    // y posteriormente un json
    if(contador==0){
      var usuario={
        nombre:nombre,
        apellido:apellido,
        email:correo,
        
        tel:tel,
        fechaNac:fecha,
        
      }
      jsonDatosUser=JSON.stringify(usuario);  
      console.log(jsonDatosUser);
    }
  }

function validarDireccion() {
	// Se crean varibles acorde al valor de los input del formulario
	const direccion = document.getElementById("inputCalle").value;
	const numDire = document.getElementById("inputNumero").value;
	const colonia = document.getElementById("inputColonia").value;
	const municipio = document.getElementById("inputMunicipio").value;
	const estado = document.getElementById("inputEstado").value;
	const cp = document.getElementById("inputCodigoPostal").value;
	const modal = document.getElementById("miModal");
	var jsonDatosUser;
	var aviso = "";

	// expresiones RegExp para validar algunas variables
	const regexNum = /[0-9]{1,5}/;

	var contador = 0;
	//console.log("------------------")

	// validacion direccion por longitud
	if (direccion.length < 5) {
		aviso += "Calle y numero de calle";
		contador++;
	}

	// validacion numero direccion por regexp
	else if (!regexNum.test(numDire)) {
		aviso += "Escribe un Numero de Direccion valido\n";
		contador++;
	}

	// validacion colonia por longitud
	else if (colonia.length < 5) {
		aviso += "Tu colonia requiere al menos 5 caracteres\n";
		contador++;
	}

	// validacion municipio por longitud
	else if (municipio.length < 5) {
		aviso += "Tu municipio requiere al menos 5 caracteres\n";
		contador++;
	}

	// validacion estado por longitud
	else if (estado.length < 5) {
		aviso += "Tu estado requiere al menos 5 caracteres\n";
		contador++;
	}

	// validacion codigo postal por regexp
	else if (!regexNum.test(cp)) {
		aviso += "Escribe un Codigo Postal valido\n";
		contador++;
	} else {
		aviso += "Direccion guardada correctamente";
	}

	alert((modal.innerHTML = aviso));

	if (contador == 0) {
		var usuario = {
			direccion: direccion,
			numeroDire: numDire,
			colonia: colonia,
			municipio: municipio,
			estado: estado,
			cp: cp,
		};
		updateUsuario(DATA_USER.id, usuario);
		// jsonDatosUser = JSON.stringify(usuario);
		// console.log(jsonDatosUser);
	}
}

function updateUsuario(id, data) {
	let url = SERVER_URL + `usuarios/${id}`;
	fetch(url, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })
		.then((response) => response.json())
		.then((data) => {
			// console.log(data);
			localStorage.setItem("DATA_USER", JSON.stringify(data));
			updateNavUser();
			updateData();
		})
		.catch((error) => {
			console.error(error);
		});
}
