
var yourCart = document.getElementById("cart")
var priceBtn = document.querySelectorAll(".btn1")
var totalBtn = document.getElementById("btn")
var totalPrice = document.querySelector("#total")
var price = 0


priceBtn.forEach(function(item){
    item.onclick = function(){

        price +=  +(item.getAttribute("price"))
        var productName = item.getAttribute("name")
        yourCart.style.visibility="visible"
        yourCart.innerHTML += productName + " + "
        console.log(price)
    }
})
function show (){
    totalPrice.innerHTML +=  price
    alert("total is" + price)

}
totalBtn.onclick = show



    



// Get references to the necessary elements
// var yourCart = document.getElementById("cart");
// var priceBtn = document.querySelectorAll(".btn1");
// var totalBtn = document.querySelector("#btnn");
// var totalPrice = document.querySelector("#total");
// var price = 0;

// priceBtn.forEach(function(item) {
//     item.onclick = function() {
//         var itemPrice = parseFloat(item.getAttribute("price"));
//         var productName = item.getAttribute("name");

//         price += itemPrice;

//         yourCart.style.visibility = "visible";
//         yourCart.innerHTML += productName + " - $" + itemPrice + "<br>";

//         console.log(price);
//     };
// });

// totalBtn.onclick = function() {
//     totalPrice.innerHTML = "Total: $" + price.toFixed(2);
// };
