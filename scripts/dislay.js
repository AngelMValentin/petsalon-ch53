function displayRow() {
    let card = document.getElementById("pets");
    let result = "";

    for(let i=0; i<pets.length; i++){
        let pet = pets[i];

        result += `
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col" style="width: 15%;">Pet Number</th>
                <th scope="col" style="width: 15%;">Name</th>
                <th scope="col" style="width: 15%;">Age</th>
                <th scope="col" style="width: 15%;">Gender</th>
                <th scope="col" style="width: 15%;">Service</th>
                <th scope="col" style="width: 15%;">Breed</th>
                </tr>
            </thead>
            <tbody class="table-group-divider">
                <tr>
                <th scope="row">${i}</th>
                <td class="align-top">${pet.name}</td>
                <td class="align-top">${pet.age}</td>
                <td class="align-top">${pet.gender}</td>
                <td class="align-top">${pet.service}</td>
                <td class="align-top">${pet.breed}</td>
                </tr>
            </tbody>
        </table>
        `
    }

    card.innerHTML = result;
}

displayRow();