// arrays destructuring

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(fruits[0, 1]);

// Object destructuring

let user = { username: 'Jeff', age: 59 };
let { username, age } = user;
console.log(username, user.age);