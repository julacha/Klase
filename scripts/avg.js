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

const numThrows = 100000;
let result = getAverage(numThrows);

// 4 ways of selecting a single button
//

let myParagraph = document.querySelector("#answer");
// let myParagraph = document.querySelector("p");
myParagraph.myResult = result;
myParagraph.textContent = `Average throw value is ${myParagraph.myResult}`;

const myButton = documment.querySelector(".pretty-button");
myButton.classList.add("big-button");

const myInput = document.querySelector(".num-input");
console.log(`My value is ${myInput.value}`);

function onButtonClick(){
console.log ("Button was clicked");
console.log ()
}

myButton.addEventListener('click',() => console.log ("Vliked me!"));
//document.addEventListener ("click",() => console.log ("Whole Doc clicked"));