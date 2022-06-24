
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
    console.log(cChoice);
    console.log(pChoice);
}




cChoice = computerPlay();
pChoice = personPlay();
console.log(playRound(cChoice, pChoice));