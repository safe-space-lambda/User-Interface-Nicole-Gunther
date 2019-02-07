class Person {
    constructor (person){
        this.img = person.img;
        this.name = person.name;
        this.role = person.role;
        this.cohort = person.cohort;
        this.favIceCream = person.favIceCream;
    }
}

class Helper extends Person {
    constructor(helper){
        super(helper);
        this.specialty = helper.specialty;
    }
}

const caleb = new Helper({
    img: "assets/caleb.jpg",
    name: "Caleb",
    role: "Scrum Master",
    cohort: "???",
    favIceCream: "Mint Chocolate Chip",
    specialty: ['Back End', "Front End", "UI"]
});

const eileen = new Helper({
    img: "assets/eileen.jpg",
    name: "Eileen",
    role: "Back End Architect",
    cohort: "Web 15",
    favIceCream: "Vanilla",
    specialty: ["Front End", "UI"]
});

const lenna = new Helper({
    img: "assets/lenna.jpg",
    name: "Lenna",
    role: "Front End Architect",
    cohort: "Web 16",
    favIceCream: "Ferrero Rocher Gelato",
    specialty: "UI"
});

const padraic = new Helper({
    img: "assets/padraic.jpg",
    name: "Padraic",
    role: "Front End Architect",
    cohort: "Web 16",
    favIceCream: "Cookies and Cream",
    specialty: "UI"
});

const kevin = new Person({
    img: "assets/kevin.jpg",
    name: "Kevin",
    role: "UI Developer",
    cohort: "Web 17",
    favIceCream: "Vanilla/Chocolate Swirl"
});

const nicole = new Person({
    img: "assets/nicole.jpg",
    name: "Nicole",
    role: "UI Developer",
    cohort: "Web 17",
    favIceCream: "Chocolate Marshmallow"
});

const tico = new Person({
    img: "assets/tico.jpg",
    name: "Tico",
    role: "UI Developer",
    cohort: "Web 17",
    favIceCream: "Moose Tracks"
});

let aboutPeople = document.querySelector('.about-people');
let team = [caleb, eileen, lenna, padraic, kevin, nicole, tico];

team.forEach(member => {
    let aboutPerson = document.createElement('section');
    aboutPerson.className = "about-person";
    aboutPeople.append(aboutPerson);
    
    let personIntro = document.createElement('div');
    personIntro.className = "person-intro";
    let personDetails = document.createElement('p');
    personDetails.className = "person-details";
    aboutPerson.append(personIntro);
    aboutPerson.append(personDetails);
    
    let personImg = document.createElement('img');
    let personName = document.createElement('p');
    personName.className = "person-name";
    personIntro.append(personImg);
    personIntro.append(personName);
    
    personImg.src = `${member.img}`;
    personName.textContent = `${member.name}`;
    personDetails.setAttribute('style', 'white-space: pre-line;');
    
    if (member instanceof Helper){
        personDetails.textContent = `Role: ${member.role}\r
        Cohort: ${member.cohort}\r
        Can Help: ${member.specialty}\r
        Favorite Ice Cream: ${member.favIceCream}
        `
    }

    else{
        personDetails.textContent = `Role: ${member.role}\r
        Cohort: ${member.cohort}\r
        Favorite Ice Cream: ${member.favIceCream}
        `
    }

});
