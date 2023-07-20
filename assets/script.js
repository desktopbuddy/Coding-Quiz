//Make array that holds question objects
var questions = [
  {
    title: 'Commonly used data types do not include ______',
    choices: ['strings', 'booleans', 'alerts', 'numbers'],
    answer: 'alerts',
  },
  {
    title: 'Arrays in JavaScript can be used to store ______',
    choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
    answer: 'all of the above',
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

//create variables
var startBtn = document.querySelector("#start-button");
var questionEl = document.querySelector("#question");
var questionsIndex = 0;
var choicesEl = document.querySelector("#choices");
var initialsEl = document.querySelector("#initials");
var submitBtn = document.querySelector("#submit");
var timerEl = document.querySelector('#time');
var timerId;
var time = 60;

//When start quiz is pressed delete intro and fill question section with first question and activate timer
function startQuiz() {
  var introEl = document.querySelector("#intro");

  introEl.setAttribute('class', 'none');

  questionEl.removeAttribute('class');

  getQuestions();
  
  // start timer
  timerId = setInterval(clockTick, 1000);
  
  // show starting time
  timerEl.textContent = time;
}

function getQuestions() {

  if(questionsIndex >= questions.length) {
    quizEnd();
    return;
  }

  var currentQuestion = questions[questionsIndex];
  var titleEl = document.querySelector('#title');
  // display current question
  titleEl.textContent = currentQuestion.title;

  for (var i = 0; i < currentQuestion.choices.length; i++) {
    choicesEl.children[i].children[0].textContent = currentQuestion.choices[i];
  }

}

// if i click right answer move on to next question 
// if i click wrong answer then take off 10 seconds and move on to next question
function checkAnswer(event) {
  
  // check if user selection matches correct answer
  var buttonEl = event.target;

  // if the clicked element is not a choice button, do nothing.
  if (!buttonEl.matches('.choice')) { 
    return;
  }

  if (buttonEl.textContent !== questions[questionsIndex].answer) {
    time -= 10;
  }

  // move to next question
  questionsIndex++;

  getQuestions();
}

function clockTick() {
  // update time
  time--;
  timerEl.textContent = time;

  // check if user ran out of time
  if (time <= 0) {
    quizEnd();
  }
}

function quizEnd() {
  // stop timer
  clearInterval(timerId);

  // show end screen
  var endScreenEl = document.querySelector('#game-over');
  endScreenEl.removeAttribute('class');

  // show final score
  var finalScoreEl = document.querySelector('#score');
  finalScoreEl.textContent = time;

  // hide questions section
  questionEl.setAttribute('class', 'none');
}

//once quiz is over display leftover time
function saveScore() {
  // get initials
  var initials = initialsEl.value.trim();

  // check that initials isn't empty
  if (initials !== '') {
    // get scoreboard from localstorage, or if not any, set to empty array
    var scoreboard = JSON.parse(window.localStorage.getItem('scoreboard')) || [];

    // new object for current user
    var newScore = {
      score: time,
      initials: initials,
    };

    // save to localstorage
    scoreboard.push(newScore);
    window.localStorage.setItem('scoreboard', JSON.stringify(scoreboard));

    // redirect to next page
    window.location.href = 'scoreboard.html';
  }
}

function checkForEnter(event) {
  // "13" represents the enter key
  if (event.key === 'Enter') {
    saveScore();
  }
}
// store score in local storage if player puts initials

// Click
startBtn.addEventListener("click", startQuiz);
choicesEl.addEventListener("click", checkAnswer);
submitBtn.addEventListener("click", saveScore);