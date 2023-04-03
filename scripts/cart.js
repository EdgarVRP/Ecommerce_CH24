// alert('Cart')

// const { isIndex } = require("mathjs");

// const $btnPay = document.querySelector("#btn-pay");
// const $btnEmpty = document.querySelector("#btn-empty-cart");
// const $btnLogin = document.querySelector("#btn-login");
// const $btnGuest = document.querySelector("#btn-guest");
// const $btnShow = document.querySelector("#btn-show");
// const $bottom = document.querySelector("#bottom");
// const $message = document.querySelector("#message");
// const $btnPay = document.querySelector("#btn-pay-guest");
// const $btnPayUser = document.querySelector("#btn-pay-user");

// $btnPay.addEventListener("click", payProducts);
// $btnEmpty.addEventListener("click", emptyCard);
// $btnLogin.addEventListener("click", userPay);
// $btnGuest.addEventListener("click", guestPay);
// $btnShow.addEventListener("click", showModal);

// $btnPayGuest.onclick = function(){alert("Pagar como invitado")};

// $btnPayUser.onclick = function(){
// 	window.location.href = "./login.html";
// };

// $btnPayTotal.onclick = function(){
// 	window.location.href = "https://www.paypal.com/mx/home";
// };

const $containerMessage = document.querySelector("#container-message");
const $containerBottom = document.querySelector("#container-bottom");

const $containerShipping = document.querySelector("#container-shipping");
const $containerPay = document.querySelector("#container-pay");

const $btnSaveEdit = document.querySelector("#btn-save-edit");
const $btnPayGuest = document.querySelector("#btn-pay-guest");
const $btnPayUser = document.querySelector("#btn-pay-user");
const $btnPay = document.querySelector("#btn-pay");

const $pTotal = document.querySelector("#p-total");
const $pShipping = document.querySelector("#p-shipping");

const $containerProducts = document.querySelector("#container-products");

$btnPay.onclick = function () {
	alert("Compra realizada con éxito");
};

const arrGrind = ["No", "Bajo", "Medio", "Alto"];
const arrRoast = ["No", "Bajo", "Medio", "Alto"];

let DATA_PRODUCTS = [];
let DATA_CART = [];

getProducts();

// Obtiene los productos de la base de dea tos y los guarda en el local storage
function getProducts() {
	fetch("./testing/products.json")
		.then((response) => response.json())
		.then((data) => {
			DATA_PRODUCTS = data;
			localStorage.setItem("DATA_PRODUCTS", JSON.stringify(DATA_PRODUCTS));
			updateCart();
		})
		.catch(function (error) {
			console.error("Error al realizar la petición:", error);
		});
}

// Actualiza el carrito
function updateCart() {
	updateNavCart();

	DATA_CART = JSON.parse(localStorage.getItem("DATA_CART"));
	console.log(DATA_CART)

	if (DATA_CART == null || DATA_CART.length == 0) {
		$containerMessage.style.visibility = "visible";
		$containerBottom.style.visibility = "hidden";
		return;
	} else {
		$containerMessage.style.visibility = "hidden";
		$containerBottom.style.visibility = "visible";
	}

	// $containerPay.style.visibility = "hidden";
	// $containerShipping.style.visibility = "hidden";

	$containerProducts.innerHTML = "";
	let total = 0;

	for (let i = 0; i < DATA_CART.length; i++) {
		let PRODUCT = DATA_PRODUCTS.find((product) => product.id == DATA_CART[i].id);

		const subtotal = PRODUCT.precioTostado * DATA_CART[i].count;
		const grind = arrGrind[DATA_CART[i].grind];
		const roast = arrRoast[DATA_CART[i].roast];

		$containerProducts.innerHTML += `<div class="product">
        <div class="row">
          <div id="info" class="col-12 col-md-6">
            <button id="product-delete" class="btn small-button" onclick="deleteProduct()">x</button>

            <img class="img-product" src="${PRODUCT.rutaImagen}" alt="">
            <div class="product-info">
              <p>${PRODUCT.nombre}</p>
              <p>Molido: ${grind}</p>
              <p>Tostado: ${roast}</p>
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

	if (total < 1000){
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
}

function addCount(i) {
	DATA_CART[i].count++;
	localStorage.setItem("DATA_CART", JSON.stringify(DATA_CART));
	updateCart();
}

function subCount(i) {
	if (DATA_CART[i].count == 1) {
		return;
	}
	DATA_CART[i].count--;
	localStorage.setItem("DATA_CART", JSON.stringify(DATA_CART));
	updateCart();
}
var modal_id = 0;
function updateModal(i) {
	modal_id = i;
	console.log(i);
	let PRODUCT = DATA_PRODUCTS.find((product) => product.id == DATA_CART[i].id);

	console.log(PRODUCT);

	document.getElementById("modal-img").src = PRODUCT.rutaImagen;
	document.getElementById("modal-title").innerHTML = PRODUCT.nombre;
	// document.getElementById("modal-count").innerHTML = DATA_CART[i].count;
	// alert(id)
}

const btnmolido0 = document.querySelector("#btnradio1a");
const btnmolido1 = document.querySelector("#btnradio2a");
const btnmolido2 = document.querySelector("#btnradio3a");
const btnmolido3 = document.querySelector("#btnradio4a");

const btntostado0 = document.querySelector("#btnradio1b");
const btntostado1 = document.querySelector("#btnradio2b");
const btntostado2 = document.querySelector("#btnradio3b");
const btntostado3 = document.querySelector("#btnradio4b");

btnmolido0.onclick = function () {
	btntostado0.disabled = false;
	btntostado1.disabled = true;
	btntostado2.disabled = true;
	btntostado3.disabled = true;
}

btnmolido1.onclick = function () {
	btntostado0.disabled = false;
	btntostado1.disabled = false;
	btntostado2.disabled = false;
	btntostado3.disabled = false;
}

btnmolido2.onclick = function () {
	btntostado0.disabled = false;
	btntostado1.disabled = false;
	btntostado2.disabled = false;
	btntostado3.disabled = false;
}

btnmolido3.onclick = function () {
	btntostado0.disabled = false;
	btntostado1.disabled = false;
	btntostado2.disabled = false;
	btntostado3.disabled = false;
}


$(document).ready(function () {
	$("#radio-roast input").on("click", function () {
		alert("hih");
	});
});

$(document).ready(function () {
	$("input").click(function () {
		console.log(this.id);
	});
});

btnradio1g.onclick = function () {
	alert("test");
};

//   $(document).ready(function(){
// 	$("input").click(function(){
// 		console.log(this.id)
// 	  $("p").hide();
// 	});
//   });
