function displayRow() {
    let card = document.getElementById("pets");
    let result = "";

    for(let i=0; i<pets.length; i++){
        let pet = pets[i];

        result += `
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col" style="width: 5%;">Pet Number</th>
                <th scope="col" style="width: 10%;">Name</th>
                <th scope="col" style="width: 10%;">Age</th>
                <th scope="col" style="width: 10%;">Gender</th>
                <th scope="col" style="width: 10%;">Service</th>
                <th scope="col" style="width: 10%;">Breed</th>
                <th scope="col" style="width: 2%;"></th>
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
                <td class="align-top"><button class="btn btn-danger btn-sm" onclick="deletePet(${i});">Delete</button></td>
                </tr>
            </tbody>
        </table>
        `
    }

    card.innerHTML = result;
    displayInfo();
}

displayRow();

function displayInfo(){
    let groomingDiv = document.getElementById("gTotal");
    let totalDiv =  document.getElementById("total");
    let vaccinesDiv =  document.getElementById("vaccines");
    let nailsDiv =  document.getElementById("nails");
    let grooming=0;
    let vaccines=0;
    let nails=0;
  
    totalDiv.innerHTML= pets.length;// total pets
    
    for(let i=0; i<pets.length; i++){
      console.log(pets[i].service)
      if(pets[i].service=="Grooming"){
        grooming++;
      }else if (pets[i].service=="Vaccines"){
        vaccines++;
      }else if (pets[i].service=="Nails"){
        nails++;
      }
      groomingDiv.innerHTML=grooming;
      vaccinesDiv.innerHTML=vaccines;
      nailsDiv.innerHTML=nails;
    }
}



  