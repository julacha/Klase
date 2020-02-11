console.log ("Starting todo app");
const descInp = document.getElementById("desc");
const jobsCont = document.querySelector(".jobs-cont");
const clearBtn = document.querySelector("#clear-btn");

function onCreate(){
    console.log("Adding new TODO item. Using description",descInp.value);
    const jobdiv = document.createElement('div');
    jobdiv.innerText = descInp.value;
const desc = document.createElement ('span');
jobsCont.appendChild(jobdiv);
}

function onDeleteCurrent (){

}

function render(){
console.log("Render Jobs");
for (let i = 0; i < jobs.lenght; i++);
}


function onClear(){
console.log("Clear all elements");
while (jobsCont.firstChild){
jobsCont.removeChild(jobsCont.firstChild);
}

function addListeners(){
    console.log ("Adding Listeners");
const createBtn = document.querySelector("#create-btn");
createBtn.addEventListener("click", onCreate);
clearBtn.addEventListener("click", onClear);
}


function main(){
console.log("Running main");
addListeners();
}

main();