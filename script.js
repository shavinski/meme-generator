const imageInput = document.querySelector('#img-url');
const topTextInput = document.querySelector('#top-text');
const botTextInput = document.querySelector('#bot-text');
const form = document.querySelector('form')
const memeContainer = document.querySelector('.created-memes-container')
const letters = document.querySelectorAll('.letter');
const body = document.querySelector('body')



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
    let trashIcon = document.createElement('a');
    let trashIconImg = document.createElement('img');
    

    memeContainer.append(div);
    div.classList.add('meme')
    div.append(img, topText, botText, trashIcon);


    topText.classList.add('top');
    botText.classList.add('bot');
    trashIcon.classList.add('trash')
    trashIcon.href = '#'
    trashIconImg.src = `img/trash.png`
    trashIcon.append(trashIconImg)
    
    img.src = imageInput.value;
    topText.innerText = topTextInput.value
    botText.innerText = botTextInput.value

    imageInput.value = '';
    topTextInput.value = '';
    botTextInput.value = '';

    div.addEventListener('click', function(e) {
        div.remove();
    });
});

