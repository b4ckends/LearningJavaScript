// Declaring
class User {};

// Instance of a class
const newUser = new User();

class user {
    // Methods
    greeting() {
        return 'Hello';
    }
};

const gndx = new user();
console.log(gndx.greeting());
const fruit = new user();
console.log(fruit.greeting());

// Constructor

class otherUser {
    // Constructor
    constructor() {
        console.log('New User');
    }
    greeting() {
        return 'Hello';
    }
}

const animal = new otherUser();

// This

class anotherUser {
    constructor(name) {
        this.name = name;
    }
    // Methods
    speak () {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}

const paper = new anotherUser('Paper');
console.log(paper.greeting());

// Setters getters

class user3 {
    // Constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Methods
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get uAge() {
        return this.age;
    }
    set uAge(n) {
        this.age = n;
    }
}

const cat = new user3('Garfield', 30);
console.log(cat.uAge);