
// rules: 
// Scissors cut Paper
//  Paper covers Rock
// Rock crushes Lizard
// izard poisons Spock
// Spock smashes Scissors
// Scissors decapitate Lizard
// Lizard eats Paper
// Paper disproves Spock
// Spock vaporizes Rock
// Rock crushes Scissors

const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreBoard = {
    player: 0,
    computer: 0
}

// Play game
function play(e) {
    restart.style.display = 'inline-block';
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    showWinner(winner, computerChoice);
}

// Get Computers Choice
function getComputerChoice() {
    const rand = Math.random();
    if(rand < 0.19) {
        return 'rock';
    } else if (rand <= 0.39) {
        return 'paper';
    } else if (rand <= 0.59) {
        return 'scissors';
    } else if (rand <= 0.79 ) {
        return 'lizard';
    } else {
        return 'spock';
    }
}

// Get game winner
function getWinner(p, c) {
    if(p === c){
        return 'draw';
    } //If the user chose rock...
    else if (p === "rock") {
        if (c === "scissors") {
            return "player";
        } else if (c === "paper") {
            return "computer";
        } else if (c === "lizard") {
            return "player" ;
        } else {
            return "computer" ;
        }
    }
    
    //If the user chose paper...
    else if (p === "paper") {
        if (c === "scissors") {
            return "computer";
        } else if (c === "rock") {
            return "player";
        } else if (c === "lizard") {
            return "computer";
        } else {
            return "computer";
        }
    }
    
    //If the user chose scissors...
    else if (p === "scissors") {
        if (c === "paper") {
            return "player" ;
        } else if (c === "rock") {
            return "computer" ;
        } else if (c === "lizard") {
            return "player" ;
        } else {
            return "computer";
        }
    }
    
    //If the user chose lizard...
    else if (p === "lizard") {
        if (c === "scissors") {
            return "player" ;
        } else if (c === "rock") {
            return "computer" ;
        } else if (c === "paper") {
            return "player";
        } else {
            return "player";
        }
    }
    
    //If the user chose spock...
    else if (p === "spock") {
        if (c === "scissors") {
            return "player";
        } else if (c === "rock") {
            return "player";
        } else if (c === "lizard") {
            return "computer";
        } else {
            return "computer";
        }
    }
}

function showWinner(winner, computerChoice) {
    if(winner === 'player') {
        // Inc player score
        scoreBoard.player++;
        // Show modal result
        result.innerHTML = `
            <h1 class='text-win'>You Win!</h1>
            <i class='fas fa-hand-${computerChoice} fa-5x'></i>
            <p>Computer chose <strong>${computerChoice}<strong></p>
    
        `;
    } else if(winner === 'computer') {
        // Inc computer score
        scoreBoard.computer++;
        // Show modal result
        result.innerHTML = `
            <h1 class='text-lose'>You Lose!</h1>
            <i class='fas fa-hand-${computerChoice} fa-5x'></i>
            <p>Computer chose <strong>${computerChoice}<strong></p>
    
        `;
    } else {
        result.innerHTML = `
            <h1>It's a draw!</h1>
            <i class='fas fa-hand-${computerChoice} fa-5x'></i>
            <p>Computer Chose <strong>${computerChoice}<strong></p>
    
        `;
    } 
    // Show score
    score.innerHTML = `
    <p>Player: ${scoreBoard.player}</p>
    <p>Computer: ${scoreBoard.computer}</p>
    `;

    modal.style.display = 'block';
} 


// Restart Game
function restartGame() {
    scoreBoard.player = 0;
    scoreBoard.computer = 0;
    score.innerHTML = `
    <p>Player: 0</p>
    <p>Computer: 0</p>
    `;
}

// Clear modal
function clearModal(e) {
    if(e.target == modal) {
        modal.style.display = 'none';
    }
}

// Event listeners
choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);