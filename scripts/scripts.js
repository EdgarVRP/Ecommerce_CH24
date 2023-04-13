//const SERVER_URL = "http://localhost:8080/";
//const SERVER_URL = "https://ecommercebackend-production-ff9a.up.railway.app/"; esta es con maven
const SERVER_URL = "https://ecommercebackend-production-50a2.up.railway.app/";

// cambiar un variable de color global

// document.documentElement.style.setProperty('--primary', '#ff0000');

document.head.innerHTML += `
<link rel="apple-touch-icon" sizes="180x180" href="assets/icons/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="assets/icons/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="assets/icons/favicon-16x16.png">
<link rel="manifest" href="assets/icons/site.webmanifest">
<link rel="mask-icon" href="assets/icons/safari-pinned-tab.svg" color="#5bbad5">
<meta name="msapplication-TileColor" content="#da532c">
<meta name="theme-color" content="#ffffff">

<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`;

document.body.innerHTML += `<div class="fab-container">
<div class="fab shadow">
  <div class="fab-content">
    <span class="material-icons">settings</span>
  </div>
</div>
<div id="dark-mode" class="sub-button shadow">
  <span class="material-icons">dark_mode</span>
</div>
<div id="light-mode" class="sub-button shadow">
  <span class="material-icons">sunny</span>
</div>
</div>`;

const navbar = document.getElementById("navbar");
navbar.innerHTML = `<nav class="navbar fixed-top navbar-expand-md sticky-top">
<div class="container-fluid">
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#pages" style="background-color:#fff;">
	<span class="navbar-toggler-icon" style="color:#fff;"></span>
  </button>

  <a class="navbar-brand" href="./">
	<img id="logo-navbar" src="assets/img/logo_white.png" alt="Logo" width="36">
	<p>Café Alfonso</p>
  </a>

  <div class="collapse navbar-collapse" id="pages">
	<ul class="navbar-nav ms-auto">
	  <li id="nav-admin" class="nav-item"><a class="nav-link" href="./admin.html">Administrador</a></li>
	  <li class="nav-item"><a class="nav-link" href="./">Inicio</a></li>
	  <li class="nav-item"><a class="nav-link" href="./contact.html">Contactanos</a></li>
	  <li class="nav-item"><a class="nav-link" href="./about.html">Nosotros</a></li>
	  <li class="nav-item"><a class="nav-link" href="./products.html">Productos</a></li>
	  <li class="nav-item"><a id="nav-user" class="nav-link" href="./login.html">Ingresar</a></li>
	</ul>
  </div>
  <div id="nav-cart-container">
	<a id="nav-cart" class="nav-icon" href="./cart.html"><i class="bi bi-cart2"></i></a>
	<p id="nav-cart-count">0</p>
  </div>
</div>
</nav>`;

const footer = document.getElementById("footer");
footer.innerHTML = `<footer class="footer">
<div class="container">
  <div class="footer-text">
	<p>Copyright © 2023 <a href="https://github.com/CoffeeInDevs" target="_blank">CoffeeInDevs</a> Derechos reservados</p>
  </div>

  <div class="footer-logos">
	<!-- Los iconos se puede agregar con etiquetas embed, img, svg pero como fuente es mas flexible -->
	<a href="https://wa.me/5555555555" target="_blank"><i class="icon bi bi-whatsapp"></i></a>
	<a href="https://www.instagram.com/cafe_alfonso_" target="_blank"><i class="icon bi bi-instagram"></i></a>
	<a href="https://www.facebook.com/people/Caf%C3%A9-Alfonso/100070573881417/" target="_blank"><i class="icon bi bi-facebook"></i></a>
  </div>
</div>
</footer>`;

var ligthMode = document.getElementById("light-mode");
ligthMode.onclick = function () {
	document.documentElement.style.setProperty("--primary", "#ececec"); //navbar
	document.documentElement.style.setProperty("--primary2", "#f6f6f6"); //background
	document.documentElement.style.setProperty("--secondary", "#ff0000");
	document.documentElement.style.setProperty("--secondary2", "#121215"); //letra
	document.documentElement.style.setProperty("--white", "#cccccc");
	document.documentElement.style.setProperty("--black", "#cccccc");
	document.getElementById("logo-navbar").src = "assets/img/logo_black.png";
};

var darkMode = document.getElementById("dark-mode");
darkMode.onclick = function () {
	document.documentElement.style.setProperty("--primary", "#2a1e1e");
	document.documentElement.style.setProperty("--primary2", "#412c30");
	document.documentElement.style.setProperty("--secondary", "#EFB817");
	document.documentElement.style.setProperty("--secondary2", "#fff0e5");
	document.documentElement.style.setProperty("--white", "#FFFFFF");
	document.documentElement.style.setProperty("--black", "#000000");
	document.getElementById("logo-navbar").src = "assets/img/logo_white.png";

	localStorage.clear();
	updateNavCart();
	updateNavUser();

};

/********************** USER UPDATE NAVBAR **********************/
updateNavUser();
function updateNavUser() {
	DATA_USER = JSON.parse(localStorage.getItem("DATA_USER"));
	// console.log(DATA_USER);


	if (DATA_USER != null && DATA_USER.nombre != undefined) {
		document.querySelector("#nav-user").innerHTML = DATA_USER.nombre;
		document.querySelector("#nav-user").href = "account.html";
	} else {
		document.querySelector("#nav-user").innerHTML = "Ingresar";
		document.querySelector("#nav-user").href = "login.html";
	}

	if (DATA_USER != null && DATA_USER.es_admin == "YES") {
		document.querySelector("#nav-admin").style.visibility = "visible";
	} else {
		document.querySelector("#nav-admin").style.visibility = "hidden";
	}
}

/********************** UPDATE CART **********************/
updateNavCart();
function updateNavCart() {
	DATA_CART = JSON.parse(localStorage.getItem("DATA_CART"));
	let count = 0;

	if (DATA_CART != null) {
		for (item of DATA_CART) {
			count += item.count;
		}
	}

	const $cart_count = document.getElementById("nav-cart-count");

	if (count == 0) {
		$cart_count.style.visibility = "hidden";
	} else {
		$cart_count.style.visibility = "visible";
		$cart_count.innerHTML = count;
	}
}

/********************** LOAD DATA **********************/
function loadProductsData() {
	fetch("./testing/products.json")
		.then((response) => response.json())
		.then((data) => {
			DATA_PRODUCTS = data;
			localStorage.setItem("DATA_PRODUCTS", JSON.stringify(DATA_PRODUCTS));
		})
		.catch(function (error) {
			console.error("Error al realizar la petición:", error);
		});
}

function loadCartData() {
	fetch("./testing/cart.json")
		.then((response) => response.json())
		.then((data) => {
			DATA_CART = data;
			localStorage.setItem("DATA_CART", JSON.stringify(DATA_CART));
		})
		.catch(function (error) {
			console.error("Error al realizar la petición:", error);
		});
}

function loadUserData() {
	fetch("./testing/user.json")
		.then((response) => response.json())
		.then((data) => {
			DATA_USER = data;
			localStorage.setItem("DATA_USER", JSON.stringify(DATA_USER));
		})
		.catch(function (error) {
			console.error("Error al realizar la petición:", error);
		});
}
