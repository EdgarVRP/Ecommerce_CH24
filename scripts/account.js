
// Obtenemos los inputs y los botones
const nameInput = document.getElementById('inputNombre');
const emailInput = document.getElementById('inputEmail');
const editBtn = document.getElementById('buttonEditar');
const saveBtn = document.getElementById('buttonGuardar');
const editBtn1 = document.getElementById('buttonEditar1');
const saveBtn1 = document.getElementById('buttonGuardar1');
const telefonoInput = document.getElementById('inputTelefono');
const nacimientoInput = document.getElementById('inputNacimiento');
const contrasenaInput = document.getElementById('inputContrasena');
const calleInput = document.getElementById('inputCalle');
const codigoPostalInput = document.getElementById('inputCodigoPostal');
const coloniaInput = document.getElementById('inputColonia');
const municipioInput = document.getElementById('inputMunicipio');
const estadoInput = document.getElementById('inputEstado');
const numeroInput = document.getElementById('inputNumero');



// Función para habilitar los inputs y mostrar el botón de guardar
function enableInputs() {
    nameInput.disabled = false;
    emailInput.disabled = false;
    telefonoInput.disabled = false;
    nacimientoInput.disabled = false;
    contrasenaInput.disabled = false;
    calleInput.disabled = false;
    codigoPostalInput.disabled = false;
    coloniaInput.disabled = false;
    municipioInput.disabled = false;
    estadoInput.disabled = false;
    numeroInput.disabled = false;
    
    
}

// Función para deshabilitar los inputs y ocultar el botón de guardar
function disableInputs() {
    nameInput.disabled = true;
    emailInput.disabled = true;
    telefonoInput.disabled = true;
    nacimientoInput.disabled = true;
    contrasenaInput.disabled = true;
    calleInput.disabled = true;
    codigoPostalInput.disabled = true;
    coloniaInput.disabled = true;
    municipioInput.disabled = true;
    estadoInput.disabled = true;
    numeroInput.disabled = true;
    
    
}

// Al cargar la página, deshabilitamos los inputs y ocultamos el botón de guardar
disableInputs();

// Agregamos un event listener al botón de "Editar" para habilitar los inputs
editBtn.addEventListener('click', enableInputs);
editBtn1.addEventListener('click', enableInputs);

// Agregamos un event listener al botón de "Guardar" para guardar los cambios y deshabilitar los inputs
saveBtn.addEventListener('click', () => {
    // Aquí iría el código para guardar los cambios en la base de datos o enviarlos al servidor
    alert('Cambios guardados correctamente');
    disableInputs();
});
saveBtn1.addEventListener('click', () => {
    alert('Cambios guardados correctamente');
    disableInputs();
});

