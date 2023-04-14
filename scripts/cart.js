const $nameInput = document.querySelector("#name-input");
const $apellidoInput = document.querySelector("#apellido-input");
// const $emailInput = document.querySelector("#email-input");
const $telefonoInput = document.querySelector("#telefono-input");
const $calleInput = document.querySelector("#calle-input");
const $numeroInput = document.querySelector("#numero-input");
const $codigoPostalInput = document.querySelector("#codigo-postal-input");
const $coloniaInput = document.querySelector("#colonia-input");
const $municipioInput = document.querySelector("#municipio-input");
const $estadoInput = document.querySelector("#estado-input");
const $infoInput = document.querySelector("#info-input");

const $warningName = document.querySelector("#warning-name");
const $warningApellido = document.querySelector("#warning-apellido");
// const $warningEmail = document.querySelector("#warning-email");
const $warningTelefono = document.querySelector("#warning-telefono");
const $warningCalle = document.querySelector("#warning-calle");
const $warningNumero = document.querySelector("#warning-numero");
const $warningColonia = document.querySelector("#warning-colonia");
const $warningCodigoPostal = document.querySelector("#warning-codigo-postal");
const $warningMunicipio = document.querySelector("#warning-municipio");
const $warningEstado = document.querySelector("#warning-estado");

const $containerMessage = document.querySelector("#container-message");
const $containerBottom = document.querySelector("#container-bottom");

const $containerShipping = document.querySelector("#container-shipping");
const $containerPay = document.querySelector("#container-pay");

const $btnSaveInfo = document.querySelector("#btn-save-info");
const $btnPayGuest = document.querySelector("#btn-pay-guest");
const $btnPayUser = document.querySelector("#btn-pay-user");
const $btnPay = document.querySelector("#btn-pay");
const $btnVaciar = document.querySelector("#btn-vaciar");

const $pTotal = document.querySelector("#p-total");
const $pShipping = document.querySelector("#p-shipping");

const $containerProducts = document.querySelector("#container-products");

const $btnTostadoNo = document.querySelector("#btn-tostado-no");
const $btnTostadoBajo = document.querySelector("#btn-tostado-bajo");
const $btnTostadoMedio = document.querySelector("#btn-tostado-medio");
const $btnTostadoAlto = document.querySelector("#btn-tostado-alto");

const $btnMolidoNo = document.querySelector("#btn-molido-no");
const $btnMolidoBajo = document.querySelector("#btn-molido-bajo");
const $btnMolidoMedio = document.querySelector("#btn-molido-medio");
const $btnMolidoAlto = document.querySelector("#btn-molido-alto");

$nameInput.addEventListener("focusout", checkNombre);
$apellidoInput.addEventListener("focusout", checkApellido);
// $emailInput.addEventListener("focusout", checkEmail);
$telefonoInput.addEventListener("focusout", checkTelefono);
$calleInput.addEventListener("focusout", checkCalle);
$numeroInput.addEventListener("focusout", checkNumero);
$coloniaInput.addEventListener("focusout", checkColonia);
$codigoPostalInput.addEventListener("focusout", checkCodigoPostal);
$municipioInput.addEventListener("focusout", checkMunicipio);
$estadoInput.addEventListener("focusout", checkEstado);

const $btnUpdateProduct = document.querySelector("#btn-update-product");
let idModal = 0;
let tostadoModal = 0;
let molidoModal = 0;

const arrGrind = ["No", "Bajo", "Medio", "Alto"];
const arrRoast = ["No", "Bajo", "Medio", "Alto"];

let DATA_PRODUCTS = [];
let DATA_CART = [];

getProducts();
loadUsuario();
loadUserData();
disableInputs(true);

$btnVaciar.addEventListener("click", () => {
	DATA_CART = [];
	localStorage.setItem("DATA_CART", JSON.stringify(DATA_CART));
	updateDataCart();
	updateCart();
});

