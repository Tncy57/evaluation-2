const newGameButton = document.querySelector("#new");
const rollButton = document.querySelector("#roll");
const holdButton = document.querySelector("#hold");
const diceImg = document.querySelector("img");

let isGameOver, globalScores, roundScore, activePlayer;

const play = document.querySelector("#play");
play.style.display = "none";

const countDown = () => {
  document.querySelector("#play").remove();
  
  let countSound = new Audio("sounds/count-sound.wav")
  
  setTimeout(() => {
    countSound.play();
    document.querySelector("#three").style.display = "block";
    setTimeout(() => {
      document.querySelector("#three").style.display = "none";
      document.querySelector("#two").style.display = "block";
      setTimeout(() => {
        document.querySelector("#two").style.display = "none";
        document.querySelector("#one").style.display = "block";
        setTimeout(() => {
          document.querySelector("#one").style.display = "none";
          // Showing the Dice
          diceImg.style.display = "block";

          // Showing the buttons
          newGameButton.style.display = "block";
          rollButton.style.display = "block";
          holdButton.style.display = "block";
        }, 1000);
      }, 1000);
    }, 1000);
  }, 500);
}

function startGame() {
  isGameOver = false;
  globalScores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  diceImg.style.display = "none";
  play.style.display = "block";

  newGameButton.style.display = "none";
  rollButton.style.display = "none";
  holdButton.style.display = "none";

  // Count down 
  play.addEventListener("click", countDown);
 
}

startGame();

// Putting dice and count sound
const diceSound = new Audio("sounds/dice-sound.wav");
const lostRoundSound = new Audio("sounds/lost-round.wav");
const holdScoreSound = new Audio("sounds/hold-coin.wav");
const winnerSound =  new Audio("sounds/winner-sound.wav");
const newGameSound = new Audio("sounds/new-game-sound.wav")

const rollDice = () => {
  
   if(!isGameOver) {

    diceImg.classList.toggle("animation");
    diceSound.play();

    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 6) + 1; 
      diceImg.src = `diceImg/dice${randomNumber}.png`;
      if(randomNumber !== 1) {
        roundScore += randomNumber;
        document.querySelector('#round-player-' + activePlayer).textContent = roundScore;
        diceImg.classList.toggle("animation");
      } else {
        lostRoundSound.play();
        diceImg.classList.toggle("animation");
        nextPlayer();
      }    
    }, 1500);
   } 
}

const holdScore = () => {
  if(!isGameOver) {
    holdScoreSound.play();
    globalScores[activePlayer] += roundScore;
    document.querySelector('#global-' + activePlayer).textContent = globalScores[activePlayer];

    if(globalScores[activePlayer] >= 100) {
      winnerSound.play();
      document.querySelector('#name-' + activePlayer).textContent = `PLAYER ${activePlayer + 1} WON !`;
      document.querySelector('#name-' + activePlayer).style.color = "#2E8B57";
      document.querySelector('#name-' + activePlayer).style.fontWeight = "bold";

      document.querySelector('img').style.display = "none";
      document.querySelector('.player-area-' + activePlayer).classList.add('winner');

      // Remove active status
      document.querySelector('.player-area-' + activePlayer).classList.remove('active');

      isGameOver = true;
    } else {
      nextPlayer();
    }
  }
}

const newGame = () => {

  newGameSound.play();

  isGameOver = false;
  globalScores = [0, 0];
  //activePlayer = 0;
  roundScore = 0;
  diceImg.style.display = "block";
  
  // Reset Round Scores
  document.querySelector('#round-player-0').textContent = 0;
  document.querySelector('#round-player-1').textContent = 0;

  // Reset Global Scores
  document.querySelector('#global-0').textContent = 0;
  document.querySelector('#global-1').textContent = 0;

  // Reset Font Weight
  document.querySelector('#global-0').style.fontWeight = "normal";
  document.querySelector('#global-1').style.fontWeight = "normal";

  // Reset Winner status
  document.querySelector('#name-' + activePlayer).textContent = `PLAYER ${activePlayer + 1}`;
  document.querySelector('#name-' + activePlayer).style.color = `rgb(105, 105, 105)`;

  document.querySelector('.player-area-' + activePlayer).classList.remove('winner');

  // Giving Player 1 active status
  activePlayer = 0;
  document.querySelector(".player-area-0").classList.add("active");
  document.querySelector(".player-area-1").classList.remove("active");
  document.querySelector(".active-0").classList.add("active-point");
  document.querySelector(".active-1").classList.remove("active-point");
  document.querySelector('#name-0').style.fontWeight = "bold";
  document.querySelector('#name-1').style.fontWeight = "normal";


}

rollButton.addEventListener("click", rollDice);
diceImg.addEventListener("click", rollDice);
holdButton.addEventListener("click", holdScore);
newGameButton.addEventListener("click", newGame);

function nextPlayer() {
  // Ternary operator
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
  
  roundScore = 0;

  document.querySelector(".active-0").classList.toggle("active-point");
  document.querySelector(".active-1").classList.toggle("active-point");

  document.querySelector('#round-player-0').textContent = 0;
  document.querySelector('#round-player-1').textContent = 0;

  document.querySelector(".player-area-0").classList.toggle("active");
  document.querySelector(".player-area-1").classList.toggle("active");
}
