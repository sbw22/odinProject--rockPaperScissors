let compChoice;
const computerPlay = (compChoice) => {
    const randomNumber = Math.floor((Math.random()*3)) + 1;
     if (randomNumber == 1) {
        compChoice = 'Rock';
    } else if (randomNumber == 2) {
        compChoice = 'paper';
    } else if (randomNumber == 3) {
        compChoice = 'scissors';
    } else {
        compChoice = 'Error: random number outside range of 1-3';
    }
    return compChoice;
}
console.log(computerPlay(compChoice));