function updateDataCart() {
	//No esta sesion iniciada
	if (DATA_USER == null || DATA_USER.id == null || DATA_USER.id == undefined) {
		return;
	}

	let PRODUCTOS = [];
	let MOLIDO = [];
	let TOSTADO = [];
	let CANTIDAD = [];

	for (let i = 0; i < DATA_CART.length; i++) {
		PRODUCTOS.push(DATA_CART[i].id);
		MOLIDO.push(DATA_CART[i].grind);
		TOSTADO.push(DATA_CART[i].roast);
		CANTIDAD.push(DATA_CART[i].count);
	}

	var usuario = {
		carrito_productos: PRODUCTOS.toString(),
		carrito_molido: MOLIDO.toString(),
		carrito_tostado: TOSTADO.toString(),
		carrito_cantidad: CANTIDAD.toString(),
	};

	let url = SERVER_URL + `usuarios/${DATA_USER.id}`;
	fetch(url, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(usuario) })
		.then((response) => response.json())
		.then((data) => {
			//No guarda nada si hubo un error
			if (data == null) {
				return;
			}
			localStorage.setItem("DATA_USER", JSON.stringify(data));

			// console.clear(); //LIMPIAR CONSOLA
			console.log("%c INFORMACION DEL SERVIDOR GUARDADA EN LOCALSTORAGE", "color:yellow; background-color:blue");
			console.log(JSON.stringify(DATA_USER, null, 4)); //PRESENTACION

			loadCartData();
		})
		.catch((error) => {
			console.error(error);
		});
}

function loadUserData() {
	//Si no hay datos en data user
	if (DATA_USER == null) {
		return;
	}

	$nameInput.value = DATA_USER.nombre;
	$apellidoInput.value = DATA_USER.apellido;
	// $emailInput.value = DATA_USER.email;
	$telefonoInput.value = DATA_USER.telefono;
	$calleInput.value = DATA_USER.calle;
	$numeroInput.value = DATA_USER.numero;
	$codigoPostalInput.value = DATA_USER.codigo_postal;
	$coloniaInput.value = DATA_USER.colonia;
	$municipioInput.value = DATA_USER.municipio;
	$estadoInput.value = DATA_USER.estado;
}

function disableInputs(value) {
	$nameInput.disabled = value;
	$apellidoInput.disabled = value;
	// $emailInput.disabled = value;
	$telefonoInput.disabled = value;
	$calleInput.disabled = value;
	$numeroInput.disabled = value;
	$codigoPostalInput.disabled = value;
	$coloniaInput.disabled = value;
	$municipioInput.disabled = value;
	$estadoInput.disabled = value;
	$infoInput.disabled = value;
}

function loadCartData() {
	DATA_CART = JSON.parse(localStorage.getItem("DATA_CART"));
	let carrito_data = [];
	if (DATA_USER.carrito_productos != "") {
		const PRODUCTOS = DATA_USER.carrito_productos.split(",");
		const TOSTADO = DATA_USER.carrito_tostado.split(",");
		const MOLIDO = DATA_USER.carrito_molido.split(",");
		const CANTIDAD = DATA_USER.carrito_cantidad.split(",");

		for (let i = 0; i < PRODUCTOS.length; i++) {
			var data = {
				id: PRODUCTOS[i],
				grind: TOSTADO[i],
				roast: MOLIDO[i],
				count: CANTIDAD[i],
			};
			carrito_data.push(data);
		}
		localStorage.setItem("DATA_CART", JSON.stringify(carrito_data));
	}
}

//Carga los datos de usuarios si esta iniciada sesion como la direccion
function loadUsuario() {
	//No esta sesion iniciada
	if (DATA_USER == null || DATA_USER.id == null || DATA_USER.id == undefined) {
		return;
	}

	// console.log(DATA_USER);
	let url = SERVER_URL + `usuarios/${DATA_USER.id}`;
	fetch(url, { method: "GET", headers: { "Content-Type": "application/json" } })
		.then((response) => response.json())
		.then((data) => {
			// console.log(data);
			localStorage.setItem("DATA_USER", JSON.stringify(data));
			loadCartData();
		})
		.catch((error) => {
			console.error(error);
		});
}

