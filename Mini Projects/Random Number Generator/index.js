const button = document.getElementById("myRoll");
const label = document.getElementById("myLabel");
let randomNum;
const min = 1;
const max = 6;

button.onclick = function() {
    randomNum = Math.floor(Math.random() * max) + min;
    label.textContent = randomNum;
}
