const makingOrder = (orden) => {
    console.log(`Ready ${orden}`);
}

const order = (orden, callback) => {
    console.log(`Taking order ${orden}`);
        setTimeout(() => {
            callback(orden)
        }, 3000)
        console.log(`Doing order ${orden}`)
}

order('Burguer', makingOrder);