import { Car } from './car.js';  // named import
import House from './house.js';  // default import

///// Set up new instances of objects /////
var myCar = new Car("benz", 1000);
myCar.addPrice(50).addPrice(10);
console.log("My car's price is", myCar);

var myHouse = new House("Taipei", 500000);
console.log("My house is in", myHouse.city);
console.log("I migrated to", myHouse.migrate("Posong").city);


///// Add objects to DOM /////
var app = document.querySelector("#app");
var car_node = document.createElement("p");
var house_node = document.createElement("p");
car_node.id = "my-car";
house_node.id = "my-house";
app.appendChild(car_node);
app.appendChild(house_node);

car_node.innerText = `My car's price: ${myCar.price}`;
house_node.innerText = `My house is in ${myHouse.city}`;


///// Hook interactive functions on the DOM /////
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector("button#add-price").onclick = function() {
        const price = document.getElementById("price");
        myCar.addPrice(parseInt(price.value));
        car_node.innerText = `My car's price: ${myCar.price}`;  // Update DOM
    };

    document.querySelector("button#migrate").onclick = function() {
        const city = document.getElementById("city");
        myHouse.migrate(city.value);
        house_node.innerText = `My house is in ${myHouse.city}`; // Update DOM
    }
});