$btnSaveInfo.addEventListener("click", function () {
	if ($btnSaveInfo.innerHTML == "Editar") {
		$btnSaveInfo.innerHTML = "Guardar";
		disableInputs(false);
	} else {
		if (
			checkNombre() &
			checkApellido() &
			checkTelefono() &
			checkCalle() &
			checkNumero() &
			checkColonia() &
			checkCodigoPostal() &
			checkMunicipio() &
			checkEstado()
		) {
			// Si esta iniciada sesion guardar lo datos en la base de datos
			if (DATA_USER != null && DATA_USER.id != null) {
				let usuario = {
					// nombre: $nameInput.value,
					// apellido: $apellidoInput.value,
					// email: $emailInput.value,
					telefono: $telefonoInput.value,
					calle: $calleInput.value,
					numero: $numeroInput.value,
					colonia: $coloniaInput.value,
					codigo_postal: $codigoPostalInput.value,
					municipio: $municipioInput.value,
					estado: $estadoInput.value,
				};

				let url = SERVER_URL + `usuarios/${DATA_USER.id}`;
				fetch(url, {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(usuario),
				})
					.then((response) => response.json())
					.then((data) => {
						localStorage.setItem("DATA_USER", JSON.stringify(data));
						$btnSaveInfo.innerHTML = "Editar";
						disableInputs(true);
					})
					.catch((error) => {
						console.error(error);
					});
			} else {
				// Si no esta iniciada sesion guardar los datos en el local storage
				let data = {
					nombre: $nameInput.value,
					apellido: $apellidoInput.value,
					telefono: $telefonoInput.value,
					calle: $calleInput.value,
					numero: $numeroInput.value,
					colonia: $coloniaInput.value,
					codigo_postal: $codigoPostalInput.value,
					municipio: $municipioInput.value,
					estado: $estadoInput.value,
				};

				localStorage.setItem("DATA_USER", JSON.stringify(data));
				DATA_USER = JSON.parse(localStorage.getItem("DATA_USER"));
				$btnSaveInfo.innerHTML = "Editar";

				// console.clear(); //LIMPIAR CONSOLA
				console.log("%c INFORMACION GUARDADA EN LOCALSTORAGE", "color:yellow; background-color:blue");
				console.log(JSON.stringify(DATA_USER, null, 4)); //PRESENTACION
			}
		}
	}
});

$btnUpdateProduct.addEventListener("click", function () {
	DATA_CART[idModal].roast = tostadoModal;
	DATA_CART[idModal].grind = molidoModal;
	localStorage.setItem("DATA_CART", JSON.stringify(DATA_CART));
	updateCart();
	updateDataCart();
});

$btnTostadoNo.addEventListener("click", function () {
	tostadoModal = 0;
	molidoModal = 0;

	//Si se selecciona sin tostar, se desabilitan los botones de molido
	$btnMolidoBajo.disabled = true;
	$btnMolidoMedio.disabled = true;
	$btnMolidoAlto.disabled = true;

	//Se selecciona la opcion de sin moler
	$btnMolidoNo.checked = true;
});

$btnTostadoBajo.addEventListener("click", function () {
	tostadoModal = 1;
	$btnMolidoBajo.disabled = false;
	$btnMolidoMedio.disabled = false;
	$btnMolidoAlto.disabled = false;
});

$btnTostadoMedio.addEventListener("click", function () {
	tostadoModal = 2;
	$btnMolidoBajo.disabled = false;
	$btnMolidoMedio.disabled = false;
	$btnMolidoAlto.disabled = false;
});

$btnTostadoAlto.addEventListener("click", function () {
	tostadoModal = 3;
	$btnMolidoBajo.disabled = false;
	$btnMolidoMedio.disabled = false;
	$btnMolidoAlto.disabled = false;
});

$btnMolidoNo.addEventListener("click", function () {
	console.log("No");
	molidoModal = 0;
});

$btnMolidoBajo.addEventListener("click", function () {
	molidoModal = 1;
});

$btnMolidoMedio.addEventListener("click", function () {
	molidoModal = 2;
});

$btnMolidoAlto.addEventListener("click", function () {
	molidoModal = 3;
});

