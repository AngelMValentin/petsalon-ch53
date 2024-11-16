let pets = []; //empty array

let petSalon = {
    name: "THe Fashion Pet",
    address: {
        street:"Palm Ave",
        zip:"22900"
    }
}

// creating the pets 
let pet1={
    name:"Scooby",
    age:80,
    gender:"Male",
    service: "comfort",
    breed: "Husky"
}
let pet2={
    name:"Scrappy",
    age:70,
    gender:"Male",
    service: "comfort",
    breed: "Husky"
}
let pet3={
    name:"Scruffy",
    age:60,
    gender:"Male",
    service: "comfort",
    breed: "Husky"
}
// push the obj into the array 
pets.push(pet1, pet2, pet3);

function displayPetNames(){
    document.getElementById("petslength").innerHTML += `<p>We have ${pets.length} pets</p>`;
    for(let i=0;i<pets.length;i++){
        document.getElementById("petList").innerHTML += `<li>We have ${pets[i].name}</li>`;
    }
    
}

displayPetNames();



 // ----- html button info 
 // --- change color if you want with btn-(desired style) class
 // ---------- <button class="btn btn-dark" onclick="displayPetNames()">Display names</button>