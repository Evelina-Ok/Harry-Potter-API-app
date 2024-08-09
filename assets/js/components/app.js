import { apiFetch } from '../utils/fetch.js';

export const fetchSpell = async () => {
    const endpoint = `https://potterapi-fedeperin.vercel.app/en/spells`
    const dataSpells = await apiFetch(endpoint);
  
    console.log(dataSpells);
    console.log(dataSpells[0].spell);
    const randomSpell = dataSpells[Math.floor(Math.random() * dataSpells.length)];

    return {
        title: randomSpell.spell,
        use: randomSpell.use
    };
    
};

const displayTitle = async () => {
    const { title, use } = await fetchSpell();
    console.log(use);
    
    document.getElementById('titleContainer').textContent = title;
    document.getElementById('contentContainer').textContent = use
};

   
    

const bgrImage = [
    '../assets/img/01.jpg',
    '../assets/img/02.jpg',
    '../assets/img/03.jpg',
    '../assets/img/04.jpg',
    '../assets/img/05.jpg',
    '../assets/img/06.jpg',
    '../assets/img/07.jpg',
    '../assets/img/08.jpg',
    '../assets/img/09.jpg',
    '../assets/img/10.jpg'
];

const changeBgrImg = () => {
    const randomImage = bgrImage[Math.floor(Math.random() * bgrImage.length)];
    document.querySelector('main').style.backgroundImage = `url(${randomImage})`;
};

 
 document.getElementById('btnSpell').addEventListener('click', () => {
    displayTitle();
    changeBgrImg()    
    console.log("Title");
    console.log("New spell and background image displayed");
    
});

displayTitle();
// changeBgrImg() 


//-----------RANDOM HOUSE------------//
export const fetchHouse = async () => {
    const endpoint = `https://potterapi-fedeperin.vercel.app/en/houses`
    const dataHouse = await apiFetch(endpoint);
  
    console.log(dataHouse);
    console.log(dataHouse[0].house);
    const randomHouse = dataHouse[Math.floor(Math.random() * dataHouse.length)];

    return {
        house: randomHouse.house,
        founder: randomHouse.founder
    };
    
};

const displayHouse = async () => {
    const { house, founder } = await fetchHouse();
    console.log(founder);
    
    document.getElementById('titleContainer').textContent = house;
    document.getElementById('contentContainer').textContent = founder
};

document.getElementById('btnHouse').addEventListener('click', () => {
    displayHouse();
    // changeBgrImg()    
    console.log("house");
    console.log("New house displayed");
    
});
//view call
displayHouse();











// let newSpell = document.getElementById('btnSpell')
// newSpell.addEventListener('click', getRandomSpell);
// function getRandomSpell {}




// const apiSpells = `https://potterapi-fedeperin.vercel.app/en/spells`
// fetch(apiSpells)
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error("Network response was not ok")
//         }
//         return response.json();
//     })
//     .then((dataSpells) => {
//         console.log(dataSpells);
//         receiveSpellData(dataSpells);
//     })


const apiHouses = `https://potterapi-fedeperin.vercel.app/en/houses`
fetch(apiHouses)
.then((response) => {
if (!response.ok) {
throw new Error("Network response was not ok")
 }
        return response.json();
     })
     .then((apiHouses) => {
       console.log(apiHouses);
         receiveSpellData(apiHouses);
     })


// const apiSpells = `https://potterapi-fedeperin.vercel.app/en/spells`
// fetch(apiSpells)
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error("Network response was not ok")
//         }
//         return response.json();
//     })
//     .then((dataSpells) => {
//         console.log(dataSpells);
//         receiveSpellData(dataSpells);
//     })