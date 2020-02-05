function randomRange(myMin, myMax) {

    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin; // Change this line
  
  }

function getAverage(numThrows){
    //write function to get an avarage value from dice throw
   let total=0;
for (let i=0; i < numThrows; i++){
total +-randomRange(1,6); 
}
/* total += randomRange (1,6);
 */
  /*  randomRange(1,6); */
 return total /numThrows;

  }

  let result = getAverage(1000);

let myParagraph = document.querySelector("#answer");
myParagraph.textContent = `Average throw value is ${result}`;