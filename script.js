'use strict';

//selecting the element
const playerZero = document.querySelector('.player--0')
const playerOne = document.querySelector('.player--1')
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const diceEle = document.querySelector('.dice');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newBtn = document.querySelector('.btn--new');
const currentZero = document.getElementById('current--0')
const currentOne = document.getElementById('current--1')
score0.textContent = 0;
score1.textContent = 0;
diceEle.classList.add("hidden");

//starting conditons
const score = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerZero.classList.toggle("player--active");
  playerOne.classList.toggle("player--active");
}

//dice role
rollBtn.addEventListener('click', () => {
  if (playing){
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEle.classList.remove("hidden");
    diceEle.src = `dice-${dice}.png`;

    if(dice !== 1) {
      currentScore += dice
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

holdBtn.addEventListener("click", function() {
  playing = false;
  score[activePlayer] += currentScore
  document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
  //add current score to active player score
  //check if player score is >= 100
  if (score[activePlayer] >= 50){
    //player has won
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
  } else {
    switchPlayer();
  }
});
