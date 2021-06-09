'use strict';

// document.querySelector('.message').textContent = ''; //message display
// document.querySelector('.number').textContent = ''; //random number
// document.querySelector('.score').textContent = ''; //score
// document.querySelector('.guess').textContent = ''; //input number

let randomNumber = 0;
let guessedNumber = 0;
let score = 0;
let highScore = 0;

initGame();

function initGame() {
    document.querySelector('.check').style.display = 'block';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.score').textContent = String(0);
    score = 0;
    document.querySelector('.highscore').textContent = String(highScore);
    getRandomNumberAndSet();
}

function getRandomNumberAndSet() {
    randomNumber = Math.ceil(Math.random() * 20);
    document.querySelector('.number').textContent = String(randomNumber);
}

function calculateIfUserRight() {
    guessedNumber = Number(document.querySelector('.guess').value.trim());
    document.querySelector('body').style.backgroundColor = '#222';

    if (guessedNumber === randomNumber) {
        showSuccessLight();
        document.querySelector('.message').textContent =
            '🙌🏽 Correct, Guess Next!';
        document.querySelector('.guess').value = '';
        score += 10;
        updateScore(score);
        getRandomNumberAndSet();
    } else if (guessedNumber > randomNumber) {
        showErrorLight();
        document.querySelector('.message').textContent = '📈 Guess too high!';
        document.querySelector('.guess').value = '';
        score -= 10;
        updateScore(score);
    } else if (guessedNumber < randomNumber) {
        showErrorLight();
        document.querySelector('.message').textContent = '📉 Guess too low!';
        document.querySelector('.guess').value = '';
        score -= 10;
        updateScore(score);
    } else {
    }
}

function updateScore(score) {
    if (score < 0) {
        document.querySelector('.message').textContent = '💥 Game over!';
        document.querySelector('.check').style.display = 'none';
    }

    if (highScore < score) {
        highScore = score;
        document.querySelector('.highscore').textContent = String(highScore);
    }

    document.querySelector('.score').textContent = String(score);
}

function showSuccessLight() {
    document.querySelector('body').style.backgroundColor = '#60b347';
    setTimeout(() => {
        document.querySelector('body').style.backgroundColor = '#222';
    }, 200);
}

function showErrorLight() {
    document.querySelector('body').style.backgroundColor = 'red';
    setTimeout(() => {
        document.querySelector('body').style.backgroundColor = '#222';
    }, 200);
}

document
    .querySelector('.check')
    .addEventListener('click', calculateIfUserRight);

document.querySelector('.again').addEventListener('click', initGame);
