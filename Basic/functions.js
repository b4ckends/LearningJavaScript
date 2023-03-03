/* 
function name (parameters) {
    content
    return value
} 
*/

// Declarative

function myFunction() {
    return 3;
}

function greetStudendts(student) {
    console.log(`Hi, welcome ${student}.`)
}

greetStudendts('John');

// Expression

var sum = function(a, b) {
    var result = a + b;
    return result
}

console.log(sum(1, 1));

// Better way to do the operation in a expressive function using return

var operation = function(a, b) {
    return a * b;
}

console.log(operation(1, 2))

// Function inside a expression function 

var runIt = function(a) {
    console.log(a);
    a();
}

runIt(function() {
    var b = " Now";
    console.log("Running" + b);
})