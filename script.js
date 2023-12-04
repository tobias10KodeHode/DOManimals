const animals = [
    {
        name: "Havørn",
        image: "Bilder/havørn.webp",
    },

    {
        name: "Rådyr",
        image: "Bilder/rådyr.webp",
    },

    {
        name: "Hjort",
        image: "Bilder/hjort.webp",
    },

    {
        name: "Reinsdyr",
        image: "Bilder/reinsdyr.webp",
    },

    {
        name: "Rev",
        image: "Bilder/rev.webp",
    },

    {
        name: "Elg",
        image: "Bilder/elg.webp",
    },

    {
        name: "Bjørn",
        image: "Bilder/bjørn.webp",
    },
];

function generateRandomAnimal() {
    const animalText = document.getElementById("animal-text");
    const randomIndex = Math.floor(Math.random() * animals.length);
    const randomAnimal = animals[randomIndex];

    if (animalText.innerHTML !== "Trykk på knappen for å se et tilfeldig dyr!") {
        animalText.innerHTML = "Trykk på knappen for å se et tilfeldig dyr!";
    } else {
        animalText.innerHTML = `<p>Tilfeldig dyr: ${randomAnimal.name}</p><img src=${randomAnimal.image}></img>`;
    }
}
