const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_CHOICE = ROCK;

let isGameRunning = false;

function getPlayerChoice() {
    const userSelection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
    if (userSelection !== ROCK && userSelection !== PAPER && userSelection !== SCISSORS) {
        alert(`Invalid Choice. We chose ${DEFAULT_CHOICE} for you.! `);
        return DEFAULT_CHOICE;
    }
    else {
        return userSelection;
    }
}

function startGame() {
    if (isGameRunning) {
        return;
    }
    else {
        isGameRunning = true;
        console.log('GAME IS STARTING...');
        const playerSelection = getPlayerChoice();
        console.log(playerSelection);
    }
}

startGameBtn.addEventListener('click', startGame);