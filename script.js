let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10)
}

const compareGuesses = (userGuess, computerGuess, target) => {
    let userDiff = Math.abs(userGuess - target);
    let computerDiff = Math.abs(computerGuess - target);

    if (userDiff <= computerDiff) {
        return true;
    }
    else {
        return false;
    }
}

const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    }
    if (winner === 'computer') {
        computerScore++;
    }
}

const advanceRound = () => currentRoundNumber++;