$btnPay.onclick = function () {
	if (
		checkNombre() &
		checkApellido() &
		checkTelefono() &
		checkCalle() &
		checkNumero() &
		checkColonia() &
		checkCodigoPostal() &
		checkMunicipio() &
		checkEstado()
	) {
		//Compra como invitado
		if (DATA_USER == null || DATA_USER.id == null || DATA_USER.id == undefined) {
			alert("Compra como invitado realizada con éxito");
			DATA_CART = [];
			localStorage.setItem("DATA_CART", JSON.stringify(DATA_CART));
			updateCart();
			updateDataCart();
			return;
		}

		const PRODUCTOS = DATA_USER.carrito_productos.split(",");
		const TOSTADO = DATA_USER.carrito_tostado.split(",");
		const MOLIDO = DATA_USER.carrito_molido.split(",");
		const CANTIDAD = DATA_USER.carrito_cantidad.split(",");

		const date = new Date();
		let PEDIDO_FECHA = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;

		date.setDate(date.getDate() + 7);

		let ENTREGA_FECHA = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
		console.log(DATA_PRODUCTS)
		console.log(DATA_USER)

		for (let i = 0; i < PRODUCTOS.length; i++) {
			console.log(i)
			console.log(PRODUCTOS)

			let venta = {
				idUsuario: `${DATA_USER.id}`,
				idProducto: `${PRODUCTOS[i]}`,
				fechaEntrega: `${PEDIDO_FECHA}`,
				fechaPago: `${ENTREGA_FECHA}`,
				precioVenta: `${DATA_PRODUCTS[PRODUCTOS[i]].precio * CANTIDAD[i]}`,
				tostado: `${TOSTADO[i]}`,
				molido: `${MOLIDO[i]}`,
				count: `${CANTIDAD[i]}`,
			};
			addVenta(venta);
		}

		alert("Compra realizada con éxito");
		DATA_CART = [];
		localStorage.setItem("DATA_CART", JSON.stringify(DATA_CART));
		updateCart();
		updateDataCart();

	} else {
		// alert("Error");
		const $alert = document.querySelector("#alert-pago");
		$alert.style.visibility = "visible";
		setTimeout(() => {
			$alert.style.visibility = "hidden";
		}, 2000);
	}
};

function getProducts() {
	DATA_CART = JSON.parse(localStorage.getItem("DATA_CART"));
	DATA_PRODUCTS = JSON.parse(localStorage.getItem("DATA_PRODUCTS"));
	let url = SERVER_URL + `productos`;
	fetch(url, { method: "GET", headers: { "Content-Type": "application/json" } })
	.then((response) => response.json())
	.then((data) => {
			localStorage.setItem("DATA_PRODUCTS", JSON.stringify(data));
			DATA_PRODUCTS = JSON.parse(localStorage.getItem("DATA_PRODUCTS"));
			updateCart();

		})
		.catch(function (error) {
			console.error("Error al realizar la petición:", error);
		});
}

