import { apiFetch } from '../utils/fetch.js';

export const fetchSpell = async () => {
    const apiSpells = `https://potterapi-fedeperin.vercel.app/en/spells`
    const dataSpells = await apiFetch(apiSpells);
    console.log(fetchSpell);
    console.log(apiSpells);
    console.log(dataSpells);
    return {
        spell: dataSpells.spell,
        use: dataSpells.use
        


    };
    
};


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





    let newSpell = document.getElementById('btnSpell')

    newSpell.addEventListener('click', getRandomSpell);
    










// const apiHouses = `https://potterapi-fedeperin.vercel.app/en/houses`
// fetch(apiHouses)
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error("Network response was not ok")
//         }
//         return response.json();
//     })
//     .then((apiHouses) => {
//         console.log(apiHouses);
//         receiveSpellData(apiHouses);
//     })


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