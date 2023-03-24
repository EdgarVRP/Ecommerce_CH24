//Pagina de administrador de productos a vender
let tabla = document.getElementById("tablaProductos");

if (localStorage.getItem("productos") === null) {
  //Realizando peticion get al archivo data.json si no hay datos en local storage
  var productos = [];
  fetch("./testing/Productos.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      productos = data;
      console.log(productos);
    })
    .catch(function (error) {
      console.error("Error al realizar la petición:", error);
    });
} else {
  //Obteniendo datos de local storage
  productos = JSON.parse(localStorage.getItem("productos"));
}
//Estableciendo el id de usuario en localstorage
localStorage.setItem("id", 1);
//Obteniedno id de usuario por localstorage
let id = localStorage.getItem("id");
//timmer de .5 segundos para que se ejecute la peticion get
let productosLocalStorage = [];
setTimeout(function () {
  //Vaciando datos de JSON a local storage
  //console.log(productos);
  localStorage.setItem("productos", JSON.stringify(productos));
  //Obteniendo datos de local storage
  productosLocalStorage = JSON.parse(localStorage.getItem("productos"));
  //console.log(productosLocalStorage);
  // Agregar cada producto a la tabla.
  productosLocalStorage.forEach(function (producto) {
    //añadiendo fila
    let fila = tabla.insertRow();
    fila.setAttribute("id", producto.id);
    fila.insertCell(0).innerHTML = producto.nombre;
    //imagen
    let imagen = document.createElement("img");
    imagen.setAttribute("src", producto.rutaImagen);
    imagen.setAttribute("width", "100px");
    imagen.setAttribute("height", "100px");
    fila.insertCell(1).appendChild(imagen);
    fila.insertCell(2).innerHTML = producto.region;
    //region	Cosecha	Altura	Humedad	Proceso	Preparación	Variedad	Nota	Precio tostado	Editar	Eliminar
    fila.insertCell(3).innerHTML = producto.cosecha;
    fila.insertCell(4).innerHTML = producto.altura;
    fila.insertCell(5).innerHTML = producto.humedad;
    fila.insertCell(6).innerHTML = producto.proceso;
    fila.insertCell(7).innerHTML = producto.preparacion;
    fila.insertCell(8).innerHTML = producto.variedad;
    fila.insertCell(9).innerHTML = producto.nota;
    fila.insertCell(10).innerHTML = producto.precioTostado;
    //botones
    let btnEditar = document.createElement("button");
    btnEditar.setAttribute("class", "btnEditarProducto");
    btnEditar.setAttribute("type", "button");
    btnEditar.setAttribute("data-toggle", "modal");
    btnEditar.setAttribute("data-target", "#modalEditarProducto");
    btnEditar.innerHTML = "Editar";
    fila.insertCell(11).appendChild(btnEditar);
    let btnEliminar = document.createElement("button");
    btnEliminar.setAttribute("class", "btnEliminarProducto");
    btnEliminar.setAttribute("type", "button");
    btnEliminar.innerHTML = "Eliminar";
    fila.insertCell(12).appendChild(btnEliminar);
  });
}, 500);

/*
//evento para editar producto
on(document, "click", ".btnEditarProducto", (e) => {
  console.log("Se presiono el boton editar");
  //obteniendo el id de la fila
  let idProducto = e.target.parentNode.parentNode.id;
  //console.log(idProducto);
  //Vaciando datos de la tabla en el modal
  //elemento abuelo de la celda
  let nombreProducto = e.target.parentNode.parentNode.childNodes[0].innerHTML;
  let descripcionProducto = e.target.parentNode.parentNode.childNodes[2].innerHTML;
  let precioProducto = e.target.parentNode.parentNode.childNodes[3].innerHTML;
  let CategoriaProducto = e.target.parentNode.parentNode.childNodes[4].innerHTML;
  let lugarVentaProducto = e.target.parentNode.parentNode.childNodes[5].innerHTML;
  document.getElementById("editarNombreProducto").value = nombreProducto;
  document.getElementById("editarDescripcionProducto").value = descripcionProducto;
  document.getElementById("editarPrecioProducto").value = precioProducto;
  document.getElementById("editarCategoriaProducto").value = CategoriaProducto;
  document.getElementById("editarLugarVentaProducto").value = lugarVentaProducto;

});

//evento para añadir producto
const btnCrearProducto = document.getElementById("btnCrearProducto");
on(document, "click", "#btnCrearProducto", (e) => {
  //e.preventDefault();
  console.log("Se presiono el boton crear producto");
  //obteniendo el id de la fila
  let nombreProducto = document.getElementById("nombreProducto").value;
  let descripcionProducto = document.getElementById("descripcionProducto").value;
  let precioProducto = document.getElementById("precioProducto").value;
  let CategoriaProducto = document.getElementById("CategoriaProducto").value;
  let lugarVentaProducto = document.getElementById("lugarVentaProducto").value;
  let imagenProducto = document.getElementById("imagenProducto").value;
  //Guardando imagen en el local storage
  console.log(nombreProducto);
  console.log(descripcionProducto);
  console.log(precioProducto);
  console.log(CategoriaProducto);
  console.log(lugarVentaProducto);
  console.log(imagenProducto);
  //añadiendo producto al local storage
  let producto = {
    idProducto: 0,
    nombre: nombreProducto,
    descripcion: descripcionProducto,
    precio: precioProducto,
    categoria: CategoriaProducto,
    lugarVenta: lugarVentaProducto,
    rutaImagen: imagenProducto,
    ventasCompletas: 0,
    compradores: [],
    venta: []
  };
  console.log(producto);
  productosLocalStorage.push(producto);
  console.log(productosLocalStorage);
  localStorage.setItem("productos", JSON.stringify(productosLocalStorage));
});

*/
