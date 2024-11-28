let services = [];

// constructor Service 
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

    // service.price validation

    return isValid;
}

// use jQuery
function register() {
    let inputDescription = $("#txtDescription").val();
    let inputPrice = $("#txtPrice").val();
    let newService = new Service(inputDescription, inputPrice); // new obj

    if(validService(newService)) {
        services.push(newService);
        console.log(newService);
        $("#txtDescription").val(""); // clear the form
        $("#txtPrice").val(""); 
    }
}

function init() {
    // hook events
}