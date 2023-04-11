//Pagina de administrador de productos a vender
let tabla = document.getElementById("tablaProductos");

//Realizando peticion get al archivo data.json si no hay datos en local storage
var productos = [];
fetch("http://localhost:8080/productos")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    productos = data;
    mostrarProductos();
  })
  .catch(function (error) {
    console.error("Error al realizar la petición:", error);
  });
//MOSTRAR PRODUCTOS
function mostrarProductos() {
  // Agregar cada producto a la tabla.
  productos.forEach(function (producto) {
    //añadiendo fila
    let fila = tabla.insertRow();
    fila.setAttribute("id", producto.id);
    fila.insertCell(0).innerHTML = producto.nombre;
    //imagen
    let imagen = document.createElement("img");
    imagen.setAttribute("src", producto.rutaimagen);
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
    fila.insertCell(10).innerHTML = producto.puntuacion;
    fila.insertCell(11).innerHTML = producto.precio;
    fila.insertCell(12).innerHTML = producto.inventario;
    //botones
    let btnEditar = document.createElement("button");
    btnEditar.setAttribute("class", "btn btn-warning btnEditarProducto");
    btnEditar.setAttribute("type", "button");
    btnEditar.setAttribute("data-bs-toggle", "modal");
    btnEditar.setAttribute("data-bs-target", "#modalEditarProducto");
    btnEditar.innerHTML = "Editar";
    fila.insertCell(13).appendChild(btnEditar);
    let btnEliminar = document.createElement("button");
    btnEliminar.setAttribute("class", "btn btn-danger btnEliminarProducto");
    btnEliminar.setAttribute("type", "button");
    btnEliminar.innerHTML = "Eliminar";
    fila.insertCell(14).appendChild(btnEliminar);
  });
}

//add even listener
const on = (element, event, selector, handler) => {
  element.addEventListener(event, (e) => {
    if (e.target.closest(selector)) {
      handler(e);
    }
  });
};

//Modal editar producto
on(document, "click", ".btnEditarProducto", (e) => {
  console.log("Se presiono el boton editar");
  //obteniendo datos de la tabla
  document.getElementById("idProducto").value =
    e.target.parentNode.parentNode.id;
  console.log(e.target.parentNode.parentNode.id);
  document.getElementById("editnombreProducto").value =
    e.target.parentNode.parentNode.childNodes[0].innerHTML;
  document.getElementById("editregionProducto").value =
    e.target.parentNode.parentNode.childNodes[2].innerHTML;
  document.getElementById("editcosechaProducto").value =
    e.target.parentNode.parentNode.childNodes[3].innerHTML;
  document.getElementById("editalturaProducto").value =
    e.target.parentNode.parentNode.childNodes[4].innerHTML;
  document.getElementById("edithumedadProducto").value =
    e.target.parentNode.parentNode.childNodes[5].innerHTML;
  document.getElementById("editprocesoProducto").value =
    e.target.parentNode.parentNode.childNodes[6].innerHTML;
  document.getElementById("editpreparacionProducto").value =
    e.target.parentNode.parentNode.childNodes[7].innerHTML;
  document.getElementById("editvariedadProducto").value =
    e.target.parentNode.parentNode.childNodes[8].innerHTML;
  document.getElementById("editnotaProducto").value =
    e.target.parentNode.parentNode.childNodes[9].innerHTML;
  document.getElementById("editpuntuacionProducto").value =
    e.target.parentNode.parentNode.childNodes[10].innerHTML;
  document.getElementById("editprecioProducto").value =
    e.target.parentNode.parentNode.childNodes[11].innerHTML;
  document.getElementById("editinventarioProducto").value =
    e.target.parentNode.parentNode.childNodes[12].innerHTML;
});

//EDITAR PRODUCTO

