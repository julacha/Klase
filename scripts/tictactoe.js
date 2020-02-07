console.log ("Started Tic Tac Toe");
//const squares = document.querySelectorAll("square")
const squares = document.getElementsByClassName("square");

function onClick(event) {
    console.log("Clicked some button:");
    console.log ("y id is", event.current);
}

function addListeners(){
    console.log ("Adding Listeners");
    console.log(squares.length);

    for (let i = 0; i < squares.length; i++){
    const sq = squares [i];
    console.log("My id is",sq.id);
    sq.addEventListener ("click", ()=>console.log ("Clicked me!"));
}
}

function main(){
console.log ("Running main");
addListeners();
}

main ();
