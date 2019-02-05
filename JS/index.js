let btn = document.querySelector('.intro a');
let hello = document.querySelector('.hello');
let welcome = document.querySelector('.welcome');
let headerImg = document.querySelector('#header-img');
let introText = document.querySelector('.intro-text');
let mainText = document.querySelectorAll('.main-text');
let signUp = document.querySelector('#signup-btn');

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
        btn.classList.add('btn');
    }, 5000);
});

btn.addEventListener('mousedown', event => {
    event.target.style.fontSize = "2.2rem";
});

btn.addEventListener('mouseup', event => {
    event.target.style.fontSize = "2.4rem";
});

signUp.addEventListener('mousedown', event => {
    event.target.style.fontSize = "2.2rem";
});

signUp.addEventListener('mouseup', event => {
    event.target.style.fontSize = "2.4rem";
});

var desktopWidth = window.matchMedia("(min-width: 700px)");

if (desktopWidth.matches) {
    window.addEventListener('load', () => {
        setTimeout( () => {
            headerImg.style.display = "flex";
            headerImg.classList.add('fade-in-fwd');
            welcome.style.display = "flex";
            welcome.classList.add('fade-in-fwd');
        }, 500);
    });

    window.addEventListener('load', () => {
        setTimeout( () => {
            introText.classList.remove('hidden');
            introText.classList.add('fade-in-fwd');
        }, 2000);
    });
    
    window.addEventListener('load', () => {
        setTimeout( () => {
            btn.classList.remove('hidden');
            btn.classList.add('fade-in-fwd');
            btn.classList.add('btn');
        }, 3500);
    });
}