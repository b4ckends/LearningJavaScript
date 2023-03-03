var fruits = ["Apple", "Banana", "Strawberry", "Cherry"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[2]);

// Adding
var moreFruit = fruits.push("Grape");
console.log(fruits);

// Removing
var lessFruit = fruits.pop("Grape");
console.log(fruits);

// Unshift
var replaceFruit = fruits.unshift("Grape");
console.log(fruits);

// shift
var deleteFruit = fruits.shift("Grape");
console.log(fruits);

// position
var position = fruits.indexOf("Cherry");
console.log(position)