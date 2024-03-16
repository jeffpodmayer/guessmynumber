'use strict';
/*
console.log(document.querySelector(`.message`).textContent);

document.querySelector(`.message`).textContent = `Correct Number!🎉`;

console.log(document.querySelector(`.message`).textContent);

document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 10;

document.querySelector(`.guess`).value = 23;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    displayMessage(`No number!🚫`);

    // WHen player wins
  } else if (guess === secretNumber) {
    displayMessage(`Correct Number!🎉`);
    document.querySelector(`.number`).textContent = secretNumber;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }

    //when guess is too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `Too high!` : `Too low!`);
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `You lose!💥`;
      document.querySelector(`.score`).textContent = 0;
    }
  }
});

//resets the game
document.querySelector(`.again`).addEventListener(`click`, function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage(`Start guessing...`);
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
});
