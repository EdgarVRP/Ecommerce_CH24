const navbar = document.getElementById("navbar");
navbar.innerHTML = `<nav class="navbar navbar-expand-md sticky-top">
<div class="container-fluid">
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#pages">
    <span class="navbar-toggler-icon"></span>
  </button>

  <a class="navbar-brand" href="./">
    <img src="assets/img/logo_white.png" alt="Logo" width="36">
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
