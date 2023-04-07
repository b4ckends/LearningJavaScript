const title = document.querySelector('h1');
const medium_paragaph = document.querySelector('.medium-paragraph');
const pid = document.getElementById('pid');
const input = document.querySelector('input');


console.log({
    title,
    medium_paragaph,
    pid,
    input
});

title.innerText = 'Dog <br>Cat</br>';

// console.log(title.getAttribute('Tv'));
// title.setAttribute('class', 'red');

title.classList.add('red');
title.classList.remove('red');

input.value = "3899nmdfs9939"

console.log(document.createElement('span'));

const img = document.createElement('img');
img.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCy_DSc1map-bY89X7DmI5lm7281JqguqETQ&usqp=CAU');
console.log(img);

pid.innerText = "";
pid.append(img);
