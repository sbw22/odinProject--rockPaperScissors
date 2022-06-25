
const computerPlay = () => {
    let compChoice;
    const randomNumber = Math.floor((Math.random()*3)) + 1;
     if (randomNumber == 1) {
        compChoice = 'rock';
    } else if (randomNumber == 2) {
        compChoice = 'paper';
    } else if (randomNumber == 3) {
        compChoice = 'scissors';
    } else {
        compChoice = 'Error: random number outside range of 1-3';
    }
    return compChoice;
}
const personPlay = () => {
    let personChoice = prompt('Enter your choice: ');
    personChoice = personChoice.toLowerCase();
    return personChoice;
}

const playRound = (cChoice, pChoice) => {
    if (cChoice == 'rock' && pChoice == 'scissors'){
        return 'You lose! Rock beats Scissors!';
    } else if (cChoice == 'paper' && pChoice == 'rock'){
        return 'You lose! Paper beats Rock!';
    } else if (cChoice == 'scissors' && pChoice == 'paper'){
        return 'You lose! Scissors beats Rock!';
    } else if (cChoice == 'rock' && pChoice == 'paper'){
        return 'You win! Paper beats Rock!';
    } else if (cChoice == 'paper' && pChoice == 'scissors'){
        return 'You win! Scissors beats Paper!';
    } else if (cChoice == 'scissors' && pChoice == 'rock'){
        return 'You win! Rock beats Scissors!';
    } else {
        return 'tie!';
    }
}




cChoice = computerPlay();
pChoice = personPlay();
console.log(playRound(cChoice, pChoice));