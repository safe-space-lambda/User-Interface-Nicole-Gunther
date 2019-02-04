let btn = document.querySelector('#btn');
let hello = document.querySelector('.hello');
let welcome = document.querySelector('.welcome');
let introText = document.querySelector('.intro-text');
let mainText = document.querySelectorAll('.main-text');

window.addEventListener('load', () => {
    setTimeout( () => {
        hello.classList.remove('hidden');
        hello.classList.add('fade-in-fwd');
    }, 500);
});

window.addEventListener('load', () => {
    setTimeout( () => {
        welcome.style.display = "flex";
        welcome.classList.add('fade-in-fwd');
    }, 1500);
});

window.addEventListener('load', () => {
    setTimeout( () => {
        introText.classList.remove('hidden');
        introText.classList.add('fade-in-fwd');
    }, 3000);
});

window.addEventListener('load', () => {
    setTimeout( () => {
        btn.classList.remove('hidden');
        btn.classList.add('fade-in-fwd');
    }, 5000);
});

btn.addEventListener('click', () => {
    mainText.forEach(element => {
        element.classList.remove('hidden');
    });
});