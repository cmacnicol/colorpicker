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

//Event Listeners - Validation - Calc

userRed.addEventListener("keyup",function(){
    if (userRed.value > 1){
        alert("Enter a number at or below 1.");
    } 

    if (userRed.value && !isNaN(userRed.value)){
        redCalc = 255 * Number(userRed.value);
    } else {
        redCalc = 0;
    }
    convert();
});

userGreen.addEventListener("keyup",function(){
    if (userGreen.value > 1){
        alert("Enter a number at or below 1.");
    } 

    if (userGreen.value && !isNaN(userGreen.value)){
        greenCalc = 255 * Number(userGreen.value);
    } else {
        greenCalc = 0;
    }
    convert();
});

userBlue.addEventListener("keyup",function(){
    if (userBlue.value > 1){
        alert("Enter a number at or below 1.");
    } 

    if (userBlue.value && !isNaN(userBlue.value)){
        blueCalc = 255 * Number(userBlue.value);
    } else {
        blueCalc = 0;
    }

    convert();
});

function convert(){

    //Get 
    var totalRGB = redCalc + greenCalc + blueCalc;
    var l = Math.round(10 * (Math.max(redCalc,greenCalc,blueCalc)/255)) /10;
    var r = redCalc == 0 ? 0 : Math.round(10 * (redCalc / totalRGB)) /10;
    var g = greenCalc == 0 ? 0 : Math.round(10 * (greenCalc / totalRGB)) /10;
    var b = blueCalc == 0 ? 0 : Math.round(10 * (blueCalc / totalRGB)) /10;

    resultColor(r,g,b,l);

}

function resultColor(r,g,b,l){

    coloredDisplay.style.backgroundColor = "rgb(" + redCalc + "," + greenCalc + "," + blueCalc + ")";

    result.innerHTML = "Your inputs result in a conversion of " + r + "," + g + "," + b + "," + l + "."

}