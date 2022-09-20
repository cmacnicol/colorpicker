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

    var l = Math.round(Math.max(redCalc,greenCalc,blueCalc)/255);

    var redCalc = Math.round(redCalc/totalRGB);
    var greenCalc = Math.round(greenCalc/totalRGB);
    var blueCalc = Math.round(blueCalc/totalRGB);

    
}








