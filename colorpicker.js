//User inputs - Declarations 
var userRed = document.getElementById("userRed");
var userGreen = document.getElementById("userGreen");
var userBlue = document.getElementById("userBlue");




const userColor = "rgb(" + userRed + ", " + userGreen + ", " + userBlue + ")";

function convert(){

    document.getElementById("box").style.backgroundColor = userColor;

}



