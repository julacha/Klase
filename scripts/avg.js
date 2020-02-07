///Пример: Случайное целое между min и max
//использование Math.round() даст неравномерное распределение!
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin; // Change this line
}
function getAverage(numThrows) {
    //write function to get an average value from dice throws
    let total = 0;
    //write loop here
    // use randomRange(1, 6);
    //loop goes here
    for (let i = 0; i < numThrows; i++) {
        total += randomRange(1, 6);
    }

    return total / numThrows;
}
console.log("starting");
const numThrows = 100000;
let result = getAverage(numThrows);

let myParagraph = document.querySelector("#answer");
// let myParagraph = document.querySelector("p");
myParagraph.myResult = result;
myParagraph.textContent = `Average throw value is ${myParagraph.myResult}`;
//1
//Many ways of selecting a single buton
//const myButton = document.querySelector(".pretty-button");
//preferable to add a class instead of doing inline
myButton.classList.add("big-button");
myButton.style.backgroundColor = "orange";
//const myButton = document.querySelector("button");
const myButton = document.querySelector("#submitBtn");
//const myButton = document.getElementById("submitBtn");
//there is also document.getElementsByClassName
//document.getElementsByTagName

//2
myButton.addEventListener("click", onButtonClick);
document.addEventListener("click", () => console.log("Whole Doc clicked"));


const delButton = document.querySelector("#deleteBtn");


const myInput = document.querySelector(".num-input");
console.log(`My value is ${myInput.value}`);

function onButtonClick() {
    console.log("Button was clicked!");
    console.log(`My value is ${myInput.value}`);
    let nThrows = myInput.value;
    let result = getAverage(nThrows);
    myParagraph.textContent = `Average throw value is ${result}`;

    let red = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgb(${red}, 128, 128)`;
}
function onDelete(){
console.log("On delete");
let element = resultsCont;
while (element.firstChild){
    element.removeChild(element.firstChild);
}
}
//can only have one click
myButton.onclick = onButtonClick;
delButton.onclick = onDelete;
//can have many additional events handled by addEventListener

