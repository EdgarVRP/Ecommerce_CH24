// Obtenemos los inputs y los botones
const nameInput = document.getElementById("inputNombre");
const emailInput = document.getElementById("inputEmail");
const editBtn = document.getElementById("buttonEditar");
const saveBtn = document.getElementById("buttonGuardar");
const editBtn1 = document.getElementById("buttonEditar1");
const saveBtn1 = document.getElementById("buttonGuardar1");
const telefonoInput = document.getElementById("inputTelefono");
const nacimientoInput = document.getElementById("inputNacimiento");
const contrasenaInput = document.getElementById("inputContrasena");
const calleInput = document.getElementById("inputCalle");
const codigoPostalInput = document.getElementById("inputCodigoPostal");
const coloniaInput = document.getElementById("inputColonia");
const municipioInput = document.getElementById("inputMunicipio");
const estadoInput = document.getElementById("inputEstado");
const numeroInput = document.getElementById("inputNumero");
const apellidoInput = document.getElementById("inputApellido");

const salirCuenta = document.querySelector("#salir-cuenta");
const eliminarCuenta = document.querySelector("#eliminar-cuenta");

salirCuenta.addEventListener("click", () => {
	localStorage.removeItem("DATA_USER");
	window.location.href = "./";
});

eliminarCuenta.addEventListener("click", () => {
	deleteUser();
});

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
	emailInput.disabled = false;
	telefonoInput.disabled = false;
	nacimientoInput.disabled = false;
	contrasenaInput.disabled = false;
	apellidoInput.disabled = false;
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
	emailInput.disabled = true;
	telefonoInput.disabled = true;
	nacimientoInput.disabled = true;
	contrasenaInput.disabled = true;
	apellidoInput.disable = true;
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

function validarForm() {
	// Se crean varibles acorde al valor de los input del formulario
	const nombre = document.getElementById("inputNombre").value;
	const apellido = document.getElementById("inputApellido").value;
	const correo = document.getElementById("inputEmail").value;
	const contrasena = document.getElementById("inputContrasena").value;
	const tel = document.getElementById("inputTelefono").value;
	const fecha = document.getElementById("inputNacimiento").value;
	const modal = document.getElementById("miModal");
	var jsonDatosUser;
	var aviso = "";

	// expresiones RegExp para validar algunas variables
	const regexCorreo = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}/;
	const regexContraseña = /[a-zA-Z0-9_]\S{7,20}/;
	const regexTel = /[0-9]{10}/;
	const regexFecha = /[0-9-]{3,20}/;

	var contador = 0;
	//console.log("------------------")

	// Validaciones mediante RegExp y Numero de caracteres
	// se valida cada variable, si se cumple con alguno de los criterios
	// se entra a la estructura de control de flujo y se muestra
	// un mensaje asociado a ese criterio cumplido en el modal

	// validacion nombre por longitud
	if (nombre.length < 3) {
		aviso += "El Nombre requiere por lo menos 3 caracteres\n";
		contador++;
	}

	// validacion apellido por longitud
	else if (apellido.length < 3) {
		aviso += "El Apellido requiere por lo menos 3 caracteres\n";
		contador++;
	}

	// validacion correo por regexp
	else if (!regexCorreo.test(correo)) {
		aviso += "El Correo no tiene un formato correcto\n";
		contador++;
	}

	// validacion contraseña por regexp y longitud
	else if (!regexContraseña.test(contrasena) || contrasena.length < 7) {
		aviso += "La Contraseña no debe llevar espacios y requiere minimo 7 caracteres\n";
		contador++;
	}

	// validacion telefono por regexp
	else if (!regexTel.test(tel)) {
		aviso += "El Telefono requiere 10 digitos\n";
		contador++;
	}

	// validacion fecha por regexp
	else if (!regexFecha.test(fecha)) {
		aviso += "Selecciona la fecha\n";
		contador++;
	}

	// Si se llega este ultimo else significa que los datos proporcionados son correctos
	// dado que no se entro a ninguna estructura de control
	// por lo cual el aviso corresponde a registro correcto
	else {
		aviso += "Datos Guardados Correctamente";
	}

	// Aqui se establece el aviso con la info correcta o incorrecta segun sea el caso
	// este aviso aparecera en una venatana modal, una vez que se da click en submit
	// modal.innerHTML=aviso
	alert((modal.innerHTML = aviso));

	// Dado que el contador esta en cero, significa que no entro en algun flujo
	// de control, por lo cual los valores son correctos, se creo un objeto
	// y posteriormente un json
	if (contador == 0) {
		var usuario = {
			nombre: nombre,
			apellido: apellido,
			email: correo,
			contrasena: contrasena,
			tel: tel,
			fechaNac: fecha,
		};
		jsonDatosUser = JSON.stringify(usuario);
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
		jsonDatosUser = JSON.stringify(usuario);
		console.log(jsonDatosUser);
	}
}
