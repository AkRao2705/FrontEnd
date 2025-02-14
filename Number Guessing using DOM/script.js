'use strict';
// // handling click events
//uses an event listener
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
const displaymessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  console.log(typeof guess);
  //no guess
  if (!guess) {
    displaymessage('No Number!');
  } //win scenario
  else if (guess === secretNumber) {
    displaymessage('Correct Guess!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    } //-> this checks and updates the high score.
  } //checking if the number is too high or low
  else if (guess !== secretNumber) {
    displaymessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
    score--;
    document.querySelector('.score').textContent = score;
  }
});
//resetting the game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  displaymessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
