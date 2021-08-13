const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_CHOICE = ROCK;
const GAME_DRAW = "IT WAS A DRAW";
const PLAYER_WINS = "PLAYER WINS";
const COMPUTER_WINS = "COMPUTER WINS";

let isGameRunning = false;

function getMachineChoice() {
  const randomNumber = Math.random();
  if (randomNumber < 0.34) {
    return ROCK;
  } else if (randomNumber < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
}

function getPlayerChoice() {
  const userSelection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ""
  ).toUpperCase();
  if (
    userSelection !== ROCK &&
    userSelection !== PAPER &&
    userSelection !== SCISSORS
  ) {
    alert(`Invalid Choice. We chose ${DEFAULT_CHOICE} for you.! `);
    return DEFAULT_CHOICE;
  } else {
    return userSelection;
  }
}

function findWinner(computerChoice, playerChoice) {
  if (computerChoice === playerChoice) {
    return GAME_DRAW;
  } else if (
    (computerChoice === ROCK && playerChoice === PAPER) ||
    (computerChoice === PAPER && playerChoice === SCISSORS) ||
    (computerChoice === SCISSORS && playerChoice === ROCK)
  ) {
    return PLAYER_WINS;
  } else {
    return COMPUTER_WINS;
  }
}

function startGame() {
  if (isGameRunning) {
    return;
  } else {
    isGameRunning = true;
    console.log("GAME IS STARTING...");
    const playerSelection = getPlayerChoice();
    const computerSelection = getMachineChoice();
    const gameWinner = findWinner(computerSelection, playerSelection);
    console.log('PLAYER SELECTED: ', playerSelection);
    console.log('COMPUTER SELECTED: ', computerSelection);
    console.log(gameWinner);
    isGameRunning = false;
  }
}

startGameBtn.addEventListener("click", startGame);
