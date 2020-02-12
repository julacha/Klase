console.log("Started bind.js");
const myRange = Document.querySelector("#myRange");

function onChange (event){
console.log("My value is", event.target.value);

}

function onNumInput(event){
console.log("")
}

myRange.addEventListener('change', () => console.log("I was changed"));
myRange.addEventListener('input', (ev) => console.log("V":,ev.target.value));