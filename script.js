const imageInput = document.querySelector('#img-url');
const topTextInput = document.querySelector('#top-text');
const botTextInput = document.querySelector('#bot-text');
const form = document.querySelector('form')
const memeContainer = document.querySelector('.created-memes-container')
const letters = document.querySelectorAll('.letter');


// Changes color of the heading of the site 
//

function getRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    return `rgb(${r}, ${g}, ${b})`
};


setInterval(function() {
    for (let letter of letters) {
        letter.style.color = getRandomRGB();
    };
}, 1000);



// Uploads image to meme container and adds the top text and bottom text to image as well
//

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // let div = document.createElement('div');
    let img = document.createElement('img');
    let imgTopText = document.createElement('div');
    let imgBotText = document.createElement('div');

    img.id = 'meme-submit';
    img.src = imageInput.value;
    img.style.margin = '2%'
    memeContainer.append(img);

    imgTopText = topTextInput.value;
    imgBotText = botTextInput.value;
    img.append(imgTopText);
    img.append(imgBotText);



    // div.append(img)
    // div.classList.toggle('meme')


    imageInput.value = '';
    topTextInput.value = '';
    botTextInput.value = '';

    // div.style.cssText = `height: ${img.naturalHeight}; width: ${img.naturalWidth}`






    // console.log(event, imageInput.value);

    // let img = document.querySelector('image')
    // const meme = document.createElement('div');
    // const memeTopText = document.createElement('div');
    // const memeBotText = document.createElement('div');

    // meme.classList.toggle('meme');
    // meme.style.cssText = `background-image:url(${image.value}; height: ${image.clientHeight}; width: ${image.clientWidth}`
    // memeContainer.append(meme);

    // meme.append(memeBotText, memeTopText);
});
