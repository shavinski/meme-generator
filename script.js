const imageInput = document.querySelector('#img-url');
const topTextInput = document.querySelector('#top-text');
const botTextInput = document.querySelector('#bot-text');
const form = document.querySelector('form')
const memeContainer = document.querySelector('.created-memes-container')
const letters = document.querySelectorAll('.letter');
const body = document.querySelector('body')

// let div = document.createElement('div');
// let img = document.createElement('img');
// let topText = document.createElement('p')
// let botText = document.createElement('p')


// Changes color of the heading of the site 
//

function getRandomColor() {
    const r = `hsl(${Math.random() * 360}, 100%, 50%)`;
    
    return `${r}`
};


setInterval(function() {
    for (let letter of letters) {
        letter.style.color = getRandomColor();
    };
}, 1000);


// Uploads image to meme container and adds the top text and bottom text to image as well
//

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let div = document.createElement('div');
    let img = document.createElement('img');
    let topText = document.createElement('p');
    let botText = document.createElement('p');
    

    body.append(div);
    div.append(img);
    div.append(topText);
    div.append(botText);
    

    div.classList.add('meme');
    topText.classList.add('top');
    botText.classList.add('bot');

    img.src = imageInput.value;
    topText.innerText = topTextInput.value
    botText.innerText = botTextInput.value

    memeContainer.append(div);

    console.log(img.src, img.height, img.width);

    imageInput.value = '';
    topTextInput.value = '';
    botTextInput.value = '';

    div.addEventListener('click', function(e) {
        console.log(e.target);
        div.remove();
    });
});

