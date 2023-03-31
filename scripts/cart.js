// alert('Cart')

// const { isIndex } = require("mathjs");


// const $btnPay = document.querySelector("#btn-pay");
// const $btnEmpty = document.querySelector("#btn-empty-cart");
// const $btnLogin = document.querySelector("#btn-login");
// const $btnGuest = document.querySelector("#btn-guest");
// const $btnShow = document.querySelector("#btn-show");
const $bottom = document.querySelector("#bottom");
const $message = document.querySelector("#message");
// const $btnPay = document.querySelector("#btn-pay-guest");
// const $btnPayUser = document.querySelector("#btn-pay-user");

// $btnPay.addEventListener("click", payProducts);
// $btnEmpty.addEventListener("click", emptyCard);
// $btnLogin.addEventListener("click", userPay);
// $btnGuest.addEventListener("click", guestPay);
// $btnShow.addEventListener("click", showModal);

$btnPayGuest.onclick = function(){alert("Pagar como invitado")};

$btnPayUser.onclick = function(){
	window.location.href = "./login.html";
};

$btnPayTotal.onclick = function(){
	window.location.href = "https://www.paypal.com/mx/home";
};


function payProducts(){
	alert("payProducts");
}

function emptyCard(){
	alert("emptyCard");
}

function userPay(){
	alert("userPay");
}

function guestPay(){
	alert("guestPay");
}


const arrGrind = ["No", "Bajo", "Medio", "Alto"];
const arrRoast = ["No", "Bajo", "Medio", "Alto"];

let DATA_PRODUCTS = [];
let DATA_CART = [];

getProducts();

function getProducts() {
	fetch("./testing/products.json")
		.then((response) => response.json())
		.then((data) => {
			DATA_PRODUCTS = data;
			localStorage.setItem("DATA_PRODUCTS", JSON.stringify(DATA_PRODUCTS));
			getCart();
		})
		.catch(function (error) {
			console.error("Error al realizar la petición:", error);
		});
}

function getCart() {
	DATA_CART = JSON.parse(localStorage.getItem("DATA_CART"));
	// console.log(DATA_CART);

	if (DATA_CART == null) {
		$message.style.visibility = "visible";
		$bottom.style.visibility = "hidden";
	} else {
		$message.style.visibility = "hidden";
		$bottom.style.visibility = "visible";
		updateCart();
	}
}

function updateCart() {
	//Actaliza la cantidad de productos en el navbar
	updateNavCart();

	//Por default oculta el mensaje de carrito visible y muestra productos
	$message.style.visibility = "hidden";
	$bottom.style.visibility = "visible";

	let $products = document.getElementById("products");
	$products.innerHTML = "";
	let total = 0;

	for (let i = 0; i < DATA_CART.length; i++) {
		let PRODUCT = DATA_PRODUCTS.find((product) => product.id == DATA_CART[i].id);

		const subtotal = PRODUCT.precioTostado * DATA_CART[i].count;
		const grind = arrGrind[DATA_CART[i].grind];
		const roast = arrRoast[DATA_CART[i].roast];

		$products.innerHTML += `<div class="product">
        <div class="row">

          <div id="info" class="col-12 col-md-6">
            <button id="product-delete" class="button" onclick="deleteProduct(${i})"><i class="bi bi-x"></i></button>

            <img id="" class="img-product" src="${PRODUCT.rutaImagen}" alt="">
            <div>
              <p>${PRODUCT.nombre}</p>
              <p>Molido: ${grind}</p>
              <p>Tostado: ${roast}</p>
            </div>
          </div>

          <div id="amount" class="col-4 col-md-3">
            <button class="button" onclick="subCount(${i})" style="width: 36px">-</button>
            <p>${DATA_CART[i].count}</p>
            <button class="button" onclick="addCount(${i})" style="width: 36px">+</button>
          </div>

          <div id="buttons" class="col-8 col-md-3">
            <div class="row">

              <div id="price" class="col-6 col-md-12">
                <p>$${subtotal}</p>
              </div>

              <div id="details" class="col-6 col-md-12">
                <button class="button" data-bs-toggle="modal" data-bs-target="#modal-product"
                  onclick="updateModal(${i})" style="width: 150px;">Detalles</button>
              </div>

            </div>
          </div>

        </div>
      </div>`;
		total += subtotal;
	}

	let totalP = document.getElementById("total");
	totalP.innerHTML = "Total: $" + Number(total).toFixed(2);

	// Si el carrito esta vacio debera aparecer el mensaje y ocultar el total y las opciones de pagar
	console.log(DATA_CART)
	if (DATA_CART.length == 0) {
		$message.style.visibility = "visible";
		$bottom.style.visibility = "hidden";
	} else {
		if (DATA_USER != null && DATA_USER.user != undefined){
			$btnsPay.style.visibility = "hidden";
			$btnPayTotal.style.visibility = "visible";
		}
		else{
			$btnsPay.style.visibility = "visible";
			$btnPayTotal.style.visibility = "hidden";
		}
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
	modal_id = i
	console.log(i)
	let PRODUCT = DATA_PRODUCTS.find((product) => product.id == DATA_CART[i].id);

	console.log(PRODUCT);

	document.getElementById("modal-img").src = PRODUCT.rutaImagen;
	document.getElementById("modal-title").innerHTML = PRODUCT.nombre;
	document.getElementById("modal-count").innerHTML = DATA_CART[i].count;
	// alert(id)
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

btnradio1g.onclick = function(){alert("test")};


//   $(document).ready(function(){
// 	$("input").click(function(){
// 		console.log(this.id)
// 	  $("p").hide();
// 	});
//   });
