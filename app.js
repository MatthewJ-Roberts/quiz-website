'use strict'

function readInput() {
    var input = document.getElementById("userInput").value;
    var answer = document.body;
    
    console.log(document.body.className);
    if (input != 4) {

        if (document.body.className == "default correct") {
            answer.classList.toggle("correct");
        }
        
        if (document.body.className != "default incorrect"){
            answer.classList.toggle("incorrect");
        }
        alert("Incorrect!");
    } else {

        if (document.body.className == "default incorrect") {
            answer.classList.toggle("incorrect");
        }

        if (document.body.className != "default correct") {
            answer.classList.toggle("correct");
        }
        alert("Correct!");
    }

}