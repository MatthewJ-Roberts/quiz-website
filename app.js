'use strict'
var modalCorrect = document.getElementById("modalCorrect");
var modalIncorrect = document.getElementById("modalIncorrect");
const questions = ["", "What was the original name for the national day of Canada, 'Canada Day'?", "Is this a good website?"];
const answers = ["4", "dominion day", "yes"];
var spot = 0;
var score = 0;

function nextQuestion() {

    spot += 1;

    if (spot < questions.length) {
        modalIncorrect.style.display = "none";
        modalCorrect.style.display = "none";

        const textToReplace = document.querySelector("label");
        const newText = document.createElement("label");
        newText.innerHTML = questions[spot];

        textToReplace.parentNode.replaceChild(newText, textToReplace);

    } else {

        modalIncorrect.style.display = "none";
        modalCorrect.style.display = "none";

        document.getElementById("flex-container").innerHTML = `
            <div class="item1">
                <h1>Thank you for completing my quiz!</h1>
                <h1>Final Score:</h1><p id="output"></p>
            </div>
            <div class="item2">
                <p>Press 'Retry' to play again</p><br>
            </div>
            <div class="item3">
                <button onclick="startQuiz()" id="allButtons">Retry</button></a>
            </div>
        `;
        document.getElementById("output").innerHTML = score;
    }

}

function checkAnswer() {

    var input = document.getElementById("userInput").value.toLowerCase();

    if (input != answers[spot]) {
        modalIncorrect.style.display = "block";
    } else {
        modalCorrect.style.display = "block";
        score ++;
    }

}

function startQuiz() {
    document.getElementById("flex-container").innerHTML = `
        <div class="questionForm">
            <form class="form" onsubmit="return false;">
                <label for="question">What does 2 + 2 equal?</label><br><br>
                <input type="text" id="userInput"><br><br>
                <input type="submit" onclick="checkAnswer()" id="allButtons" value="Submit">
            </form>
        </div>
    `;
    score = 0;
    spot = 0;
}