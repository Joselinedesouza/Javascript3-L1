class Pet {
  //Creiamo la nostra classe con gli oggetti che andrò mi servirano.
  constructor(petName, ownerName, species, breed) {
    // un riferimento a un oggetto
    this.petName = petName; //proprità di un oggetto
    this.ownerName = ownerName; //proprità di un oggetto
    this.species = species; //proprità di un oggetto
    this.breed = breed; //proprità di un oggetto
  }

  hasSameOwner(otherPet) {
    return this.ownerName === otherPet.ownerName;
  }
}

const pets = [];

document.getElementById("petForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const newPet = new Pet(petName, ownerName, species, breed);
  pets.push(newPet);
  displayPets();

  this.reset();
});

function displayPets() {
  const petList = document.getElementById("petList");
  petList.innerHTML = "";

  pets.forEach((pet, index) => {
    let listItem = document.createElement("li");
    listItem.textContent = `${pet.petName} (${pet.species}, ${pet.breed}) - Proprietario: ${pet.ownerName}`;

    // Controllo se ci sono animali con lo stesso proprietario
    pets.forEach((otherPet, otherIndex) => {
      if (index !== otherIndex && pet.hasSameOwner(otherPet)) {
        listItem.style.background = "#d1f7c4"; // Verde chiaro per evidenziare
        listItem.textContent += "(Condivide il proprietario con un altro pet)";
      }
    });
    petList.appendChild(listItem);
  });
}
