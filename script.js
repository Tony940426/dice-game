'use strict';

//selecting the element
const scoreZero = document.getElementById('score--0');
const scoreOne = document.getElementById('score--1');
const diceEle = document.querySelector('.dice');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.hold--roll');
const newBtn = document.querySelector('.new--roll');
const currentZero = document.getElementById('current--0')
const currentOne = document.getElementById('current--1')

//starting conditons
let currentScore = 0;
scoreZero.textContent = 0;
scoreOne.textContent = 0;
diceEle.classList.add("hidden");

//dice role
rollBtn.addEventListener('click', () => {
  const score = Math.trunc(Math.random() * 6) + 1;
  diceEle.classList.remove("hidden")
  diceEle.src = `dice-${score}.png`;
  console.log(score);

  if(score === 1) {
    scoreZero.textContent = 0;
  } else {
    scoreZero.textContent = Number(scoreZero.textContent) + score
    currentScore += score
    currentZero.innerText = currentScore
  }
})
