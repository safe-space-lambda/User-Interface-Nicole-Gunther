let btn = document.querySelector('.intro a');
let hello = document.querySelector('.hello');
let welcome = document.querySelector('.welcome');
let headerImg = document.querySelector('.header-img');
let introText = document.querySelector('.intro-text');
let mainText = document.querySelectorAll('.main-text');
let signUp = document.querySelector('#signup-btn');
let marketTop = document.querySelector('.market-top');

window.addEventListener('load', () => {
    setTimeout( () => {
        hello.classList.remove('hidden');
        hello.classList.add('fade-in-fwd');
        headerImg.removeAttribute("id");
        marketTop.style.display = "flex";
        marketTop.classList.add('fade-in-fwd');
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

signUp.addEventListener('mousedown', event => {
    event.target.style.opacity = "0.5";
});

signUp.addEventListener('mouseup', event => {
    event.target.style.opacity = "1";
});

var tabletPortraitWidth = window.matchMedia("(min-width: 501px)");
var tabletLandscapeWidth = window.matchMedia("(min-width: 800px)");

if (tabletPortraitWidth.matches) {
    window.addEventListener('load', () => {
        setTimeout( () => {
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

if (tabletLandscapeWidth.matches) {
    window.addEventListener('load', () => {
        setTimeout( () => {
            headerImg.classList.add('fade-in-fwd');
        }, 500);
    });
}

class TabLink {
    constructor(tabElement){

        this.tabElement=tabElement;

        this.tabData = tabElement.dataset.tab;
        
        if(this.tabData ==='all'){
            this.cards = document.querySelectorAll(`.card`);
        } else {
            this.cards = document.querySelectorAll(`.card[data-tab='${this.tabData}']`);
        }

        this.cards = Array.from(this.cards).map(card => new TabCard(card));

        this.tabElement.addEventListener('click', () => {
            return this.selectTab();
        });
    }

    selectTab(){
        const tabs = document.querySelectorAll('.tab');

        tabs.forEach(({classList}) => {
            classList.remove('active-tab');
        });

        const cards = document.querySelectorAll('.card');
        
        cards.forEach(function(element) {
            element.style.display = "none";
        });

        this.tabElement.classList.add('active-tab');


        this.cards.forEach(card => card.selectCard());
    }
}

class TabCard {
    constructor(cardElement){
        this.cardElement = cardElement;
    }
    selectCard(){
        this.cardElement.style.display = "flex";
        this.cardElement.classList.add('active-card');
    }
}

let tabs = document.querySelectorAll('.tab');
tabs.forEach(link => new TabLink(link));

class Review {
    constructor(domElement) {
        this.domElement = domElement;
        this.seeMore = domElement.querySelector('.see-more');
        this.seeLess = domElement.querySelector('.see-less');
        this.reviewExtended = domElement.querySelector('.review-extended')
        this.seeMore.addEventListener('click', () => this.expandReview());
        this.seeLess.addEventListener('click', () => this.expandReview());
    }

    expandReview() {
        this.seeLess.classList.toggle("hidden");
        this.seeMore.classList.toggle("hidden");
        this.reviewExtended.classList.toggle('hidden');
    }
}

let reviews = document.querySelectorAll('.review');
reviews.forEach(review => new Review(review));