'use strict';
/*
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
//////getting the random numbers for the secret numer to be guessed
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20; ////the initial score at every begining of the game
let highscore = 0; ///inital highscore

const displayMessage = function (message) {
  //shortcut
  document.querySelector('.message').textContent = message;
};

//////for the click event
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess); ////this will print the number we guessed and the type of value it is(since we av manually changed it from string to number).

  //////for the sceneriors
  if (!guess) {
    //  document.querySelector('.message').textContent = 'No Number!';////if the guess box is empty or value inputed is not a number
    displayMessage('No Number');
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number!'; ////if the number guessed is the same as the random number
    displayMessage('Correct Number');

    document.querySelector('.number').textContent = secretNumber; ////display the secret number
    /////changing the background color and width of the random number box
    document.querySelector('body').style.backgroundColor = ' #60b347';
    document.querySelector('.number').style.width = '30rem';
    ///////////////////////////////////////////////////////////

    ///// to initaiate the highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    ////if guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      /// what should happen if the score is above or below 0
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? ' Too high' : 'Too low'; /////if the number guessed is higher or lower than the random number(using ternary operator)
      displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
      score--;
      document.querySelector('.score').textContent = score; ///to update the score
    } else {
      ///// if your score is now below 1 i.e 0
      // document.querySelector('.message').textContent = ' you lost the game!';
      displayMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
    }

    ////wen guess is high
  } //else if (guess > secretNumber) {
  //   if (score > 1) {
  //     /// what should happen if the score is above or below 0
  //     document.querySelector('.message').textContent = ' Too high'; /////if the number guessed is higher than the random number
  //     score--;
  //     document.querySelector('.score').textContent = score; ///to update the score
  //   } else {
  //     document.querySelector('.message').textContent = ' you lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   //// if the guessed number is lower than the random number
  //   if (score > 1) {
  //     /// what should happen if the score is above or below 0
  //     document.querySelector('.message').textContent = ' Too low'; /////if the number guessed is higher than the random number
  //     score--; ////once the secret number is guessed wrong we redunce the score by 1(-1)
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = ' you lost the game!';
  //     document.querySelector('.score').textContent = 0; ////now we update the present score which will be the result of subtracting the initial score by 1 for every wrong guess
  //   }
  // }
});

//////initiatinh the 'again' button(to restart the game and restore all initial states);
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = ' start guessing...';
  displayMessage('start guessing....');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = ' #222';
  document.querySelector('.number').style.width = '15rem';
});
