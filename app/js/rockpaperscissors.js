////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === computerMove) {
        winner = 'tie';
    }
    else if (((playerMove === 'rock') && (computerMove === 'scissors'))||((playerMove === 'scissors') && (computerMove === 'paper'))||((playerMove === 'paper') && (computerMove === 'rock'))) {
        winner = 'player';
    }
    else {
        winner = 'computer';
    }
        return winner;
}

function playToFive() {
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < 5 && computerWins < 5){
        console.log("Let's play Rock, Paper, Scissors");
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);
        if (winner === 'computer'){
             computerWins +=1;
             console.log("The computer won!");
        }
        else if (winner==='player'){
            playerWins +=1;
            console.log("You won!");
        }
        console.log("the score is now player " + playerWins + " and computer " + computerWins );

    }

    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
    
}

playToFive();