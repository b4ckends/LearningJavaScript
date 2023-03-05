// Camel Notation oneTwoThreeFour
// Pascal Notation OneTwoThreeFour

function car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.specifications = function() {
        console.log(`Brand: ${this.brand}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
    }
}

var newCar = new car("Tesla", "S", 2023);
var newCar2 = new car("Tesla", "X", 2018);
var newCar3 = new car("Toyota", "Corolla", 2020);

var listCars = [];

listCars.push(newCar);
listCars.push(newCar2);
listCars.push(newCar3);

for (var i = 0; i < listCars.length; i++) {
    listCars[i].specifications();
    console.log("\n");
} 