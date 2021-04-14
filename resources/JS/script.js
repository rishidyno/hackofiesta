"use strict";
const playerScore = 0;
const botScore = 0;
const rock_btn = document.querySelector(".rock");
const paper_btn = document.querySelector(".paper");
const scissors_btn = document.querySelector(".scissors");
const lizard_btn = document.querySelector(".lizard");
const spock_btn = document.querySelector(".spock");
const mess = document.querySelector(".message");

function getCompChoice() {
  const choices = ["r", "p", "s", "l", "o"];
  return choices[Math.floor(Math.random() * 5)];
}

// console.log(getCompChoice());

function game(userChoice) {
  const botChoice = getCompChoice();
  console.log(userChoice);
  console.log(botChoice);
  switch (userChoice + botChoice) {
    case "rs":
      mess.textContent = "ROCK BEATS SCISSORS";
      break;

    case "rl":
      mess.textContent = "ROCK BEATS LIZARD";
      break;
    case "po":
      mess.textContent = "PAPER BEATS SPOCK";
      break;
    case "pr":
      mess.textContent = "PAPER BEATS ROCK";
       break;
    case "sl":
      mess.textContent = "SCISSORS BEATS LIZARD";
       break;
    case "sp":
      mess.textContent = "SCISSORS BEATS PAPER";
       break;
    case "os":
      mess.textContent = "SPOCK BEATS SCISSORS";
       break;
    case "or":
      mess.textContent = "SPOCK BEATS ROCK";
       break;
    case "ls":
      mess.textContent = "LIZARD BEATS SCISSORS";
       break;
    case "lp":
      mess.textContent = "LIZARD BEATS PAPER";
       
      console.log("USER WINS");
      break;
    case "sr":
      mess.textContent = "ROCK BEATS SCISSORS";
       break;
    case "lr":
      mess.textContent = "ROCK BEATS LIZARD";
       break;
    case "op":
      mess.textContent = "PAPER BEATS SPOCK";
       break;
    case "rp":
      mess.textContent = "PAPER BEATS ROCK";
       break;
    case "ls":
      mess.textContent = "SCISSORS BEATS LIZARD";
       break;
    case "ps":
      mess.textContent = "SCISSORS BEATS PAPER";
       break;
    case "so":
      mess.textContent = "SPOCK BEATS SCISSORS";
       break;
    case "ro":
      mess.textContent = "SPOCK BEATS ROCK";
       break;
    case "sl":
      mess.textContent = "LIZARD BEATS SCISSORS";
       break;
    case "pl":
      mess.textContent = "LIZARD BEATS PAPER";
      
      console.log("COMPUTER WINS");
      break;
  }
}

// game("r")

function main() {
  rock_btn.addEventListener("click", function () {
    game("r");
    // console.log("r");
  });
  paper_btn.addEventListener("click", function () {
    game("p");
  });
  scissors_btn.addEventListener("click", function () {
    game("s");
  });
  lizard_btn.addEventListener("click", function () {
    game("l");
  });
  spock_btn.addEventListener("click", function () {
    game("o");
  });
}

main();
