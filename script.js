const imageInput = document.querySelector('#img-url');
const topTextInput = document.querySelector('#top-text');
const botTextInput = document.querySelector('#bot-text');
const form = document.querySelector('form')
const memeContainer = document.querySelector('.created-memes-container')

// console.log(image.value);

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let div = document.createElement('div');
    let img = document.createElement('img');

    img.id = 'imgId';
    img.src = imageInput.value;

    memeContainer.append(div);
    div.append(img)
    div.classList.toggle('meme')

    console.log(img.src.height);

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
