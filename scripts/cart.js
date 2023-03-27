// alert('Cart')

// const component = document.getElementsByClassName("container")[0].innerHTML

// document.getElementsByClassName("container")[0].innerHTML += component;
// document.getElementsByClassName("container")[0].innerHTML += component;
// document.getElementsByClassName("container")[0].innerHTML += component;
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
		//Carrito vacio mostrar mensaje
	} else {
		updateCart();
	}
}

function updateCart() {
	updateNavCart();
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
            <button class="button" data-bs-toggle="modal" data-bs-target="#modal-product" onclick="updateModal(${i})" style="width: 150px;">Detalles</button>
        </div>

        </div>
    </div>

    </div>
    </div>`;
		total += subtotal;
	}

	let totalP = document.getElementById("total");
	totalP.innerHTML = "Total: $" + Number(total).toFixed(2);
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

function updateModal(i) {
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
		//   $("p").hide();
	});
});

//   $(document).ready(function(){
// 	$("input").click(function(){
// 		console.log(this.id)
// 	  $("p").hide();
// 	});
//   });
