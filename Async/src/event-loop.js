
$.on('button', 'click', function onClick() {
    setTimeout(function timer() {
        console.log('You clicked the button');
    }, 2000);
});

console.log('Hi');

setTimeout(function timeout() {
    console.log('Click the button!');
}, 5000);lD

console.log('Welcome to the loop.');