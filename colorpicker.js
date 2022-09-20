//User inputs 
let userRed = document.getElementById("userRed").value;
let userGreen = document.getElementById("userGreen").value;
let userBlue = document.getElementById("userBlue").value;

//Min/Max RGB Value
const rgbMax = 255;
const rgbMin = 0;

const userColor = [userRed,userGreen,userBlue];

function convert(){

    document.getElementById("box").style.backgroundColor = userColor;

}



