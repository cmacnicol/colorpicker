//User inputs 
let userRed = parseInt(prompt("Enter R"));
let userGreen = parseInt(prompt("Enter G"));
let userBlue = parseInt(prompt("Enter B"));

//Min/Max RGB Value
const rgbMax = 255;
const rgbMin = 0;

const userColor = "rgb(" + userRed + ", " + userGreen + ", " + userBlue + ")";

function convert(){

    document.getElementById("box").style.backgroundColor = userColor;

}



