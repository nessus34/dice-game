// variables
let randomNumber = 0;
let roundScore = 0;
let activePlayer = 0;
let scores = [0, 0];

// Get the #dice element
const dice = document.querySelector("#dice-img");
// Get roll button
const roll = document.querySelector("#roll-dice-0");
// Get hold button
const hold = document.querySelector("#hold-0");
// Get new game button
const newGame = document.querySelector("#next-party");
// Get the players
const player0 = document.querySelector("#player-1");
const player1 = document.querySelector("#player-2");

// Roll the dice and display the round score
const rollDice = function () {
// Create a random number
randomNumber = Math.floor(Math.random() * 6) + 1;

// Display dice
dice.src = "./img/dices/dice-" + randomNumber + ".png";


// Round score
if (randomNumber !== 1) {
roundScore += randomNumber;
// Display round score
document.querySelector(`#round-${activePlayer}`).textContent = roundScore;
} else {
changePlayer();
}
};

// Change player
const changePlayer = function () {
roundScore = 0;
document.querySelector(`#round-${activePlayer}`).textContent = roundScore;
activePlayer = activePlayer === 0 ? 1 : 0;
player0.classList.toggle("text-danger");
player1.classList.toggle("text-danger");
};

// Hold the score
const holdScore = function () {
// add current score
scores[activePlayer] += roundScore;
// display score
document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer];

// check player score
if (scores[activePlayer] >= 100) {
    document.querySelector(`#player-${activePlayer + 1}`).innerHTML = `Player ${activePlayer + 1}<span class="text-success"> Wins!</span>`;
    document.querySelector(`#player-${activePlayer + 1}`).classList.add("font-weight-bold");
    document.querySelector(`#player-${activePlayer + 1}`).classList.add("text-success");
    roll.disabled = true;
    hold.disabled = true;
  } else {
    // Change player
    changePlayer();
  }
}

// New game
const replay = function () {
document.location.reload();
};

// Listen for click events
roll.addEventListener("click", rollDice, false);
hold.addEventListener("click", holdScore, false);
newGame.addEventListener("click", replay, false);