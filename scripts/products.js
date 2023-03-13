// alert('Products')// alert('Products')

const container = document.getElementById("products-container");

// Eliminar las cartar internas del container que tiene los productos
container.innerHTML = "";

const nameProduct = "Alex";
const priceProduct = "99";
const notesProduct = "Buena variedad de cafe";
const urlProduct =
  "https://varieties.worldcoffeeresearch.org/content/5-varieties/0-pacamara/pacamara_1.jpg";

  
const json_data = [
    {
        "id": 1,
        "title": "Pacamara ",
        "price": 300.00,
        "description": "Manzana verde, chocolate, pasa, acidez citrica, dulzor miel ",
        "image": "https://varieties.worldcoffeeresearch.org/content/5-varieties/0-pacamara/pacamara_1.jpg"
    },
    {
        "id": 1,
        "title": "Cafe rojo",
        "price": 109.95,
        "description": "El mejor cafe",
        "image": "https://varieties.worldcoffeeresearch.org/content/5-varieties/0-pacamara/pacamara_1.jpg"

    },
    {
        "id": 1,
        "title": "Cafe rojo",
        "price": 109.95,
        "description": "El mejor cafe",
        "image": "https://varieties.worldcoffeeresearch.org/content/5-varieties/0-pacamara/pacamara_1.jpg"

    },
    {
        "id": 1,
        "title": "Cafe rojo",
        "price": 109.95,
        "description": "El mejor cafe",
        "image": "https://varieties.worldcoffeeresearch.org/content/5-varieties/0-pacamara/pacamara_1.jpg"
    },
]



fetch("https://fakestoreapi.com/products")
  .then((api_data) => {
    return api_data.json();
  })
  .then((json_data_dummy) => {

    for (let i = 0; i < parseInt(json_data.length); i++) {
        const productCard = `<div class="col-md-12 col-lg-4 mb-4 mb-lg-0">
          <div class="card productCard">
              <img src="${json_data[i].image}"
              class="card-img-top" alt="ImagenVariedadPacamara" />
              <div class="card-body">
                  <div class="text-center mt-1">
                      <h4 class="card-title">${json_data[i].title}</h4>
                      <h6 class="h6 mb-1 pb-2 lightYellowText">Desde: $${json_data[i].price}</h6>
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
                          <span class="h6 mb-0 lightYellowText">${json_data[i].description}</span>
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
        container.innerHTML += productCard;
      }


    //   for (let i = 0; i < json_data.length; i++) {
    //     add_item(json_data[i]);
    //   }
  });

 


// container.innerHTML += productCard;
// container.innerHTML += productCard;
// container.innerHTML += productCard;
// container.innerHTML += productCard;
// container.innerHTML += productCard;
