// Use cases
// 1) User loads the page and is prompted with a start quiz button
    // Once the button is click first answer will be shown
    // Timer will start
// 2) Presented with a question. Picks the answer to the question. 
        // Told if the answer is correct or incorrect.
        // If correct add to the correct variable 
        // If incorrect add to incorrect variable and subtract 10 seconds from the clock
        // Go on to next question. 
        // When clock reaches 0 the game is over
            // Display number of correct answers
            // Incorrect answers
            // score
            // Box to enter high score
// Variables
// Objects for the quiz questions
// Correct answers
    var correctans
// Incorrect answers'
    var incorrectans
// Timer
    var timer
// each part of the page
    var timerdisplay = document.getElementById("timer")
    var highscores = document.querySelector(".highscores")
    var title = document.querySelector("#title")
    var question =document.querySelector(".question")
    var button = document.querySelector("#startBtn")
    var answer = document.querySelector(".answer")

// Main game
startBtn.addEventListener("click", startgame)

function startgame(){
    console.log("Working")
    
    timerdisplay.innerText = ""
    title.innerText =""
    highscores.innerText = ""
    question.innerText = ""
    startBtn.style.display = "none"
}