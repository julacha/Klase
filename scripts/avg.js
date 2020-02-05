function randomRange(myMin, myMax) {

    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  }
function getAverage(numThrows) {
    //write function to get an avarage value from dice throws
let total = 0;
for (let i=0; i < numThrows; i++){
  total +-randomRange(1,6); 
}
 return total / numThrows;
} 
const numThrows = 100000;
let result = getAverage(numThrows);

let myParagraph = document.querySelector ("#answer");
myParagraph.textContent = `Average throw value is ${result}`;