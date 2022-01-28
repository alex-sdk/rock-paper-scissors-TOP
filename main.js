
function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        return 'paper';
    } else if (randomNum === 1) {
        return 'rock';
    } else {
        return 'scissors';
    }
}


function game() {
    let playerScore = 0; 
    let computerScore = 0;
    
    const container = document.querySelector(".container")
    const buttons = document.querySelectorAll("button");
    const displayScore = document.createElement('span');
    container.appendChild(displayScore);
    const displayWinner = document.createElement('span');
    container.appendChild(displayWinner);
    
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            console.log(button.id)
            const whoWon = playRound(computerPlay(), button.id);
            if (whoWon) {
                playerScore++;
                displayWinner.textContent = "Player wins this round!";
            }
            else if ( whoWon == false) {
                computerScore++;
                displayWinner.textContent = "Computer wins this round!";
            } else {
                displayWinner.textContent = "It's a tie.";
            }
            displayScore.textContent = `Player score = ${playerScore} Computer score = ${computerScore}`;
        });
    });
}

function playRound(computerPlay, playerChoice) {
    
    if (computerPlay === playerChoice){
        return null;
    }
    else if (playerChoice === 'rock' && computerPlay === "scissors") {    
        return true;
    }
    else if (playerChoice === 'paper' && computerPlay === 'rock') {   
        return true;
    }
    else if (playerChoice === 'scissors' && computerPlay === 'paper') {     
        return true;
    }
    else {
        return false;
    }

}

game()