// Actualiza el carrito
function updateCart() {
	$containerProducts.innerHTML = "";
	updateNavCart();
	
	DATA_CART = JSON.parse(localStorage.getItem("DATA_CART"));

	if (DATA_CART == null) {
		DATA_CART = [];
	}

	// console.clear(); //LIMPIAR CONSOLA
	console.log("%c INFORMACION CARRITO LOCALSTORAGE", "color:yellow; background-color:blue");
	console.log(JSON.stringify(DATA_CART, null, 4)); //PRESENTACION

	// updateDataCart();

	if (DATA_CART == null || DATA_CART.length == 0) {
		$containerMessage.style.visibility = "visible";
		$containerBottom.style.visibility = "hidden";
		$btnVaciar.style.display = "none";
	} else {
		$containerMessage.style.visibility = "hidden";
		$containerBottom.style.visibility = "visible";
		$btnVaciar.style.display = "block";
	}

	// $containerPay.style.visibility = "hidden";
	// $containerShipping.style.visibility = "hidden";

	let total = 0;

	for (let i = 0; i < DATA_CART.length; i++) {
		let PRODUCT = DATA_PRODUCTS.find((product) => product.id == DATA_CART[i].id);
		//Si el producto no llegara a aparecer por cambios de administrador
		if (PRODUCT == null || PRODUCT == undefined) {
			continue;
		}

		const subtotal = PRODUCT.precio * DATA_CART[i].count;
		const grind = arrGrind[DATA_CART[i].grind];
		const roast = arrRoast[DATA_CART[i].roast];

		$containerProducts.innerHTML += `<div class="product">
        <div class="row">
          <div id="info" class="col-12 col-md-6">
            <button id="product-delete" class="btn small-button" onclick="deleteProduct()">x</button>

            <img class="img-product" src="${SERVER_URL}${PRODUCT.rutaimagen}" alt="">
            <div class="product-info">
              <p>${PRODUCT.nombre}</p>
              <p>Tostado: ${roast}</p>
              <p>Molido: ${grind}</p>
            </div>
          </div>

          <div id="amount" class="center col-4 col-md-3">
            <button class="btn small-button" onclick="subCount(${i})">-</button>
            <p>${DATA_CART[i].count}</p>
            <button class="btn small-button" onclick="addCount(${i})">+</button>
          </div>

          <div id="buttons" class="center col-8 col-md-3">
            <div class="row">

              <div id="price" class="col-6 col-md-12">
                <p>$${subtotal}</p>
              </div>

              <div id="details" class="col-6 col-md-12">
                <button class="button btn" data-bs-toggle="modal" data-bs-target="#modal-product"
                  onclick="updateModal(${i})">Detalles</button>
              </div>
            </div>
          </div>

        </div>
      </div>`;
		total += subtotal;
	}

	if (total < 1000) {
		$pShipping.innerHTML = "Envio: $" + Number(200).toFixed(2);
		$pTotal.innerHTML = "Total: $" + Number(total + 200).toFixed(2);
	} else {
		$pShipping.innerHTML = "Gratis";
		$pTotal.innerHTML = "Total: $" + Number(total).toFixed(2);
	}
}

function deleteProduct(i) {
	DATA_CART.splice(i, 1);
	localStorage.setItem("DATA_CART", JSON.stringify(DATA_CART));
	updateCart();
	updateDataCart();
}

function addCount(i) {
	DATA_CART[i].count++;
	localStorage.setItem("DATA_CART", JSON.stringify(DATA_CART));
	updateCart();
	updateDataCart();
}

function subCount(i) {
	if (DATA_CART[i].count == 1) {
		return;
	}
	DATA_CART[i].count--;
	localStorage.setItem("DATA_CART", JSON.stringify(DATA_CART));
	updateCart();
	updateDataCart();
}

function updateModal(i) {
	idModal = i;
	// console.log(i);
	let PRODUCT = DATA_PRODUCTS.find((product) => product.id == DATA_CART[i].id);
	// console.log(PRODUCT);

	tostadoModal = DATA_CART[i].roast;
	molidoModal = DATA_CART[i].grind;

	// console.log(tostadoModal);

	// Desmarcar todos los botones de tostado
	$btnTostadoNo.checked = false;
	$btnTostadoBajo.checked = false;
	$btnTostadoMedio.checked = false;
	$btnTostadoAlto.checked = false;

	// Desmarcar todos los botones de molido
	$btnMolidoNo.checked = false;
	$btnMolidoBajo.checked = false;
	$btnMolidoMedio.checked = false;
	$btnMolidoAlto.checked = false;

	//Si esta seleccionado sin tostar, deshabilitar los botones de molido
	$btnMolidoBajo.disabled = tostadoModal == 0;
	$btnMolidoMedio.disabled = tostadoModal == 0;
	$btnMolidoAlto.disabled = tostadoModal == 0;

	// Marcar los botones de tostado y molido dependiendo de como se guardo el producto
	$btnTostadoNo.checked = tostadoModal == 0;
	$btnTostadoBajo.checked = tostadoModal == 1;
	$btnTostadoMedio.checked = tostadoModal == 2;
	$btnTostadoAlto.checked = tostadoModal == 3;

	$btnMolidoNo.checked = molidoModal == 0;
	$btnMolidoBajo.checked = molidoModal == 1;
	$btnMolidoMedio.checked = molidoModal == 2;
	$btnMolidoAlto.checked = molidoModal == 3;

	document.getElementById("modal-img").src = `./public/img/products/${PRODUCT.rutaimagen}`;
	document.getElementById("modal-title").innerHTML = PRODUCT.nombre;
}

