//User inputs - Declarations 
var userRed = document.getElementById("userRed");
var userGreen = document.getElementById("userGreen");
var userBlue = document.getElementById("userBlue");
var button = document.getElementById("buttonConvert");

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

//Event Listeners - Validation - Calc

button.addEventListener("click", convert());

userRed.addEventListener("keydown",function(){
    if (userRed.value > 1){
        alert("Enter a number at or below 1.");
    } else {
        redCalc = 255 * Number(userRed);
    }
    convert();
})

userGreen.addEventListener("keydown",function(){
    if (userGreen.value > 1){
        alert("Enter a number at or below 1.");
    } else {
        greenCalc = 255 * Number(userGreen);
    }
    convert();
})

userBlue.addEventListener("keydown",function(){
    if (userBlue.value > 1){
        alert("Enter a number at or below 1.");
    } else {
        blueCalc = 255 * Number(userBlue);
    }
    convert();
})




