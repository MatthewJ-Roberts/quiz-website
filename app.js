'use strict'
var modalCorrect = document.getElementById("modalCorrect");
var modalIncorrect = document.getElementById("modalIncorrect");

function question1() {
    var input = document.getElementById("userInput").value;
    
    if (input != 4) {
        modalIncorrect.style.display = "block";
    } else {
        modalCorrect.style.display = "block";
    }

}

function question2() {
    var input = document.getElementById("userInput").value;
    input = input.toLowerCase();

    if (input != "dominion day") {
        modalIncorrect.style.display = "block";
    } else {
        modalCorrect.style.display = "block";
    }

}

function question3() {
    var input = document.getElementById("userInput").value;
    input = input.toLowerCase();

    if (input != "yes") {
        modalIncorrect.style.display = "block";
    } else {
        modalCorrect.style.display = "block";
    }
    
}

function nextQuestion() {
    modalIncorrect.style.display = "none";
    modalCorrect.style.display = "none";
}