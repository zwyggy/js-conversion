let inputFeet = document.getElementById("inputFeet");
let outputMeters = document.getElementById("outputMeters");
let outputCentimeters = document.getElementById("outputCentimeters");
let outputYards = document.getElementById("outputYards");

function convert() {
    let meters = parseFloat(inputFeet.value) /3.2808;
    let centimeters = parseFloat(inputFeet.value) /0.032808;
    let yards = parseFloat(inputFeet.value) *0.33333;
    outputMeters.innerHTML = meters;
    outputCentimeters.innerHTML = centimeters;
    outputYards.innerHTML = yards;
}

function clearFields() {
    outputMeters.innerHTML = "";
    outputCentimeters.innerHTML = " ";
    outputYards.innerHTML = " ";
}