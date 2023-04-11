//Get inputs, warnings y boton
const $inputName = document.querySelector("#input-name");
const $warningName = document.querySelector("#warning-name");

const $inputLast = document.querySelector("#input-last");
const $warningLast = document.querySelector("#warning-last");

const $inputEmail = document.querySelector("#input-email");
const $warningEmail = document.querySelector("#warning-email");

const $inputPass1 = document.querySelector("#input-pass1");
const $warningPass1 = document.querySelector("#warning-pass1");

const $inputPass2 = document.querySelector("#input-pass2");
const $warningPass2 = document.querySelector("#warning-pass2");

const $buttonSend = document.querySelector("#button");

const $form = document.querySelector("#form-contact");

//events: input focusout
//focusout dispara el evento cuando se sale del formulario
$inputName.addEventListener("focusout", checkName);
$inputLast.addEventListener("focusout", checkLast);
$inputEmail.addEventListener("focusout", checkEmail);
$inputPass1.addEventListener("focusout", checkPass1);
$inputPass2.addEventListener("focusout", checkPass2);

$buttonSend.addEventListener("click", send);

//Cuando se presiona el boton enviar
function send(e) {
	//Si todo los formularios estan correctos registrar, usar $ para que check todos aunque los primero fallen
	if (checkName(e) & checkLast(e) & checkEmail(e) & checkPass1(e) & checkPass2(e)) {
		registerUser();
	}
}

function registerUser() {
	const name_user = $inputName.value;
	const last_name_user = $inputLast.value;
	const email_user = $inputEmail.value;
	const pass_user = $inputPass1.value;

	let DATA_USER = {
		nombre: `${name_user}`,
		apellido: `${last_name_user}`,
		email: `${email_user}`,
		password: `${pass_user}`,
	};

	let url = SERVER_URL + "usuarios";
	fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(DATA_USER) })
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			if (data.id == null) {
				alert("Usuario ya registrado");

			} else {
				alert("Usuario agregado con exito");
				localStorage.setItem("DATA_USER", JSON.stringify(data));
				updateNavUser();
				window.location.href = "./";
			}
		})
		.catch((error) => {
			console.error(error);
			alert("Error del servidor");
		});
}

// Revisar que no este vacio
function checkName(e) {
	// Si esta vacio muestra advertencia
	if ($inputName.value == "") {
		$warningName.style.visibility = "visible";
		$warningName.textContent = "No puede estar vacio";

		// Correcto
	} else {
		$warningName.style.visibility = "hidden";
		return true;
	}
	return false;
}

// Revisar que no este vacio
function checkLast(e) {
	// Si esta vacio muestra advertencia
	if ($inputLast.value == "") {
		$warningLast.style.visibility = "visible";
		$warningLast.textContent = "No puede estar vacio";

		// Correcto
	} else {
		$warningLast.style.visibility = "hidden";
		return true;
	}
	return false;
}

// Revisar que no este vacio y tenga @
function checkEmail(e) {
	if ($inputEmail.value == "") {
		$warningEmail.style.visibility = "visible";
		$warningEmail.textContent = "No puede estar vacio";

		// Si no tiene hay un @ en la cadena muestra advertencia
	} else if (!RegExp(/@/).test($inputEmail.value)) {
		$warningEmail.style.visibility = "visible";
		$warningEmail.textContent = "Correo no valido";

		// Correcto
	} else {
		$warningEmail.style.visibility = "hidden";
		return true;
	}
	return false;
}

// Revisar que no este vacio y sea mayor a 10 caracteres
function checkPass1(e) {
	const value = $inputPass1.value;
	if (value == "") {
		$warningPass1.style.visibility = "visible";
		$warningPass1.textContent = "No puede estar vacio";

		// Si no tiene hay un @ en la cadena muestra advertencia
	} else if (value.length < 10) {
		$warningPass1.style.visibility = "visible";
		$warningPass1.textContent = "Debe ser mayor a 10 caracteres";
		// Correcto
	} else {
		$warningPass1.style.visibility = "hidden";
		return true;
	}
	return false;
}

// Revisar que las contraseñas sean iguales
function checkPass2(e) {
	if ($inputPass1.value != $inputPass2.value) {
		$warningPass2.style.visibility = "visible";
		$warningPass2.textContent = "La contraseña no es igual";
	} else {
		$warningPass2.style.visibility = "hidden";
		return true;
	}
	return false;
}
