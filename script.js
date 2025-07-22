"use strict";

function playGame() {
    
    function getComputerChoice() {
    let num = Math.floor(Math.random()*3);
    if (num === 0) return "rock";
    else if (num === 1) return "paper";
    else return "scissors";
    }

    function getHumanChoice() {
        return prompt("Enter Rock, Paper, or Scissors:");
        }

    function playRound() {

        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice().toLowerCase();

        if (computerChoice === humanChoice) console.log("You drew!");
        else if (computerChoice === "rock" && humanChoice === "paper") {
            console.log("You win! Paper beats rock.");
            humanScore++;
        }
        else if (computerChoice === "rock" && humanChoice === "scissors") {
            console.log("You lose! Rock beats scissors.");
            computerScore++;
        }
        else if (computerChoice === "paper" && humanChoice === "rock") {
            console.log("You lose! Paper beats rock.");
            computerScore++;
        }
        else if (computerChoice === "paper" && humanChoice === "scissors") {
            console.log("You win! Scissors beats paper.");
            humanScore++;
        }
        else if (computerChoice === "scissors" && humanChoice === "paper") {
            console.log("You lose! Scissors beats paper.");
            computerScore++;
        }
        else {
            console.log("You win! Rock beats scissors.");
            humanScore++;
        }
        }

    let computerScore = 0, humanScore = 0;
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    if (computerScore === humanScore) console.log("Draw!");
    else if (computerScore > humanScore) console.log("Computer wins!");
    else console.log("Player wins!")
}

playGame();