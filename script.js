"use strict";

function getComputerChoice() {
    let num = Math.floor(Math.random()*3);
    if (num === 0) return "Rock";
    else if (num === 1) return "Paper";
    else return "Scissors";
    }

function getHumanChoice() {
    return prompt("Enter Rock, Paper, or Scissors:");
    }

function playRound(computerChoice,humanChoice) {
    return;
    }

let computerScore = 0, humanScore = 0;
let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();