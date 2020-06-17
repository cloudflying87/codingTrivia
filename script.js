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
        },
        {question:'What tag is used to define an unordered list that is bulleted?',
            answers:[
                {text:'<ul>',correct:true},
                {text:'<s>',correct:false},
                {text:'<li>',correct:false},
                {text:'<u>',correct:false},
            ]
        },
        {question:'What is the element used – and hidden – in code that explains things and makes the content more readable?',
            answers:[
                {text:'Comparisons',correct:false},
                {text:'Quotations',correct:false},
                {text:'Comments',correct:true},
                {text:'Notes',correct:false},
            ]
        },
        {question:'In JavaScript, what element is used to store multiple values in a single variable?',
            answers:[
                {text:'Variables',correct:false},
                {text:'Arrays',correct:true},
                {text:'Strings',correct:false},
                {text:'Functions',correct:false},
            ]
        },
        {question:'What is the element called that can continue to execute a block of code as long as the specified condition remains TRUE?',
            answers:[
                {text:'Debugger',correct:false},
                {text:'Clone',correct:false},
                {text:'Repeater',correct:false},
                {text:'Loop',correct:true},
            ]
        }
    ]
// Correct answers
    var correctAns
    var correctAnswer
    var countQuestion
    var score
    var timeInterval
    var correctButton
// Incorrect answers'
    var incorrectans
// Timer
    var timer
    var timeLeft
    var timeInterval
    var highUser
    var highScoreArr
// each part of the page
    var timerDisplay = document.getElementById('timer');
    var highScores = document.getElementById('highScores');
    var title = document.getElementById('title');
    var question =document.getElementById('question');
    var startBtn = document.getElementById('startBtn');
    var highScoreEl = document.getElementById('highScoreEl')
    var highScoreButton = document.getElementById('highScoreButton')
    var highInitials = document.getElementById('highInitials')
    var initials =document.getElementById('initials')
    var ans1 = document.getElementById('ans1');
    var ans2 = document.getElementById('ans2');
    var ans3 = document.getElementById('ans3');
    var ans4 = document.getElementById('ans4');

// Main game
startBtn.addEventListener('click', startgame);

function startgame(){
    title.classList.add('hide')
    startBtn.classList.add('hide')
    timer();
    questionShuffle = questionBank.sort(() => Math.random() - .5);
    currentQuestionNum = 0
    correctAns = 0
    incorrectans = 0
    timeLeft = 60
    highScoreEl.innerHTML = ''
    ans1.classList.remove('hide')
    ans2.classList.remove('hide')
    ans3.classList.remove('hide')
    ans4.classList.remove('hide')
    highInitials.classList.add('hide')
    resetButtonColors()
    setNextQuestion()    
}

function timer(){
    // 60 Second timer
    timeInterval = setInterval(function() {
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
        if (number === 1){
            ans1.classList.add('correct')
         } else if (number ===2){
            ans2.classList.add('correct')
         } else if (number ===3){
            ans3.classList.add('correct')
         } else {
            ans4.classList.add('correct')
         }
         correctAns ++ 
         currentQuestionNum ++     
        }
        
    else {
        if (number === 1){
            ans1.classList.add('wrong')
         } else if (number ===2){
            ans2.classList.add('wrong')
         } else if (number ===3){
            ans3.classList.add('wrong')
         } else {
            ans4.classList.add('wrong')
         }
        incorrectans ++
        timeLeft -= 10
        currentQuestionNum ++
    }
    
    if (currentQuestionNum === questionBank.length) {
        setTimeout(function() {
            endgame()
          }, 500);
    }
    else {
        // Short Delay to see the correct/wrong answer
        setTimeout(function() {
            resetButtonColors()
            setNextQuestion()
          }, 500);
        
    }
}

function resetButtonColors (){
    ans1.classList.remove('correct')
    ans2.classList.remove('correct')
    ans3.classList.remove('correct')
    ans4.classList.remove('correct')
    ans1.classList.remove('wrong')
    ans2.classList.remove('wrong')
    ans3.classList.remove('wrong')
    ans4.classList.remove('wrong')
}

function endgame(){
    console.log("Correct " + correctAns)
    console.log("Wrong " + incorrectans)
    console.log(timeLeft)
    score = timeLeft;
    clearInterval(timeInterval);
    timerDisplay.textContent = 'Time Remaining ' + timeLeft;
    if (timeLeft <= 0){
        questionElement.textContent = 'You ran out of time.'
    }
    else{
        questionElement.textContent = 'Game Over'
    };
    ans1.classList.add('hide');
    ans2.classList.add('hide');
    ans3.classList.add('hide');
    ans4.classList.add('hide');
    highScore();
}

function highScore(){
    highScoreEl.innerHTML = 'Your score was ' + timeLeft + ' <br><br> You answered ' + correctAns + ' out of ' + questionBank.length + ' correct';
    highInitials.classList.remove('hide')
    
    startBtn.textContent = "Play Again?";
    startBtn.classList.remove('hide');

}

function highScoreDisplay(){
    initHighScore();
    questionElement.innerHTML = ''
    title.innerHTML = ''

}

function storeHighScore(){
    console.log(initials.value)
    console.log(timeLeft)
    if (timeLeft !== undefined){
        console.log('inside if ' +initials.value)
        console.log(timeLeft)
        highUser = {
            initials: initials.value.trim(),
            highscore: timeLeft
        }
    }    
    localStorage.setItem('highScoreArr',JSON.stringify(highUser))
}

function initHighScore(){
    // pull the stored array from the local storage by name of highScoreArr
    // have to parse
    console.log(localStorage.getItem('highScoreArr'));
    // var storedHighScores = JSON.parse(localStorage.getItem('highScoreArr'));
    // if (storedHighScore !== null){
    //     highScoreArr = storedHighScore;
    // }

    // if(highscorestore)
}
// Need to call array out of storage with parse
// push user input to array
// display array to user
// store 
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

highScores.addEventListener('click',function(event) {
    event.preventDefault();
}
)
highScoreButton.addEventListener('click',storeHighScore())