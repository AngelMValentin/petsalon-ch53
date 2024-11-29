let services = [];

// service constructor 
function Service(description, price) {
    this.description = description;
    this.price = price;
}

// validations 
function validService(service) {
    let isValid = true;

    if(service.description.trim() === "") {
        isValid = false;
        $("#txtDescription").addClass("error");
        $("#descRequiredText").show();
    }else {
        $("#txtDescription").removeClass("error");
        $("#descRequiredText").hide();
    }

    if (isNaN(service.price) || service.price.trim() === "") {
        isValid = false;
        $("#txtPrice").addClass("error");
        $("#priceRequiredText").show();
    }else {
        $("#txtPrice").removeClass("error");
        $("#priceRequiredText").hide();
    }

    // ^^ if service description (without any spaces) is false, throw an error
    // if it is valid then remove error


    return isValid;
}

// use jQuery
function register() {
    let inputDescription = $("#txtDescription").val();
    let inputPrice = $("#txtPrice").val();
    let newService = new Service(inputDescription, inputPrice); // new obj

    if(validService(newService)) {
        save(newService);
        services.push(newService);

        alert("Service added successfully!");

        console.log(newService);
        $("#txtDescription").val(""); // clear the form
        $("#txtPrice").val(""); 
        $("#descRequiredText").hide();
        $("#priceRequiredText").hide();
    }else {
        alert("Please fill in all required fields correctly.");
    }

    // ^^ if the new service is valid then save to local storage and push it into the array
    // then give a successful alert and clear the form
    // if it is not, then give an error alert

}