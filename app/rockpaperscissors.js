console.log('Hello World');

function getInput() {
    return prompt("Please choose either 'rock', 'paper', or 'scissors'.");
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
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === 'rock') {
        if (computerMove === 'scissors') {
            winner = 'Player';
            console.log ('Player Wins!');
        }
        else if (computerMove === 'paper') {
            winner = 'Computer';
            console.log ('Computer Wins!');
        }
        else if (computerMove === 'rock') {
            winner = 'Tie';
            console.log ('Round is a Tie!');
        }
    }

    else if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            winner = 'Computer';
            console.log ('Computer Wins!');
        }
        else if (computerMove === 'paper') {
            winner = 'Player';
            console.log ('Player Wins!');
        }
        else if (computerMove === 'scissors') {
            winner = 'Tie';
            console.log ('Round is a Tie!');
        }
    }

    else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            winner = 'Player';
            console.log ('Player Wins!');
        }
        else if (computerMove === 'scissors') {
            winner = 'Computer';
            console.log ('Computer Wins!');
        }
        else if (computerMove === 'paper') {
            winner = 'Tie';
            console.log ('Round is a Tie!')
        }
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    var winner;
    while (playerWins < 5 && computerWins < 5) {
        var playerMove = getInput();
        var computerMove = randomPlay();
        winner = getWinner(playerMove,computerMove);
        if (winner === 'Player') {
            playerWins += 1;
            console.log('Player chose ' + playerMove + ' and Computer chose ' + computerMove + '. Player wins this round!');
        }
        else if (winner === 'Computer') {
            computerWins += 1;
            console.log('Player chose ' + playerMove + ' and Computer chose ' + computerMove + '. Computer wins this round!');
        }
        else {
            console.log('This round is a tie!');
        }
    }
    return console.log('Final score is Player ' + playerWins + ', Computer ' + computerWins);

}

playToFive();
