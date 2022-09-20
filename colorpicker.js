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

//Event Listeners - Validation - Calc

userRed.addEventListener("keyup",function(){
    if (userRed.value > 1){
        alert("Enter a number at or below 1.");
    } else {
        redCalc = 255 * Number(userRed.value);
        console.log(userRed.value)
    }
    convert();
});
