console.log ("Started Tic Tac Toe");
//const squares = document.querySelectorAll("square")
const squares = document.getElementsByClassName("square");

function addListeners(){
    console.log ("Adding Listeners");
    console.log(squares.length);
    for (let i = 0; i < squares.length; i++){
    const sq = squares [i];
    console.log("My id is, sq.id");
}
}

function main(){
console.log ("Running main");
addListeners();
}

main ();
/* function onClick() {
    console.log("Clicked on button:");
}
 */