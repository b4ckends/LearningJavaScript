const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalculate');
const pResult = document.querySelector('#result');
const form = document.querySelector('#form');

btn.addEventListener('click', addInputValues);

function addInputValues(event) {
    // console.log({event});
    // event.preventDefault();
    const addResult = calculation1.value + calculation2.value;
    pResult.innerText = "Result: " + addResult;
}