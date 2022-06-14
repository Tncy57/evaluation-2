let globalScores;
let roundScore;
let activePlayer;
let gamePlaying;

const img = document.querySelector('img');
const player1RoundScore = document.querySelector("#p1RoundScore");
const player2RoundScore = document.querySelector("#p2RoundScore");

startGame();

const rollButton = document.querySelector('#roll');

rollButton.addEventListener("click", () => {

  if(gamePlaying) {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    let dice = document.querySelector('#dice-image');
    dice.style.display = "block";
    dice.src = `diceImg/dice${randomNumber}.png`;

    if(randomNumber !== 1) {
      roundScore += randomNumber;
      document.querySelector('#round-score-' + activePlayer).innerHTML = roundScore;
    } else {
      // Other player's turn
      playerNext();
    }
  }
})



function startGame() {
  gamePlaying = true;
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;

}