//Boton Modal editar producto
on(document, "click", "#btnModificarProducto", (e) => {
  //Obteniendo id de la fila seleccionada
  let id = document.getElementById("idProducto").value;
  console.log(id);
  //obteniendo datos del modal
  let nombreProducto = document.getElementById("editnombreProducto").value;
  let regionProducto = document.getElementById("editregionProducto").value;
  let cosechaProducto = document.getElementById("editcosechaProducto").value;
  let alturaProducto = document.getElementById("editalturaProducto").value;
  let humedadProducto = document.getElementById("edithumedadProducto").value;
  let procesoProducto = document.getElementById("editprocesoProducto").value;
  let preparacionProducto = document.getElementById(
    "editpreparacionProducto"
  ).value;
  let variedadProducto = document.getElementById("editvariedadProducto").value;
  let notaProducto = document.getElementById("editnotaProducto").value;
  let puntuacionProducto = document.getElementById(
    "editpuntuacionProducto"
  ).value;
  let precioProducto = document.getElementById("editprecioProducto").value;
  let inventarioProducto = document.getElementById(
    "editinventarioProducto"
  ).value;
  //buscando el producto a editar
  let producto = {
    nombre: nombreProducto,
    region: regionProducto,
    cosecha: cosechaProducto,
    altura: alturaProducto,
    humedad: humedadProducto,
    proceso: procesoProducto,
    preparacion: preparacionProducto,
    variedad: variedadProducto,
    nota: notaProducto,
    puntuacion: puntuacionProducto,
    precio: precioProducto,
    inventario: inventarioProducto,
  };
  // actualizando producto
  console.log(producto);
  // console.log(JSON.stringify(producto));
  // Convertir objeto JSON a cadena
  const payload = JSON.stringify(producto);
  //`http://localhost:8080/productos/${id}`
  // Crear URL con query params
const url = new URL(`http://localhost:8080/productos/${id}`);
url.searchParams.set('nombre', producto.nombre);
url.searchParams.set('region', producto.region);
url.searchParams.set('cosecha', producto.cosecha);
url.searchParams.set('altura', producto.altura);
url.searchParams.set('humedad', producto.humedad);
url.searchParams.set('proceso', producto.proceso);
url.searchParams.set('preparacion', producto.preparacion);
url.searchParams.set('variedad', producto.variedad);
url.searchParams.set('nota', producto.nota);
url.searchParams.set('puntuacion', producto.puntuacion);
url.searchParams.set('precio', producto.precio);
url.searchParams.set('inventario', producto.inventario);
console.log(url);
// Realizar solicitud PUT utilizando fetch
fetch(url, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: payload
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Error al enviar la solicitud');
    }
    // Hacer algo con la respuesta exitosa, si es necesario
  })
  .catch(error => {
    // Hacer algo con el error
    console.error(error);
  });
});

//ELIMINAR PRODUCTO
//Boton eliminar producto
on(document, "click", ".btnEliminarProducto", (e) => {
  //obteniendo id de la fila seleccionada
  let idProducto = e.target.parentNode.parentNode.id;
  console.log(idProducto);
  //eliminando producto
  fetch(`http://localhost:8080/productos/${idProducto}`, {
    //hago la conexion a la URL
    method: "DELETE",
  })
    .then((response) => response.text())
    .then((producto) => {
      console.log(producto);
      console.log("Producto eliminado correctamente", producto);
    })
    .catch((error) => {
      console.log("No pudimos eliminar el producto", error);
    });
  //eliminando fila
  e.target.parentNode.parentNode.remove();
});

//CREAR PRODUCTO
//Boton crear producto
on(document, "click", "#btnCrearProducto", (e) => {
  //e.preventDefault();
  //Se comprueba que esten llenos los campos
  if (
    document.getElementById("nombreProducto").value == "" ||
    document.getElementById("regionProducto").value == "" ||
    document.getElementById("cosechaProducto").value == "" ||
    document.getElementById("alturaProducto").value == "" ||
    document.getElementById("humedadProducto").value == "" ||
    document.getElementById("procesoProducto").value == "" ||
    document.getElementById("preparacionProducto").value == "" ||
    document.getElementById("variedadProducto").value == "" ||
    document.getElementById("notaProducto").value == ""
  ) {
    alert("Por favor llene todos los campos");
  } else if (
    // detectando si el campo precioProducto es un numero
    isNaN(document.getElementById("precioProducto").value)
  ) {
    e.preventDefault();
    alert("Por favor ingrese un numero en el campo precio");
  } else {
    //obteniendo datos del modal
    let nombreProducto = document.getElementById("nombreProducto").value;
    let regionProducto = document.getElementById("regionProducto").value;
    let cosechaProducto = document.getElementById("cosechaProducto").value;
    let alturaProducto = document.getElementById("alturaProducto").value;
    let humedadProducto = document.getElementById("humedadProducto").value;
    let procesoProducto = document.getElementById("procesoProducto").value;
    let preparacionProducto = document.getElementById(
      "preparacionProducto"
    ).value;
    let variedadProducto = document.getElementById("variedadProducto").value;
    let notaProducto = document.getElementById("notaProducto").value;
    let puntuacionProducto =
      document.getElementById("puntuacionProducto").value;
    let precioProducto = document.getElementById("precioProducto").value;
    let inventarioProducto =
      document.getElementById("inventarioProducto").value;
    //creando producto
    let producto = {
      nombre: nombreProducto,
      region: regionProducto,
      cosecha: cosechaProducto,
      altura: alturaProducto,
      humedad: humedadProducto,
      proceso: procesoProducto,
      preparacion: preparacionProducto,
      variedad: variedadProducto,
      nota: notaProducto,
      puntuacion: puntuacionProducto,
      precio: precioProducto,
      inventario: inventarioProducto,
    };
    //console.log(producto);
    //Fetch a la URL de mi API (el RequestMapping del Controller)

    fetch("http://localhost:8080/productos", {
      //hago la conexion a la URL

      //Especifico el tipo de solicitud que manejare
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto), //Pasamos la constante definida anteriormente como cuerpo de la solicitud
    })
      .then((response) => response.text())
      .then((producto) => {
        console.log("Producto guardado correctamente", producto);
      })
      .catch((error) => {
        console.log("No pudimos guardar el producto", error);
      });
  }
});
