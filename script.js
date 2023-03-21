const image = document.querySelector('#img-url');
const topText = document.querySelector('#top-text');
const botText = document.querySelector('#bot-text');
const submit = document.querySelector('#submit')
const memeContainer = document.querySelector('.created-memes-container')
const newDiv = document.createElement("div");




submit.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('clicked submit', e);
});
