var myCar = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    carDetail: function() {
        console.log(`Auto ${this.model} ${this.year}`);
    }
};

console.log(myCar.carDetail());