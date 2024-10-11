let rounds = 5;
let playerWins = 0;
let computerWins = 0;

for (let i = 0; i < rounds; i++) {
    let humanChoice = prompt('Please choose between rock, paper or scissors.');
    humanChoice = humanChoice.toLowerCase();
    let choiceArray = ['paper', 'rock', 'scissors'];
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice = choiceArray[randomNum];
    console.log(`The choice you made is ${humanChoice} and the computer chose ${computerChoice}.`);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log("You win!");
        playerWins++;
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log("You win!");
        playerWins++;
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        console.log("You lose!");
        computerWins++;
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        console.log("You lose!");
        computerWins++;
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        console.log("You lose!");
        computerWins++;
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log("You win!");
        playerWins++;
    } else {
        console.log("Wrong input, try again");
    }
}

console.log(`Final Score: You got - ${playerWins}, Computer got - ${computerWins}`);