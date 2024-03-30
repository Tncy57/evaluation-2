## Dice Game

### Description:
Creation of a small web browser game using the DOM.
At the end of the project, the client should receive the following elements:
- A functional game
- A readable interface that matches the provided mockup.
This involves several global functionalities:
On the front-end (client-side):
- The ability to start a new game
- The ability to hold the current score
- The ability to roll the dice
- The ability to have 2 players

### Rules:
The game consists of 2 players on a single screen.
Each player has a temporary score (ROUND) and a global score (GLOBAL).
Each turn, the player's ROUND is initialized to 0 and they can roll a die as many times as they want. The result of a roll is added to the ROUND.
During their turn, the player can decide at any time to:
- Click on the "Hold" option, which sends the ROUND points to the GLOBAL. It will then be the other player's turn.
- Roll the dice. If they get a 1, their ROUND score is lost, and it's the end of their turn.
The first player to reach 100 points globally wins the game.


