//This determines what the computer chooses and number value
function getComputerChoice () {
    computerValue = Math.floor(Math.random() * 3);
    if (computerValue === 0) {
        return computerChoice = "ROCK";
    } else if (computerValue === 1) {
        return computerChoice = "PAPER";
    } else {
        return computerChoice = "SCISSORS";
    }
}

//This determines what the human chooses and the number value
function getHumanChoice () {
    humanChoice = prompt("What will you choose?", "Rock, Paper, Scissors");
    humanChoice = humanChoice.trim();
    return humanChoice = humanChoice.toUpperCase();
}

//Scoring variables
let humanScore = 0;
let computerScore = 0;

//Plays the round and determines the winner
function playRound () {
    humanChoice = getHumanChoice();
    console.log ( "The Player has chosen " + humanChoice + "!");
    computerChoice = getComputerChoice();
    console.log ( "The Computer has chosen " + computerChoice + "!");
    if (humanChoice === computerChoice) {
        Tie = true;
        console.log("You tie! You've both have chosen "+humanChoice);
    } else if ((humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
        (humanChoice === "PAPER" && computerChoice === "ROCK") ||
        (humanChoice === "SCISSORS" && computerChoice === "PAPER")) {
        ++humanScore;
        console.log("You Win! " + humanChoice + " beats " + computerChoice + "!");
    } else {
        ++computerScore;
        console.log("You Lose! " + computerChoice + " beats " + humanChoice + "!");
    }
}

//This repeats the rounds until there has been 5 wins
for (let round = 1;  (humanScore < 5) && (computerScore < 5 ); ++round) {
    console.log("--------------------------------------------");
    console.log("Round " + round);
    playRound();
    console.log("Player Score = " + humanScore);
    console.log("Computer Score = " +computerScore);
    
}
//Who won the entire game?
if (humanScore > computerScore) {
    console.log ("Game end! The Player has won the game!");
    } else {
       console.log("Game end! The Computer has won the game!");
    }