function checkNombre(e) {
	// Si esta vacio muestra advertencia
	if ($nameInput.value == "") {
		$warningName.style.visibility = "visible";
		$warningName.textContent = "No puede estar vacio";

		// Correcto
	} else {
		$warningName.style.visibility = "hidden";
		return true;
	}
	return false;
}

function checkApellido(e) {
	// Si esta vacio muestra advertencia
	if ($apellidoInput.value == "") {
		$warningApellido.style.visibility = "visible";
		$warningApellido.textContent = "No puede estar vacio";

		// Correcto
	} else {
		$warningApellido.style.visibility = "hidden";
		return true;
	}
	return false;
}

function checkTelefono(e) {
	// Si esta vacio muestra advertencia
	if ($telefonoInput.value == "") {
		$warningTelefono.style.visibility = "visible";
		$warningTelefono.textContent = "No puede estar vacio";

		// Correcto
	} else {
		$warningTelefono.style.visibility = "hidden";
		return true;
	}
	return false;
}

function checkCalle(e) {
	// Si esta vacio muestra advertencia
	if ($calleInput.value == "") {
		$warningCalle.style.visibility = "visible";
		$warningCalle.textContent = "No puede estar vacio";

		// Correcto
	} else {
		$warningCalle.style.visibility = "hidden";
		return true;
	}
	return false;
}

function checkNumero(e) {
	// Si esta vacio muestra advertencia
	if ($numeroInput.value == "") {
		$warningNumero.style.visibility = "visible";
		$warningNumero.textContent = "No puede estar vacio";

		// Correcto
	} else {
		$warningNumero.style.visibility = "hidden";
		return true;
	}
	return false;
}

function checkNumero(e) {
	// Si esta vacio muestra advertencia
	if ($numeroInput.value == "") {
		$warningNumero.style.visibility = "visible";
		$warningNumero.textContent = "No puede estar vacio";

		// Correcto
	} else {
		$warningNumero.style.visibility = "hidden";
		return true;
	}
	return false;
}

function checkColonia(e) {
	// Si esta vacio muestra advertencia
	if ($coloniaInput.value == "") {
		$warningColonia.style.visibility = "visible";
		$warningColonia.textContent = "No puede estar vacio";

		// Correcto
	} else {
		$warningColonia.style.visibility = "hidden";
		return true;
	}
	return false;
}

function checkCodigoPostal(e) {
	// Si esta vacio muestra advertencia
	if ($codigoPostalInput.value == "") {
		$warningCodigoPostal.style.visibility = "visible";
		$warningCodigoPostal.textContent = "No puede estar vacio";

		// Correcto
	} else {
		$warningCodigoPostal.style.visibility = "hidden";
		return true;
	}
	return false;
}

function checkMunicipio(e) {
	// Si esta vacio muestra advertencia
	if ($municipioInput.value == "") {
		$warningMunicipio.style.visibility = "visible";
		$warningMunicipio.textContent = "No puede estar vacio";

		// Correcto
	} else {
		$warningMunicipio.style.visibility = "hidden";
		return true;
	}
	return false;
}

function checkEstado(e) {
	// Si esta vacio muestra advertencia
	if ($estadoInput.value == "") {
		$warningEstado.style.visibility = "visible";
		$warningEstado.textContent = "No puede estar vacio";

		// Correcto
	} else {
		$warningEstado.style.visibility = "hidden";
		return true;
	}
	return false;
}

function addVenta(venta) {
	let url = SERVER_URL + "ventas";
	fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(venta) })
		.then((response) => response.json())
		.then((data) => {
			console.log("OK");
		})
		.catch((error) => {
			console.error(error);
		});
}
