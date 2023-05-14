function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['One', 'Two', 'Three', 'Four', 'Five']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

for (const element of it) {
    console.log(element);
}