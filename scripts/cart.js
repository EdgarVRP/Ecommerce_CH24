// alert('Cart')

// const component = document.getElementsByClassName("container")[0].innerHTML

// document.getElementsByClassName("container")[0].innerHTML += component;
// document.getElementsByClassName("container")[0].innerHTML += component;
// document.getElementsByClassName("container")[0].innerHTML += component;

let json_products = [
	{
		id: 0,
		name: "Cafe Azul",
		price: 250.0,
		description: "Manzana verde, chocolate, pasa, acidez citrica, dulzor miel ",
	},
	{
		id: 1,
		name: "Cafe Verde",
		price: 150.0,
		description: "El mejor cafe",
	},
	{
		id: 2,
		name: "Cafe Naranja",
		price: 80.5,
		description: "El mejor cafe",
	},
	{
		id: 3,
		name: "Cafe Rojo",
		price: 120.5,
		description: "El mejor cafe",
	},
];

const arrGrind = ["No", "Bajo", "Medio", "Alto"];
const arrRoast = ["No", "Bajo", "Medio", "Alto"];

let json_cart = [
	{
		id: 1,
		grind: 0,
		roast: 0,
		count: 1,
	},
	{
		id: 2,
		grind: 0,
		roast: 0,
		count: 2,
	},
    {
		id: 2,
		grind: 2,
		roast: 0,
		count: 2,
	},
    {
		id: 1,
		grind: 0,
		roast: 1,
		count: 4,
	},
];

update();

function update() {
	let products = document.getElementById("products");
	products.innerHTML = "";
    let total = 0;

	for (let i = 0; i < json_cart.length; i++) {
		const id = json_cart[i].id;
        const subtotal = json_products[id].price * json_cart[i].count;
        const grind = arrGrind[json_cart[i].grind]
        const roast = arrRoast[json_cart[i].roast]
		products.innerHTML += `<div class="product">
    <div class="row">

    <div id="info" class="col-12 col-md-6">
        <img id="" class="img-product" src="assets/img/128x128.png" alt="">
        <div>
        <p>${json_products[id].name}</p>
        <p>Molido: ${grind}</p>
        <p>Tostado: ${roast}</p>
        </div>
    </div>

    <div id="amount" class="col-4 col-md-3">
        <button class="button" onclick="plus(${i})" style="width: 36px">+</button>
        <p>${json_cart[i].count}</p>
        <button class="button" onclick="minus(${i})" style="width: 36px">-</button>
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

function plus(id) {
	json_cart[id].count = json_cart[id].count + 1;
	update();
}

function minus(id) {
    if (json_cart[id].count == 1){
        return;
    }
	json_cart[id].count = json_cart[id].count - 1;
	update();
}

function updateModal(num){
	const id = json_cart[num].id;
	const name = json_products[id].name

	const count = json_cart[num].count

	console.log(document.getElementById("btnradio1"))

	document.getElementById("modal-title").innerHTML = name
	document.getElementById("modal-count").innerHTML = count
	// alert(id)
}

$(document).ready(function(){

$("#radio-roast input").on("click", function() {
	alert("hih");
  });
});


  $(document).ready(function(){
	$("input").click(function(){
		console.log(this.id)
	//   $("p").hide();
	});
  });

//   $(document).ready(function(){
// 	$("input").click(function(){
// 		console.log(this.id)
// 	  $("p").hide();
// 	});
//   });