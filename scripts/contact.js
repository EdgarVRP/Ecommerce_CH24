// alert('Contact')

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


inputName.addEventListener("input", checkName);
inputLast.addEventListener("input", checkLast);
inputEmail.addEventListener("input", checkEmail);
inputPhone.addEventListener("input", checkPhone);
inputComments.addEventListener("input", checkComments);

buttonSend.addEventListener("click", send);

function send(e) {
    checkName(e);
    checkLast(e);
    checkEmail(e);
    checkPhone(e);
    checkComments(e);
}

// Revisar que no este vacio
function checkName(e) {
  console.log(e);
  if (inputName.value == "") {
    warningName.style.visibility = "visible";
    warningName.textContent = "No puede esta vacio";
  } else {
    warningName.style.visibility = "hidden";
  }
}

// Revisar que no este vacio
function checkLast(e) {
  if (inputLast.value == "") {
    warningLast.style.visibility = "visible";
    warningLast.textContent = "No puede esta vacio";
  } else {
    warningLast.style.visibility = "hidden";
  }
}

// Revisar que no este vacio y tenga @
function checkEmail(e) {
  if (inputEmail.value == "") {
    warningEmail.style.visibility = "visible";
    warningEmail.textContent = "No puede esta vacio";
  } else {
    warningEmail.style.visibility = "hidden";
  }
}

// Revisar que no este vacio y sean solo numeros
function checkPhone(e) {
  if (inputPhone.value == "") {
    warningPhone.style.visibility = "visible";
    warningPhone.textContent = "No puede esta vacio";
  } else {
    warningPhone.style.visibility = "hidden";
  }
}

// Revisar que no este vacio
function checkComments(e) {
  if (inputComments.value == "") {
    warningComments.style.visibility = "visible";
    warningComments.textContent = "No puede esta vacio";
  } else {
    warningComments.style.visibility = "hidden";
  }
}
