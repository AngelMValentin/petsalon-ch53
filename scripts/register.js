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

    // ^^ I realize that this if statement is very unnecessary and redundant but im scared to change it lol 
    // the angry face is a joke, pls don't get mad.
    

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

function populateDropdown() {
    const services = read(); 
    const dropdown = $("#txtService");

    dropdown.find("option:not(:first)").remove();

    services.forEach(service => {
        const option = $("<option></option>")
        .val(service.description) // Set value attribute
        .text(`${service.description} - $${service.price}`);

        dropdown.append(option);
    });
}

// ^^ I don't know why writing using jQuery is hard for me. 
// I used 101% of my brain for this.


function init(){
    //execution code should be inside of this function
    let pet1 = new Pet("Scooby", 99, "Male", "Dane", "Grooming");
    let pet2 = new Pet("Scrappy", 98, "Male", "Mixed", "Vaccines");
    let pet3 = new Pet("Scruffy", 22, "Female", "Golden Retriever", "Nails");
    // creating the obj
    // create two more pets 
    pets.push(pet1, pet2, pet3);
    displayRow();
    populateDropdown();
}

window.onload = init; // wait to render the HTML
