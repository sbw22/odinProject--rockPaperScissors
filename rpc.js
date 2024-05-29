let rBtn = document.getElementById('rock');
let pBtn = document.getElementById('paper');
let sBtn = document.getElementById('scissors');
let btns = document.getElementById('btns');
let results = document.getElementById('results');
let pScore = 0;
let cScore = 0;
let counter = 0;

//  const numOfGames = prompt('How many rounds do you want?');


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

function playRound (choice) {

    //const pChoice = choice;
    const cChoice = computerPlay();
    
    counter += 1;

    if (cChoice == 'rock' && choice == 'scissors'){
        cScore += 1;
        return 'You lose! Rock beats Scissors!';
    } else if (cChoice == 'paper' && choice == 'rock'){
        cScore += 1;
        return 'You lose! Paper beats Rock!';
    } else if (cChoice == 'scissors' && choice == 'paper'){
        cScore += 1;
        return 'You lose! Scissors beats Rock!';
    } else if (cChoice == 'rock' && choice == 'paper'){
        pScore += 1;
        return 'You win! Paper beats Rock!';
    } else if (cChoice == 'paper' && choice == 'scissors'){
        pScore += 1;
        return 'You win! Scissors beats Paper!';
    } else if (cChoice == 'scissors' && choice == 'rock'){
        pScore += 1;
        return 'You win! Rock beats Scissors!';
    } else {
        return 'tie!';
    }
}

const addResults = (result) => {
    if(pScore < 5 && cScore < 5) {
        let newR = document.createElement('div');
        newR.textContent = result + " The score is " + pScore + "-" + cScore + "."; 
        results.appendChild(newR);
    } else if(pScore == 5){
        let newR = document.createElement('div');
        newR.textContent = result; 
        results.appendChild(newR);

        let end = document.createElement('div');
        end.textContent = "YOU WIN!!!! The score was " + pScore + "-" + cScore + ".";
        results.appendChild(end);
    } else{
        let newR = document.createElement('div');
        newR.textContent = result;
        results.appendChild(newR);

        let end = document.createElement('div');
        end.textContent = "Computer Wins!!!! The score was " + pScore + "-" + cScore + ".";
        results.appendChild(end);
    }
}    

rBtn.addEventListener('click', (event) =>{
  if(/* numOfGames > counter && */ pScore < 5 && cScore < 5) {
    addResults(playRound('rock')); 
  }
});

pBtn.addEventListener('click', (event) =>{
    if ( /* numOfGames > counter && */ pScore < 5 && cScore < 5) {
        addResults(playRound('paper'));
    }
});

sBtn.addEventListener('click', (event) =>{
    if( /* numOfGames > counter && */ pScore < 5 && cScore < 5) {
        addResults(playRound('scissors'));
    }
});
       
    



/*
const game = () => {
    
    
    if(numOfGames >= 0) {
        console.log('in loop');
        rBtn.addEventListener('click', playRound);
        pBtn.addEventListener('click', playRound());
        sBtn.addEventListener('click', playRound());
        
        
        console.log('end of loop');
    }
    console.log('end of game');
}
game(); */





