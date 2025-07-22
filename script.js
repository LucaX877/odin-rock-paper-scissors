"use strict";

function getComputerChoice() {
    let num = Math.floor(Math.random()*3);
    if (num === 0) return "rock";
    else if (num === 1) return "paper";
    else return "scissors";
    }

function getHumanChoice() {
    return prompt("Enter Rock, Paper, or Scissors:");
    }

function playRound(computerChoice,humanChoice) {
    humanChoice = humanChoice.toLowerCase();
    console.log(computerChoice,humanChoice);
    if (computerChoice === humanChoice) console.log("You drew!");
    else if (computerChoice === "rock" && humanChoice === "paper") console.log("You win! Paper beats rock.");
    else if (computerChoice === "rock" && humanChoice === "scissors") console.log("You lose! Rock beats scissors.");
    else if (computerChoice === "paper" && humanChoice === "rock") console.log("You lose! Paper beats rock.");
    else if (computerChoice === "paper" && humanChoice === "scissors") console.log("You win! Scissors beats paper.");
    else if (computerChoice === "scissors" && humanChoice === "paper") console.log("You lose! Scissors beats paper.");
    else console.log("You win! Rock beats scissors.");
    }

let computerScore = 0, humanScore = 0;
let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();
playRound(computerChoice,humanChoice);