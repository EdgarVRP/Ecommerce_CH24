// alert('Contact')

//Get inputs, warnings y boton
const inputName = document.getElementById("input-name");
const warningName = document.getElementById("warning-name");

const inputLast = document.getElementById("input-last");
const warningLast = document.getElementById("warning-last");

const inputEmail = document.getElementById("input-email");
const warningEmail = document.getElementById("warning-email");

const inputPhone = document.getElementById("input-phone");
const warningPhone = document.getElementById("warning-phone");

const inputComments = document.getElementById("input-comments");
const warningComments = document.getElementById("warning-comments");

const buttonSend = document.getElementById("button");

const form = document.getElementById("form-contact");


//events: input focusout
//focusout dispara el evento cuando se sale del formulario
inputName.addEventListener("focusout", checkName);
inputLast.addEventListener("focusout", checkLast);
inputEmail.addEventListener("focusout", checkEmail);
inputPhone.addEventListener("focusout", checkPhone);
inputComments.addEventListener("focusout", checkComments);

buttonSend.addEventListener("click", send);

//Cuando se presiona el boton enviar
function send(e) {
  //Si todo los formularios estan correctos enviar email
  if (
    checkName(e) &
    checkLast(e) &
    checkEmail(e) &
    checkPhone(e) &
    checkComments(e)
  ){
    form.submit()
  }
}

// Revisar que no este vacio
function checkName(e) {
  // Si esta vacio muestra advertencia
  if (inputName.value == "") {
    warningName.style.visibility = "visible";
    warningName.textContent = "No puede estar vacio";

    // Correcto
  } else {
    warningName.style.visibility = "hidden";
    return true;
  }
  return false;
}

// Revisar que no este vacio
function checkLast(e) {
  // Si esta vacio muestra advertencia
  if (inputLast.value == "") {
    warningLast.style.visibility = "visible";
    warningLast.textContent = "No puede estar vacio";

    // Correcto
  } else {
    warningLast.style.visibility = "hidden";
    return true;
  }
  return false;
}

// Revisar que no este vacio y tenga @
function checkEmail(e) {
  if (inputEmail.value == "") {
    warningEmail.style.visibility = "visible";
    warningEmail.textContent = "No puede estar vacio";

    // Si no tiene hay un @ en la cadena muestra advertencia
  } else if (!RegExp(/@/).test(inputEmail.value)) {
    warningEmail.style.visibility = "visible";
    warningEmail.textContent = "Correo no valido";

    // Correcto
  } else {
    warningEmail.style.visibility = "hidden";
    return true;
  }
  return false;
}

// Revisar que no este vacio y sean solo numeros
function checkPhone(e) {
  if (inputPhone.value == "") {
    warningPhone.style.visibility = "visible";
    warningPhone.textContent = "No puede estar vacio";

    // Si caracter no es digito en toda la cadena muestra advertencia o es diferente de 10 digitos
  } else if (
    !RegExp(/^\d+$/).test(inputPhone.value) ||
    inputPhone.value.length != 10
  ) {
    warningPhone.style.visibility = "visible";
    warningPhone.textContent = "Telefono no valido";

    // Correcto
  } else {
    warningPhone.style.visibility = "hidden";
    return true;
  }
  return false;
}

// Revisar que no este vacio
function checkComments(e) {
  //Si no esta vacio
  if (inputComments.value == "") {
    warningComments.style.visibility = "visible";
    warningComments.textContent = "No puede estar vacio";

    // Correcto
  } else {
    warningComments.style.visibility = "hidden";
    return true;
  }
  return false;
}
