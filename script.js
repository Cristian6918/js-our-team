console.log('js ok');
const teamContainer = document.querySelector('.team-container');


// Creation of Objeacts for each Memeber of the Team!
const member1 = {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    photo: 'img/angela-caroll-chief-editor.jpg',
}
const member2 = {
    name: 'Walter Gordon',
    role: 'Office Manager',
    photo: 'img/walter-gordon-office-manager.jpg',
}
const member3 = {
    name: 'AngelaLopez',
    role: 'Social Media Manager',
    photo: 'img/angela-lopez-social-media-manager.jpg',
}
const member4 = {
    name: 'Scott Estrada',
    role: 'Developer',
    photo: 'img/scott-estrada-developer.jpg',
}
const member5 = {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    photo: 'img/barbara-ramos-graphic-designer.jpg',
}

// Creation of an array with all the Objects created
let teamMembers = [member1, member2, member3, member4, member5];

// Function that Create a card with che information of Objects
function createCard(member) {
    const teamCard = document.createElement('div');
    teamCard.classList.add('team-card');
    const photoDiv = document.createElement('div');
    photoDiv.classList.add('card-image');
    const photo = document.createElement('img');
    photo.setAttribute('src', member.photo);
    photo.setAttribute('alt', `${member.name}`);

    const cardText = document.createElement('div');
    cardText.classList.add('card-text');

    const paraName = document.createElement('h3');
    paraName.innerText = `${member.name}`

    const paraRole = document.createElement('p');
    paraRole.innerText = `${member.role}`;

    teamContainer.appendChild(teamCard);
    teamCard.appendChild(photoDiv);
    photoDiv.appendChild(photo);
    teamCard.appendChild(cardText);
    cardText.appendChild(paraName);
    cardText.appendChild(paraRole);

}
// Creation of the Card
for (i = 0; i < teamMembers.length; i++) {
    createCard(teamMembers[i]);
}


// ---------------------------Bonus---------------------//
// Declarations!
let addName = document.querySelector('#name');
let addRole = document.querySelector('#role');
let addImage = document.querySelector('#image');
const addButton = document.querySelector('#addMemberButton');
// Add EventListenere to the Button constant
addButton.addEventListener('click', function () {
    let newMember = {
        name: addName.value,
        role: addRole.value,
        photo: addImage.value,
    }
    console.log(addName.value);
    teamMembers.push(newMember);
    createCard(newMember);
    inputClear();

});

// Clear Input Spaces Function!
function inputClear() {
    addName.value = '';
    addRole.value = '';
    addImage.value = '';
}

