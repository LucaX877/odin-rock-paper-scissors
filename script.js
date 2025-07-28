"use strict";

function playGame() {

    let humanChoice, computerChoice, humanScore = 0, computerScore = 0;
    const buttons = document.querySelectorAll("button");
    let para = document.querySelector("p");

    for (const button of buttons) {
        button.addEventListener("click", () => {
            if (computerScore === 5 || humanScore === 5) {
                if (computerScore === humanScore) {
                    console.log("Draw!");
                    para.textContent = "Draw!";
                    return;
                } else if (computerScore > humanScore) {
                    console.log("Computer wins!");
                    para.textContent = "Computer wins!";
                    return;
                } else {
                    console.log("Player wins!")
                    para.textContent = "Player wins!";
                    return;
                }
            }
            humanChoice = button.textContent.toLowerCase();
            computerChoice = getComputerChoice();
            para = playRound(computerChoice, humanChoice, para);
        });
    }

    function getComputerChoice() {
        let num = Math.floor(Math.random()*3);
        if (num === 0) return "rock";
        else if (num === 1) return "paper";
        else return "scissors";
    }

    function playRound(computerChoice, humanChoice, para) {
        if (computerChoice === humanChoice) {
            console.log("You drew!");
            para.textContent = "You drew!"
        }else if (computerChoice === "rock" && humanChoice === "paper") {
            console.log("You win! Paper beats rock.");
            para.textContent = "You win! Paper beats rock.";
            humanScore++;
        }
        else if (computerChoice === "rock" && humanChoice === "scissors") {
            console.log("You lose! Rock beats scissors.");
            para.textContent = "You lose! Rock beats scissors.";
            computerScore++;
        }
        else if (computerChoice === "paper" && humanChoice === "rock") {
            console.log("You lose! Paper beats rock.");
            para.textContent = "You lose! Paper beats rock.";
            computerScore++;
        }
        else if (computerChoice === "paper" && humanChoice === "scissors") {
            console.log("You win! Scissors beats paper.");
            para.textContent = "You win! Scissors beats paper.";
            humanScore++;
        }
        else if (computerChoice === "scissors" && humanChoice === "paper") {
            console.log("You lose! Scissors beats paper.");
            para.textContent = "You lose! Scissors beats paper.";
            computerScore++;
        }
        else {
            console.log("You win! Rock beats scissors.");
            para.textContent = "You win! Rock beats scissors!";
            humanScore++;
        } 
        return para;
        }
}

playGame();