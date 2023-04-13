//La primera vez que se presiona borra todos los formularios
//El script es imposible sin la opcion de mas datos
//El modal siempre aparece instantaneamente pero los fetch tardan por lo tanto los mensajes de usuario agregado con exito o usuario ya registrado no aparecen
//No cambiar keys de los json asi estan configurado el backend

// Al dar click al submit del formulario
// se ejecuta esta funcion

const $masDatos = document.querySelector("#masDatos");
const $nombre = document.getElementById("name");
const $apellido = document.getElementById("lana");
const $correo = document.getElementById("email");
const $contrasena = document.getElementById("password");
const $tel = document.getElementById("tel");
// const $fecha = document.getElementById("date");
const $direccion = document.getElementById("addr");
const $numDire = document.getElementById("numd");
const $colonia = document.getElementById("colo");
const $municipio = document.getElementById("muni");
const $estado = document.getElementById("esta");
const $cp = document.getElementById("cp");
const $modal = document.getElementById("miModal");
let carga=0;

disableForm(true);

masDatos.addEventListener("click", () => {
	disableForm(!masDatos.checked);
});

function disableForm(value) {
	// $fecha.disabled = value;
	$direccion.disabled = value;
	$numDire.disabled = value;
	$colonia.disabled = value;
	$municipio.disabled = value;
	$estado.disabled = value;
	$cp.disabled = value;
}

/* window.addEventListener('load', function() {
	if(carga==0){
		location.reload()
		carga++;
	}
  });
 */

