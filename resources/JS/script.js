"use strict";
const playerScore = document.querySelector(".player-score");
const botScore = document.querySelector(".bot-score");
const roundno = document.querySelector(".timer");
let count = 1;
let p,c;
document
  .querySelector(".round")
  .addEventListener("click", function increaseRound() {
    if (count <= 3) roundno.textContent = count;
    count += 1;
    botchoice();
  });

document
  .querySelector(".restart")
  .addEventListener("click", function restartGame() {
    playerScore.value = 0;
    botScore.value = 0;
    roundno.value = 1;
    playerScore.textContent = 0;
    botScore.textContent = 0;
    roundno.textContent = 1;
  });

const playerMove = document.querySelector(".player-pic");
const botMove = document.querySelector(".bot-pic");

document
  .querySelector(".rock")
  .addEventListener("click", function replaceimg(p) {
    playerMove.src = "resources/images/rock.png";
    p = "rock";
  });

document
  .querySelector(".paper")
  .addEventListener("click", function replaceimg(p) {
    playerMove.src = "resources/images/paper.png";
    p = "paper";
  });

document
  .querySelector(".scissors")
  .addEventListener("click", function replaceimg(p) {
    playerMove.src = "resources/images/scissors.png";
    p = "scissors";
  });

document
  .querySelector(".lizard")
  .addEventListener("click", function replaceimg(p) {
    playerMove.src = "resources/images/lizard.png";
    p = "lizard";
  });

document
  .querySelector(".spock")
  .addEventListener("click", function replaceimg(p) {
    playerMove.src = "resources/images/spock.png";
    p = "spock";
  });


console.log(p);

var choiceArr = ["rock", "paper", "scissors", "lizard", "spock"];
function botchoice() {
   c = choiceArr[Math.floor(Math.random() * choiceArr.length)];
  
}

console.log(c);
document.querySelector(".lock").addEventListener("click", function () {
  if (c === "rock") botMove.src = "resources/images/rock.png";
  else if (c === "paper") botMove.src = "resources/images/paper.png";
  else if (c === "scissors") botMove.src = "resources/images/scissors.png";
  else if (c === "lizard") botMove.src = "resources/images/lizard.png";
  else if (c === "spock") botMove.src = "resources/images/spock.png";
});
