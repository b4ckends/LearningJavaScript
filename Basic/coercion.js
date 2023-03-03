// In other languajes this will show an error but in javascript the boolean will be a number
console.log(25 + true);

// In multiplication its the same thing
console.log(123456789 * true);

// With false, false its 0 
console.log(50 * false);

// By default the first priority its concatenate things to a strings like this example:
console.log(50 + "1")

// Most javascript values convert to the boolean true: Example of Truthiness
i = 10
if (i) {
    console.log("It is true");
}

// Most of values of javascript convert to true. Another example:
e = "string"

if (e) {
    console.log("It is trueee")
}

var g;
g = 5

if (typeof g === "undefined") {
    g = 10;
}

console.log(g)

// It is just a matter of understanding and remembering which values are considered falsey or truthy
//                              Seven falsey values that convert to false
//          false 
//          0 
//         -0 
//          ""
//          NaN
//          null
//          undefined

// Obligate a number to convert a string
var c = 1 + 5;
var c = String(c);

console.log(c);
console.log(typeof(c))

// To a number
var j = 19 + "1";
var j = Number(j);

console.log(j);
console.log(typeof(j));