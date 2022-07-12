'use strict';

/*
PROJECT #1: GUESS MY NUMBER!

OPTIMAL CODE
*/

// Create the secret number
const secretNumberSetter = function () {
  let number = Math.trunc(Math.random() * 20) + 1;
  return number;
};

let secretNumber = secretNumberSetter();
let score = 20;
let highscore = 0;

// Display / Change element message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Display / Change element number
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

// Display / Change element score
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

// Change element body's background color
const bodyBackGroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

// Change element number's width
const numberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('⛔️ No Number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    displayNumber(secretNumber);

    bodyBackGroundColor('#60b347');
    numberWidth('30rem');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low');
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 You Lost the Game!');
      displayScore(0);
    }
  }
});

// Again! button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = secretNumberSetter();

  displayMessage('Start guessing...');
  displayNumber('?');
  displayScore(score);
  document.querySelector('.guess').value = '';

  bodyBackGroundColor('#222');
  numberWidth('15rem');
});
