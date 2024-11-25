console.log("Welcome to jQuery");

/*
JS vs jQuery

js ... document.getElementById("results");
jquery ... $(#result)

js ... document.getElementByTagName("p");

js ... document.getElementsByClassName("text")
jquery ... $(".text");

*/


//ID SELECTORS
//let redParagraph = document.getElementById("red");
let redParagraph = $("#red")
    .css("background", "red");

console.log("my red paragraph", redParagraph);

let blueParagraph = $("#blue")
    .css("background", "blue")
    .css("color", "white");

// CLASS SELECTORS
let myParagraphWithBorder = $(".with-border");

myParagraphWithBorder
    .css("border", "5px dashed yellow")

myParagraphWithBorder.click(function(){
    console.log("clicked");

    $(this).addClass("bg-gray");
});

// TAG SELECTORS
let thirdParagraph = $("p");
thirdParagraph.css("cursor", "pointer");

// SIMPLE AND COMMON FUNCTION 
function register() {
    console.log("Registering Function");

    let testEntry = $("#testInput").val();
    $("#results").append(`<li>${testEntry}</li>`);

    $("#testInput").val("");
}

// EVENTS 
$("#btnRegister").on("click", register);

// SIMPLE AND COMMON FUNCTION 
function clickMe() {
    console.log("ClickMe btn");

    $("p:first").hide();
    $("p:last").css("border", "5px solid skyblue")
}

$("#newBtn").on("click", clickMe);

//ANIMATIONS 
function showName() {
    $("#user-name").slideDown();
}

function hideName() {
    $("#user-name").slideUp();
}

let services = [];

//constructor service 
function Service(description, price) {
    //
}

// validations 
function validService(service) {
    let isValidDescription = true;
    let isValidPrice = true;

    if(service.description == "") {
        isValidDescription = false;
        $("#txtDescription").addClass("error");
        $("descRequiredText").show();
    }
}

// use jquery
function register() {
    let newService = new Service();
}

function init() {
    // hook events
}

window.onload = init();

