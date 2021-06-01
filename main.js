import { Car } from './car.js';  // named import
import House from './house.js';  // default import

var benz = new Car("benz", 1000);
benz.addPrice(50).addPrice(10);
console.log("Benz's price is", benz);

var myHouse = new House("Taipei", 500000);
console.log("My house is in", myHouse.city);
console.log("I migrated to", myHouse.migrate("Posong").city);


// Add to DOM
var body = document.querySelector("body");
var benz_node = document.createElement("p");
var house_node = document.createElement("p");
benz_node.id = "my-car";
house_node.id = "my-house";
body.appendChild(benz_node);
body.appendChild(house_node);

benz_node.innerText = `Benz's price: ${benz.price}`;
house_node.innerText = `My house is in ${myHouse.city}`;

// Hook functions on DOM
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector("button#add-price").onclick = function() {
        const price = document.getElementById("price");
        benz.addPrice(parseInt(price.value));
        price.value = 0;
        // Update DOM
        benz_node.innerText = `Benz's price: ${benz.price}`; 
    };

    document.querySelector("button#migrate").onclick = function() {
        const city = document.getElementById("city");
        myHouse.migrate(city.value);
        city.value = "";
        // Update DOM
        house_node.innerText = `My house is in ${myHouse.city}`;
    }
});
