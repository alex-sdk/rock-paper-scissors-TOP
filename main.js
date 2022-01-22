
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

function playerPlay() {
    let choice = prompt("Rock, Paper, or Scissors?")
    return choice.toLowerCase();
}

function playRound(computerSelection, playerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's a tie!")
        return null;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log("You win this round!")
        return true;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log("You win this round!")
        return true;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log("You win this round!")
        return true;
    } else {
        console.log("The computer wins this round!")
        return false;
    }   
}

function game() {
    let computerScore = 0;
    let playerScore = 0;
    while(true){
        const computerSelection = computerPlay();
        const playerSelection = playerPlay();
        const outcome = playRound(computerSelection, playerSelection)

        if (outcome === true) {
            ++playerScore;
        } else if (outcome === false) {
            ++computerScore;
        }
        
        console.log(`Computer score:${computerScore} Your score:${playerScore}`)
       
        if (computerScore === 5) {
            console.log("Computer wins the game!")
            break
        } else if (playerScore === 5) {
            console.log("You win the game!")
            break
        }
    }
}

game()