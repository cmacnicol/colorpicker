//User inputs 
let userRed = document.getElementById("userRed").value;
let userGreen = document.getElementById("userGreen").value;
let userBlue = document.getElementById("userBlue").value;

//Min/Max RGB Value
const rgbMax = 255;
const rgbMin = 0;

function convert()
{

    document.getElementById("result").innerHTML = userRed/rgbMax, userGreen/rgbMax, userBlue/rgbMax;

    
}




