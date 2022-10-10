'use strict';

//selecting the element
const scoreZero = document.getElementById('score--0');
const scoreOne = document.getElementById('score--1');
const diceEle = document.querySelector('.dice');

//starting conditons
scoreZero.textContent = 0;
scoreOne.textContent = 0;
diceEle.classList.add("hidden");
