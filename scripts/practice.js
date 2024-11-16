var globalVariable = "I am in global scope";

function myFunction(){
    var localVariable = "I am in local scope";
    // this fn can access to the globalVariable
    if(true){
        var blockVariable = "I am in a block scope";
        //this is limited to the block(for, if)
        console.log(blockVariable);
    }
    //this is limited to the fn
    console.log(localVariable);  
}

myFunction();

//name, age , gender 

let student1 = {
    name:"kit",
    age:25,
    gender:"Female"
}

console.log(student1);

//create an object (with 5 properties/attributes)

let student2 = {
    name: "Angel",
    age: 25,
    gender: "Male",
    height: 6,
    weight: 210
}
console.log(student2);