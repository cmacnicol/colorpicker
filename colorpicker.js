//User inputs - Declarations 
var userRed = document.getElementById("userRed");
var userGreen = document.getElementById("userGreen");
var userBlue = document.getElementById("userBlue");

//Calculation Vars
var redCalc = 0;
var greenCalc = 0;
var blueCalc = 0;

//Output
var result = document.getElementById("result");
var coloredDisplay = document.getElementById("box");

//Barycentric Conversion Calc
function convert(){

    var totalRGB = redCalc + greenCalc + blueCalc;

    var l = Math.round(10 * (Math.max(redCalc,greenCalc,blueCalc)/255)) / 10;

    var redCalc = Math.round(10 * (redCalc/totalRGB)) / 10;
    var greenCalc = Math.round(10 * (greenCalc/totalRGB)) / 10;
    var blueCalc = Math.round(10 * (blueCalc/totalRGB)) / 10;

    displayConversion(redCalc,greenCalc,blueCalc,l);
    displayColor(redCalc,greenCalc,blueCalc,l);
}

function displayConversion(redCalc,greenCalc,blueCalc,l){

    result.innerHTML = "The conversion is as follows: (" + redCalc + ", " + greenCalc + ", " + blueCalc + ", " + l + ")";

}

function displayColor(redCalc,greenCalc,blueCalc){

    coloredDisplay.style.backgroundColor = `rgb(${Number(redCalc)},${Number(greenCalc)},${Number(blueCalc)})`;

}

//Error Handling/Validation

function validateRed(userRed){

    if (userRed.value > 1) {
    } else {
        alert("Please enter a number equal to or below 1.");
    }

}

function validateGreen(userGreen){

    if (userGreen.value > 1) {
    } else {
        alert("Please enter a number equal to or below 1.");
    }

}

function validateBlue(userBlue){

    if (userBlue.value > 1) {
    } else {
        alert("Please enter a number equal to or below 1.");
    }

}








