let btn = document.querySelector('#btn');
let mainText = document.querySelectorAll('.main-text');

btn.addEventListener('click', () => {
    mainText.forEach(element => {
        element.classList.remove('hidden');
    });
});