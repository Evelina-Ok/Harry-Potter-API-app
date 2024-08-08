
const apiSpells = `https://potterapi-fedeperin.vercel.app/en/spells`
fetch(apiSpells)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok")
        }
        return response.json();
    })
    .then((dataSpells) => {
        console.log(dataSpells);
        receiveSpellData(dataSpells);
    })

const apiBooks = `https://potterapi-fedeperin.vercel.app/en/books`


const apiCharacters = `https://potterapi-fedeperin.vercel.app/en/characters`


const apiHouses = `https://potterapi-fedeperin.vercel.app/en/houses`