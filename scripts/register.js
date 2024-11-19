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

// add breed and service 
// register function 

// validation function

function register(){
    let inputName = document.getElementById("txtName").value;
    let inputAge = document.getElementById("txtAge").value;
    let inputGender = document.getElementById("txtGender").value;
    let inputBreed = document.getElementById("txtBreed").value;
    let inputService = document.getElementById("txtService").value;
    
    console.log(inputName, inputAge, inputGender, inputBreed, inputService);
}

function init(){
    //execution code should be inside of this function
    let pet1 = new Pet("Scooby", 99, "Male", "Dane", "Grooming");
    let pet2 = new Pet("Scrappy", 98, "Male", "Mixed", "Vaccines");
    // creating the obj
    // create two more pets 
    console.log(pet1, pet2);
}

window.onload = init; // wait to render the HTML