function validarForm() {

	//event.preventDefault();

	console.log("validarForm");
	// Se crean varibles acorde al valor de los input del formulario
	const nombre = $nombre.value;
	const apellido = $apellido.value;
	const correo = $correo.value;
	const contrasena = $contrasena.value;
	const tel = $tel.value;
	// const fecha = $fecha.value;
	const direccion = $direccion.value;
	const numDire = $numDire.value;
	const colonia = $colonia.value;
	const municipio = $municipio.value;
	const estado = $estado.value;
	const cp = $cp.value;

	var jsonDatosUser;
	var aviso;

	// expresiones RegExp para validar algunas variables
	const regexCorreo = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}/;
	const regexContraseña = /[a-zA-Z0-9_]\S{7,20}/;
	const regexTel = /[0-9]{10}/;
	// const regexFecha = /[0-9-]{3,20}/;
	const regexNum = /[0-9]{1,5}/;
	var contador = 0;
	let exito = false;
	//console.log("------------------")

	// Validaciones mediante RegExp y Numero de caracteres
	// se valida cada variable, si se cumple con alguno de los criterios
	// se entra a la estructura de control de flujo y se muestra
	// un mensaje asociado a ese criterio cumplido en el modal

	// validacion nombre por longitud
	if (nombre.length < 3) {
		aviso = "El Nombre requiere por lo menos 3 caracteres\n";
		//contador++;
		$modal.innerHTML = aviso;

	}

	// validacion apellido por longitud
	else if (apellido.length < 3) {
		aviso = "El Apellido requiere por lo menos 3 caracteres\n";
		$modal.innerHTML = aviso;
		//contador++;
	}

	// validacion correo por regexp
	else if (!regexCorreo.test(correo)) {
		aviso = "El Correo no tiene un formato correcto\n";
		$modal.innerHTML = aviso;
		//contador++;
	}

	// validacion contraseña por regexp y longitud
	else if (!regexContraseña.test(contrasena) || contrasena.length < 7) {
		aviso = "La Contraseña no debe llevar espacios y requiere minimo 8 caracteres\n";
		$modal.innerHTML = aviso;
		//contador++;
	}

	// validacion telefono por regexp
	else if (!regexTel.test(tel)) {
		aviso = "El Telefono requiere 10 digitos\n";
		contador++;
		//Datos basico para registro
	} else if (!masDatos.checked) {
		var usuario = {
			nombre: `${nombre}`,
			apellido: `${apellido}`,
			email: `${correo}`,
			password: `${contrasena}`,
			telefono: `${tel}`,
		};

		let url = SERVER_URL + "usuarios";
		fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(usuario) })
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				if (data.id == null) {
					//alert("Usuario ya registrado");
					aviso = "Usuario ya registrado";
					$modal.innerHTML = aviso;

				} else {
					//alert("Bienvenido ¡Registro Exitoso!");
					aviso = "Bienvenido ¡Registro Exitoso!";
					localStorage.setItem("DATA_USER", JSON.stringify(data));
					updateNavUser();
					window.location.href = "./";
					$modal.innerHTML = aviso;

				}
			})
			.catch((error) => {
				console.error(error);
				// alert("Error del servidor");
				aviso = "Error del servidor";
				//alert("Error del servidor");
				$modal.innerHTML = aviso;

			});

		// aviso="Bienvenido ¡Registro Exitoso!";
		// Aqui se establece el aviso con la info correcta o incorrecta segun sea el caso
		// este aviso aparecera en una venatana modal, una vez que se da click en submit
		// console.log(aviso)
		//$modal.innerHTML = aviso;
		//return;
	}

	// validacion fecha por regexp
	// else if (!regexFecha.test(fecha)) {
	// 	aviso = "Selecciona la fecha\n";
	// 	contador++;
	// }
	// validacion direccion por longitud
	else if (direccion.length < 5) {
		aviso = "Tu Direccion debe tener al menos 5 caracteres\n";
		$modal.innerHTML = aviso;
		//contador++;
	}

	// validacion numero direccion por regexp
	else if (!regexNum.test(numDire)) {
		aviso = "Escribe un Numero de Direccion valido\n";
		$modal.innerHTML = aviso;
		//contador++;
	}

	// validacion colonia por longitud
	else if (colonia.length < 5) {
		aviso = "Tu colonia requiere al menos 5 caracteres\n";
		$modal.innerHTML = aviso;
		//contador++;
	}

	// validacion municipio por longitud
	else if (municipio.length < 5) {
		aviso = "Tu municipio requiere al menos 5 caracteres\n";
		$modal.innerHTML = aviso;
		//contador++;
	}

	// validacion estado por longitud
	else if (estado.length < 5) {
		aviso = "Tu estado requiere al menos 5 caracteres\n";
		$modal.innerHTML = aviso;
		//contador++;
	}

	// validacion codigo postal por regexp
	else if (!regexNum.test(cp)) {
		aviso = "Escribe un Codigo Postal valido\n";
		$modal.innerHTML = aviso;
		//contador++;
	}

	// Si se llega este ultimo else significa que los datos proporcionados son correctos
	// dado que no se entro a ninguna estructura de control
	// por lo cual el aviso corresponde a registro correcto
	else {
		var usuario = {
			nombre: nombre,
			apellido: apellido,
			email: correo,
			password: contrasena,
			telefono: tel,
			calle: direccion,
			numero: numDire,
			colonia: colonia,
			municipio: municipio,
			estado: estado,
			codigo_postal: cp,
		};

		let url = SERVER_URL + "usuarios";
		fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(usuario) })
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				if (data.id == null) {
					//alert("Usuario ya registrado");
					aviso = "Usuario ya registrado";
					$modal.innerHTML = aviso;

				} else {
					//alert("Usuario agregado con exito");
					aviso = "Bienvenido ¡Registro Exitoso!";
					localStorage.setItem("DATA_USER", JSON.stringify(data));
					updateNavUser();
					window.location.href = "./";
					$modal.innerHTML = aviso;

				}
			})
			.catch((error) => {
				console.error(error);
				//alert("Error del servidor");
				aviso = "Error del servidor";
				$modal.innerHTML = aviso;

			});

		// aviso="Bienvenido ¡Registro Exitoso!";
	}

	// Aqui se establece el aviso con la info correcta o incorrecta segun sea el caso
	// este aviso aparecera en una venatana modal, una vez que se da click en submit
	//$modal.innerHTML = aviso;

	// Dado que el contador esta en cero, significa que no entro en algun flujo
	// de control, por lo cual los valores son correctos, se creo un objeto
	// y posteriormente un json
}
