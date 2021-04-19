'use strict'

function readInput() {
    var input = document.getElementById("userInput").value;
    var answer = document.body;
    var modalCorrect = document.getElementById("modalCorrect");
    var modalIncorrect = document.getElementById("modalIncorrect");
    
    if (input != 4) {
        modalIncorrect.style.display = "block";
    } else {
        modalCorrect.style.display = "block";
    }

}

window.onclick = function(event) {

    if (event.target == modalIncorrect) {
        modalIncorrect.style.display = "none";
    } else if (event.target == modalCorrect) {
        modalCorrect.style.display = "none";
    }

}