// arrays destructuring

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(fruits[0, 1]);

// Object destructuring

let user = { username: 'Jeff', age: 59 };
let { username, age } = user;
console.log(username, user.age);

// spread operator

let pet = { name: 'Cat', age: 11 };
let country = 'MX';

let data = { id: 1, ...pet, country };
console.log(data);

// rest

function plus(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
};

plus(1, 1, 2, 3);

const s = (a, b) => {
    return a + b;
}

let number = s(5435252435, 9999952452535);
console.log(number);