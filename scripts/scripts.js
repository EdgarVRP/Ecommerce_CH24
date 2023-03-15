// cambiar un variable de color global

// document.documentElement.style.setProperty('--primary', '#ff0000');

document.head.innerHTML += `<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`;

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
navbar.innerHTML = `<nav class="navbar navbar-expand-md sticky-top">
<div class="container-fluid">
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#pages">
    <span class="navbar-toggler-icon"></span>
  </button>

  <a class="navbar-brand" href="./">
    <img id="logo-navbar" src="assets/img/logo_white.png" alt="Logo" width="36">
    <p>Cafe Alfonso</p>
  </a>

  <div class="collapse navbar-collapse" id="pages">
    <ul class="navbar-nav ms-auto">
      <li class="nav-item"><a class="nav-link" href="./">Inicio</a></li>
      <li class="nav-item"><a class="nav-link" href="./contact.html">Contactanos</a></li>
      <li class="nav-item"><a class="nav-link" href="./about.html">Nosotros</a></li>
      <li class="nav-item"><a class="nav-link" href="./products.html">Productos</a></li>
      <li class="nav-item"><a class="nav-link" href="./signin.html">Blog</a></li>
      <li class="nav-item"><a class="nav-link" href="./login.html">Ingresar</a></li>
    </ul>
  </div>
  <a class="nav-icon" href="./"><i class="bi bi-cart2"></i></a>
</div>
</nav>`;

const footer = document.getElementById("footer");
footer.innerHTML = `<footer class="footer">
<div class="container">
  <div class="footer-text">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, soluta.</p>
  </div>

  <div class="footer-logos">
    <!-- Los iconos se puede agregar con etiquetas embed, img, svg pero como fuente es mas flexible -->
    <a href="./"><i class="icon bi bi-whatsapp"></i></a>
    <a href="./"><i class="icon bi bi-instagram"></i></a>
    <a href="./"><i class="icon bi bi-facebook"></i></a>
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

};
