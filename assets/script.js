var startBtn = document.querySelector("#start-button");
var questionEl = document.querySelector("#question");
var currentQuestionIndex = 0;

//Make array that holds question objects
var questions = [
    {
      title: 'Commonly used data types do not include ______',
      choices: ['strings', 'booleans', 'alerts', 'numbers'],
      answer: 'booleans',
    },
    {
      title: 'Arrays in JavaScript can be used to store ______',
      choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
      answer: 'booleans',
    },
    {
      title: 'String values must be enclosed within _____ when being assigned to variables.',
      choices: ['commas', 'curly brackets', 'quotes', 'parenthesis'],
      answer: 'quotes',
    },
    {
      title: 'A very useful tool used during developement and debugging for printing conent debugger is:',
      choices: ['JavaScript', 'terminal/bash', 'for loops', 'console.log'],
      answer: 'console.log',
    },
    {
      title:'The condition in an if/else statement is enclosed with ____',
      choices: ['quotes', 'curly brackets', 'parenthesis', 'square brackets'],
      answer: 'curly brackets',
    },
  ];

//When start quiz is pressed delete intro and fill question section with first question and activate timer
startBtn.addEventListener("click", startQuiz)

function startQuiz() {
    var introEl = document.querySelector("#intro");

    introEl.setAttribute('class', 'none');

    questionEl.removeAttribute('class');
    
    getQuestions()
}

function getQuestions() {
  var currentQuestion
}

// if i click right answer move on to next question 
// if i click wrong answer then take off 10 seconds and move on to next question

// if timer reaches 0 end game
// if all questions answered end game

//once quiz is over display leftover time

// store score in local storage if player puts initials