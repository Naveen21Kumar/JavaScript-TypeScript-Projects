'use strict';

const checkBtn = document.querySelector('.check');
const message = document.querySelector('.message');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let number = document.querySelector('.number');
const scoreDisplay = document.querySelector('.score');
let score = 20;
let highestScore = 0;
let highestScoreDisplay = document.querySelector('.highscore');

checkBtn.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    message.textContent = '⛔️ No number!';
  } else if (guess === secretNumber) {
    number.textContent = secretNumber;
    message.textContent = '🎉 Correct Number!';
    document.body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    if(score > highestScore) {
        highestScore = score;
        highestScoreDisplay.textContent = highestScore;
    }
  } else if (guess !== secretNumber) {
    if(score > 1) {
        message.textContent = guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
        score--;
        scoreDisplay.textContent = score;
    } else {
        message.textContent = '💥 You lost the game!';
        score = 0;
        scoreDisplay.textContent = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', function(){
    number.textContent = "?";
    message.textContent = "Start guessing...";
    score = 20;
    scoreDisplay.textContent = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.body.style.backgroundColor = '#222';
    number.style.width = '15rem';
    document.querySelector('.guess').value = '';
})
