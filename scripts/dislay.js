function displayPet() {
    let card = document.getElementById("pets");
    let result = "";

    for(let i=0; i<pets.length; i++){
        let pet = pets[i];

        result += `
        <div class="col-md-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${pet.name}</h5>
                    <p class="card-text">
                        Age: ${pet.age}<br>
                        Gender: ${pet.gender}<br>
                        Breed: ${pet.breed}<br>
                        Service: ${pet.service}
                    </p>
                    <button class="btn btn-primary">View</button>
                </div>
            </div>
        </div>
        `
    }

    card.innerHTML = result;
}

displayPet();