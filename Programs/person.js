function createPerson(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.greetPerson = function() {
        console.log(`My name is ${this.name} ${this.lastName} and I have ${age} years`);
    }
    return `My name is ${this.name} ${this.lastName} and I have ${age}`;
}

console.log(createPerson("Sylvester", "Stallone", 76));

var dwayne = new createPerson("Dwayne", "The Rock Johnson", 50);

dwayne.greetPerson();


// My name is Name Lastname and I have Age years