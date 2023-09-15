console.log('Hello, world')

const URL = 'https://api.thecatapi.com/v1/images/search';

const btn = document.querySelector('#button');
btn.addEventListener('click', alr);

// This function calls the function called "ftc" which makes a fetch to show a random cat image
function alr() {
    ftc()
}

// This function makes a fetch for the random cat image of the API 
function ftc() {
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        const img = document.querySelector('img');
        img.src = data[0].url;
    });
};