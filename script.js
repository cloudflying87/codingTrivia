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
    var questionBank
    var questionShuffle, currentQuestionNum
    var answerCorrect
    
    questionBank = [
        {question:'What are the CSS properties that are used to add space around sections of content?',
            answers:[
                {text:'Padding', correct:true},
                {text:'Cleaner', correct:false},
                {text:'Break',correct:false},
                {text:'Spacing',correct:false},
            ]
        },
        {question:'What is the name given to the CSS element that always starts on a new-line and takes up the entire width available to it?',
            answers:[
                {text:'Spacer',correct:false},
                {text:'Line',correct:false},
                {text:'Margin' , correct:false},
                {text:'Block-level',correct:true},
            ]
        },
        {question: 'CSS stands for ____ Style Sheets.',
            answers:[
                {text:'Concept',correct:false},
                {text:'Curious',correct:false},
                {text:'Cascading',correct:true},
                {text:'Concave',correct:false},
            ]
        },
        {question:'What tag is used to define a container for an external app or plug-in?',
            answers:[
                {text:'<embed>',correct:true},
                {text:'<code>',correct:false},
                {text:'<!DOCTYPE>',correct:false},
                {text:'<caption>',correct:false},
            ]
        }
    ]
// Correct answers
    var correctAns
    var correctAnswer
    var countQuestion
// Incorrect answers'
    var incorrectans
// Timer
    var timer
    var timeLeft = 60
    var timeInterval
// each part of the page
    var timerDisplay = document.getElementById('timer');
    var highscores = document.getElementById('highScores');
    var title = document.getElementById('title');
    var question =document.getElementById('question');
    var startBtn = document.getElementById('startBtn');
    var correctButton
    var ans1 = document.getElementById('ans1');
    var ans2 = document.getElementById('ans2');
    var ans3 = document.getElementById('ans3');
    var ans4 = document.getElementById('ans4');

// Main game
startBtn.addEventListener('click', startgame);

function startgame(){
    startBtn.classList.add('hide')
    timer();
    questionShuffle = questionBank.sort(() => Math.random() - .5);
    currentQuestionNum = 0
    correctAns = 0
    incorrectans = 0
    countQuestion = 1
    ans1.classList.remove('hide')
    ans2.classList.remove('hide')
    ans3.classList.remove('hide')
    ans4.classList.remove('hide')
    
    setNextQuestion()
    
}

function timer(){
    // 60 Second timer
    
    var timeInterval = setInterval(function() {
        timerDisplay.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
      if (timeLeft === 0) {
        timerDisplay.textContent = '';
        clearInterval(timeInterval);
        endgame();
      }
    }, 1000);
}

function setNextQuestion(){
    showQuestion(questionShuffle[currentQuestionNum])
}

var i = 0;

function showQuestion (question){
    var i = 0;
    questionElement.textContent = question.question
    ans1.textContent = question.answers[0].text;
    ans2.textContent = question.answers[1].text;
    ans3.textContent = question.answers[2].text;
    ans4.textContent = question.answers[3].text;
    
    question.answers.forEach(writeAnswers);
    
    function writeAnswers(answers) {
        i ++;
        if (answers.correct === true){
            correctButton = i;
        } 
    }
}

function checkanswer(number){
    
    if (correctButton === number){
        answerCorrect === true
        correctAns ++ 
        currentQuestionNum ++
    }
    else {
        answerCorrect === false
        incorrectans ++
        timeLeft -= 10
        currentQuestionNum ++
    }
    
    console.log(currentQuestionNum)
    if (currentQuestionNum == questionBank.length) {
        endgame()
    }
    setNextQuestion()
}

function endgame(){
    console.log("Correct " + correctAns)
    console.log("Wrong " + incorrectans)
    console.log(timeLeft)
    question.classList.add('hide')
    ans1.classList.add('hide')
    ans2.classList.add('hide')
    ans3.classList.add('hide')
    ans4.classList.add('hide')


}
ans1.addEventListener('click',function(){
    checkanswer(1);
},false);

ans2.addEventListener('click',function(){
    checkanswer(2);
},false);

ans3.addEventListener('click',function(){
    checkanswer(3);
},false);

ans4.addEventListener('click',function(){
    checkanswer(4);
},false);