function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        return 'paper';
    } else if (randomNum === 1) {
        return 'rock';
    }
    return 'scissors';
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
    return false;  
}
function game() {
    
    let playerScore = 0; 
    let computerScore = 0; 
    
    const header = document.querySelector("header")
    const displayWinner = document.createElement('div');
    displayWinner.className = "winner";
    header.appendChild(displayWinner);

    const displayScore = document.querySelector(".displayScore")
    displayScore.textContent = `Score = ${playerScore} Computer score = ${computerScore}`;

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            //check who wins
            const whoWon = playRound(computerPlay(), button.id);
            //display who wins/score
            if (whoWon) {
                ++playerScore;
                displayWinner.textContent = "Player wins this round!";
                displayScore.textContent = `Score = ${playerScore} Computer score = ${computerScore}`;
            }
            else if ( whoWon == false) {
                ++computerScore;
                displayWinner.textContent = "Computer wins this round!";
                displayScore.textContent = `Score = ${playerScore} Computer score = ${computerScore}`;
            } else {
                displayWinner.textContent = "It's a tie.";
            }
            //check scores display game winner
            if (playerScore == 5) {
                displayWinner.textContent = "Player wins the game!"
                playerScore = 0;
                computerScore = 0;
                displayScore.textContent = `Score = ${playerScore} Computer score = ${computerScore}`;
            }
            else if (computerScore == 5) {
                displayWinner.textContent = "Computer wins the game!"
                playerScore = 0;
                computerScore = 0;
                displayScore.textContent = `Score = ${playerScore} Computer score = ${computerScore}`;
            }
        });
    });
}
game()