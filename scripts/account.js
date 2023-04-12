// Obtenemos los inputs y los botones
document.querySelector("#buttonIniciar");
const $userName = document.querySelector("#UserName");
const $nameInput = document.querySelector("#inputNombre");
const $apellidoInput = document.querySelector("#inputApellido");
const $emailInput = document.querySelector("#inputEmail");
// const $nacimientoInput = document.querySelector("#inputNacimiento");
const $telefonoInput = document.querySelector("#inputTelefono");
const $contrasenaInput = document.querySelector("#inputContrasena");
const $calleInput = document.querySelector("#inputCalle");
const $numeroInput = document.querySelector("#inputNumero");
const $codigoPostalInput = document.querySelector("#inputCodigoPostal");
const $coloniaInput = document.querySelector("#inputColonia");
const $municipioInput = document.querySelector("#inputMunicipio");
const $estadoInput = document.querySelector("#inputEstado");
const $editBtn = document.querySelector("#buttonEditar");
const $saveBtn = document.querySelector("#buttonGuardar");
const $editBtn1 = document.querySelector("#buttonEditar1");
const $saveBtn1 = document.querySelector("#buttonGuardar1");
const $modal = document.getElementById("miModal");

const $salirCuenta = document.querySelector("#salir-cuenta");
const $eliminarCuenta = document.querySelector("#eliminar-cuenta");

$salirCuenta.addEventListener("click", () => {
	localStorage.removeItem("DATA_USER");
	window.location.href = "./";
});

$eliminarCuenta.addEventListener("click", () => {
	deleteUser();
});

$editBtn.addEventListener("click", () => {
	enableInputsDatos();
});

$editBtn1.addEventListener("click", () => {
	enableInputsDireccion();
});

$saveBtn.addEventListener("click", () => {
	validarForm();
});

$saveBtn1.addEventListener("click", () => {
	validarDireccion();
});

window.onload = () => {
	updateData();
};
updateData();

function updateData() {
	DATA_USER = JSON.parse(localStorage.getItem("DATA_USER"));
	// console.log(DATA_USER);
	$userName.innerHTML = "Bienvenido " + DATA_USER.nombre;
	$nameInput.value = DATA_USER.nombre;
	$apellidoInput.value = DATA_USER.apellido;
	$emailInput.value = DATA_USER.email;
	// $nacimientoInput.value = DATA_USER.nacimiento;
	$telefonoInput.value = DATA_USER.telefono;
	$calleInput.value = DATA_USER.calle;
	$numeroInput.value = DATA_USER.numero;
	$codigoPostalInput.value = DATA_USER.codigo_postal;
	$coloniaInput.value = DATA_USER.colonia;
	$municipioInput.value = DATA_USER.municipio;
	$estadoInput.value = DATA_USER.estado;
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
	$nameInput.disabled = false;
	$apellidoInput.disabled = false;
	$emailInput.disabled = false;
	// $nacimientoInput.disabled = false;
	$telefonoInput.disabled = false;
	$contrasenaInput.disabled = false;
}

function enableInputsDireccion() {
	$calleInput.disabled = false;
	$codigoPostalInput.disabled = false;
	$coloniaInput.disabled = false;
	$municipioInput.disabled = false;
	$estadoInput.disabled = false;
	$numeroInput.disabled = false;
}

// Función para deshabilitar los inputs
function disableInputsDatos() {
	$nameInput.disabled = true;
	$apellidoInput.disabled = true;
	$emailInput.disabled = true;
	// $nacimientoInput.disabled = true;
	$telefonoInput.disabled = true;
	$contrasenaInput.disabled = true;
}

function disableInputsDireccion() {
	$calleInput.disabled = true;
	$codigoPostalInput.disabled = true;
	$coloniaInput.disabled = true;
	$municipioInput.disabled = true;
	$estadoInput.disabled = true;
	$numeroInput.disabled = true;
}

// Al cargar la página, deshabilitamos los inputs
disableInputsDatos();
disableInputsDireccion();

// Al dar click al submit del formulario
// se ejecuta esta funcion

function validarForm() {
	// Se crean varibles acorde al valor de los input del formulario
	const nombre = document.getElementById("inputNombre").value;
	const apellido = document.getElementById("inputApellido").value;
	const correo = document.getElementById("inputEmail").value;
	const contrasena = document.getElementById("inputContrasena").value;
	const tel = document.getElementById("inputTelefono").value;
	// const fecha = document.getElementById("inputNacimiento").value;
	let jsonDatosUser;
	let aviso = "";

	// expresiones RegExp para validar algunas variables
	const regexCorreo = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}/;
	const regexContraseña = /[a-zA-Z0-9_]\S{7,20}/;
	const regexTel = /[0-9]{10}/;
	// const regexFecha = /[0-9-]{3,20}/;

	let contador = 0;
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

	// Si se llega este ultimo else significa que los datos proporcionados son correctos
	// dado que no se entro a ninguna estructura de control
	// por lo cual el aviso corresponde a registro correcto
	else {
		aviso += "Datos Guardados Correctamente";
		disableInputsDatos();
	}

	// Aqui se establece el aviso con la info correcta o incorrecta segun sea el caso
	// este aviso aparecera en una venatana modal, una vez que se da click en submit
	// modal.innerHTML=aviso
	alert(($modal.innerHTML = aviso));

	// Dado que el contador esta en cero, significa que no entro en algun flujo
	// de control, por lo cual los valores son correctos, se creo un objeto
	// y posteriormente un json
	if (contador == 0) {
		var usuario = {
			nombre: nombre,
			apellido: apellido,
			email: correo,
			password: contrasena,
			telefono: tel,
			// nacimiento: fecha,
		};
		updateUsuario(DATA_USER.id, usuario);
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
		disableInputsDireccion();
	}

	alert(($modal.innerHTML = aviso));

	if (contador == 0) {
		var usuario = {
			calle: direccion,
			numero: numDire,
			colonia: colonia,
			municipio: municipio,
			estado: estado,
			codigo_postal: cp,
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
