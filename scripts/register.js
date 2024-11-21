let pets = []; //empty array

let petSalon = {
    name: "THe Fashion Pet",
    address: {
        street:"Palm Ave",
        zip:"22900"
    }
}

// object constructor
function Pet(name, age, gender, breed, service) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
}

   


function deletePet(index) {
    pets.splice(index, 1);
    displayRow();
}

function register(){
    let inputName = document.getElementById("txtName").value;
    let inputAge = document.getElementById("txtAge").value;
    let inputGender = document.getElementById("txtGender").value;
    let inputBreed = document.getElementById("txtBreed").value;
    let inputService = document.getElementById("txtService").value;
    document.getElementById("error").innerText = "";
    
    if ((inputName == "" || inputName == null) || (inputGender == "" || inputGender == null) || 
    (inputBreed == "" || inputBreed == null) || (inputService == "" || inputService == null) || 
    (inputAge == "" || inputAge == isNaN)) {
        document.getElementById("error").innerText = "You did it wrong 😡";
        return;
    }
    

    let newPet = new Pet(inputName, inputAge, inputGender, inputBreed, inputService);

    pets.push(newPet);
    
    displayRow();
}

function clearFields(){
    document.getElementById("txtName").value = "";
    document.getElementById("txtAge").value = "";
    document.getElementById("txtGender").value = "";
    document.getElementById("txtBreed").value = "";
    document.getElementById("txtService").value = "";
}

function init(){
    //execution code should be inside of this function
    let pet1 = new Pet("Scooby", 99, "Male", "Dane", "Grooming");
    let pet2 = new Pet("Scrappy", 98, "Male", "Mixed", "Vaccines");
    let pet3 = new Pet("Scruffy", 22, "Female", "Golden Retriever", "Nails");
    // creating the obj
    // create two more pets 
    pets.push(pet1, pet2, pet3);
    displayRow();
}

window.onload = init; // wait to render the HTML
