//products-container es el div en el HTML donde se crean las tarjetas de los productos
const container = document.getElementById("products-container");

// Eliminar las cartas internas del container que tiene los productos
container.innerHTML = "";

let DATA_PRODUCTS = [];
let DATA_CART = [];

getProducts();

function getProducts() {
	fetch("./testing/products.json")
		.then((response) => response.json())
		.then((data) => {
			DATA_PRODUCTS = data;
			localStorage.setItem("DATA_PRODUCTS", JSON.stringify(DATA_PRODUCTS));
			showProducts();
		})
		.catch(function (error) {
			console.error("Error al realizar la petición:", error);
		});
}

function addProduct(id) {
    // localStorage.setItem("DATA_CART", JSON.stringify(DATA_CART));
    DATA_CART = JSON.parse(localStorage.getItem("DATA_CART"));
    // console.log(DATA_CART);

    if (DATA_CART == null){
        DATA_CART = []
    }

    // Producto a agregar con caracteristicas default
	let product = {
		id: id,
		grind: 0,
		roast: 0,
		count: 1,
	};
	DATA_CART.push(product);

	// Guardar informacion en localStorage
	localStorage.setItem("DATA_CART", JSON.stringify(DATA_CART));

	// Actualizar el contador del carrito
	updateNavCart();
}


function showProducts() {
	for (let i = 0; i < DATA_PRODUCTS.length; i++) {
        
		const productCard = `<div class="col-md-12 col-lg-4 mb-4 mb-lg-0">
          <div class="card productCard">
              <img src="${DATA_PRODUCTS[i].rutaImagen}"
              class="card-img-top" alt="" />
              <div class="card-body">
                  <div class="text-center mt-1">
                      <h4 class="card-title">${DATA_PRODUCTS[i].region}</h4>
                      <h6 class="h6 mb-1 pb-2 lightYellowText">Desde: $${DATA_PRODUCTS[i].precioTostado}</h6>
                  </div>
      
                  <div class="d-flex flex-row">
                    <button type="button" class="btn btn-primary flex-fill me-1 btnVerMas" onclick="updateModal(${i})" data-mdb-ripple-color="dark" data-bs-toggle="modal" data-bs-target="#modal-product" style="width: 150px;">Ver más</button>
                    <button type="button" class="btn btn-danger flex-fill ms-1 btnBuyNow" onclick="addProduct(${DATA_PRODUCTS[i].id})">Comprar ahora</button>
                  </div>
              </div>
          </div>
          </div>`;
		container.innerHTML += productCard;
	}
}

/* 
<button type="button" class="btn btn-primary flex-fill me-1 btnVerMas" data-mdb-ripple-color="dark" data-bs-toggle="modal" data-bs-target="#modal-product" style="width: 150px;" onclick"updateModal()">Detalles</button>
 */

function updateModal(i) {
	//document.getElementById("modal-img").src = PRODUCT.rutaImagen;
	
    //Modidica el titulo del Modal (Ver más)
    document.getElementById("modal-title").innerHTML = DATA_PRODUCTS[i].nombre;
    
    //Traer el div del modal para el body
    const modalDivBody = document.getElementById("row-modal-body");
    const modalDivBodyInfo = `
            <div class="text-center mt-1">
                <h4 class="card-title">${DATA_PRODUCTS[i].nombre}</h4>
                <h6 class="h6 mb-1 pb-2 lightYellowText">Desde: $${DATA_PRODUCTS[i].nombre}</h6>
            </div>
    
            <div class="text-center">
                <div class="p-3 mx-n3 mb-2" style="background-color: #2e151a; border-radius: 15px;">
                    <h5 class="h4 mb-0 lightYellowText">Vistazo</h5>
                </div>
    
                <div class="d-flex flex-column mb-3">
                    <span class="h5 mb-0 lightYellowText">Región: </span>
                    <span class="h6 mb-0 lightYellowText">${DATA_PRODUCTS[i].nombre}</span>
                </div>
                
                <div class="d-flex flex-column mb-3">
                    <span class="h5 mb-0 lightYellowText">Altura: </span>
                    <span class="h6 mb-0 lightYellowText">${DATA_PRODUCTS[i].nombre}</span>
                </div>
    
                <div class="d-flex flex-column mb-3">
                    <span class="h5 mb-0 lightYellowText">Humedad: </span>
                    <span class="h6 mb-0 lightYellowText">${DATA_PRODUCTS[i].nombre}</span>
                </div>
                                            
                <div class="p-3 mx-n3 mb-4" style="background-color: #2e151a; border-radius: 15px;">
                    <h5 class="h5 mb-0 lightYellowText">Notas: </h5>
                    <span class="h6 mb-0 lightYellowText">${DATA_PRODUCTS[i].nombre}</span>
                </div>
                
            </div>`;
    
    modalDivBody.innerHTML += modalDivBodyInfo;
    
    //console.log("hola");
	//document.getElementById("modal-count").innerHTML = DATA_CART[i].count;
	// alert(id)
}




  
/* <button type="button" class="btn btn-primary flex-fill me-1 btnVerMas" data-mdb-ripple-color="dark" data-toggle="modal" data-target="#products-container" onclick="modalVerMas">
                      Ver más
                      </button> */

/*
`<div class="col-md-12 col-lg-4 mb-4 mb-lg-0">
          <div class="card productCard">
              <img src="${products[i].rutaImagen}"
              class="card-img-top" alt="ImagenVariedadPacamara" />
              <div class="card-body">
                  <div class="text-center mt-1">
                      <h4 class="card-title">${products[i].region}</h4>
                      <h6 class="h6 mb-1 pb-2 lightYellowText">Desde: $${products[i].precioTostado}</h6>
                  </div>
      
                  <div class="text-center">
                      <div class="p-3 mx-n3 mb-2" style="background-color: #2e151a; border-radius: 15px;">
                          <h5 class="h4 mb-0 lightYellowText">Vistazo</h5>
                      </div>
      
                      <div class="d-flex flex-column mb-3">
                          <span class="h5 mb-0 lightYellowText">Región: </span>
                          <span class="h6 mb-0 lightYellowText">Corzo Zona Frailesca, Chiapas</span>
                      </div>
                      
                      <div class="d-flex flex-column mb-3">
                          <span class="h5 mb-0 lightYellowText">Altura: </span>
                          <span class="h6 mb-0 lightYellowText">1300 - 1500 MSNM</span>
                      </div>
      
                      <div class="d-flex flex-column mb-3">
                          <span class="h5 mb-0 lightYellowText">Humedad: </span>
                          <span class="h6 mb-0 lightYellowText">11 %</span>
                      </div>
                                                  
                      <div class="p-3 mx-n3 mb-4" style="background-color: #2e151a; border-radius: 15px;">
                          <h5 class="h5 mb-0 lightYellowText">Notas: </h5>
                          <span class="h6 mb-0 lightYellowText">${products[i].nota}</span>
                      </div>
                      
                  </div>
      
                  <div class="d-flex flex-row">
                      <button type="button" class="btn btn-primary flex-fill me-1 btnVerMas" data-mdb-ripple-color="dark">
                      Ver más
                      </button>
                      <button type="button" class="btn btn-danger flex-fill ms-1 btnBuyNow">Comprar ahora</button>
                  </div>
              </div>
          </div>
          </div>`;
*/
