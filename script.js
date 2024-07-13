
    // Write the code so that getComputerChoice will randomly 
    // return one of the following
    // string values: “rock”, “paper” or “scissors”.
    
    let humanScore = 0;
    let computerScore = 0;
    

function getComputerChoice(){

    const choices = [`rock`, `paper`, `scissor`];
    const randomIndex = Math.floor(Math.random() * 3)
    return choices[randomIndex];

    // const choices = declaring the three choices w/c is rock, paper, scissors.
    // const randomIndex = randomized the choices (choices.length)
    // return choices[randomIndex]
}

function getHumanChoice(){

    let hChoice = prompt(`Enter your choice (Rock, Paper, Scissor): `);
    return hChoice.toLowerCase();

}

function playRound(humanChoice, computerChoice){

    if(humanChoice === computerChoice){
        return `TIE!`;
    }

    else if(humanChoice === `rock` &&  computerChoice === `scissor`){
      humanScore++;
      return "You win. Rock beats scissor";
        
    }
    else if(humanChoice === `rock` &&  computerChoice === `paper`){
        computerScore++;
        return "You lose. Paper beats rock";
        
    }

    else if(humanChoice === `paper` &&  computerChoice === `rock`){
       humanScore++;
       return "You win. Paper beats rock";
        
    }
    else if(humanChoice === `paper` &&  computerChoice === `scissor`){
        computerScore++;
       return "You lose. Scissor beats paper";
        
    }
  
    else if(humanChoice === `scissor` &&  computerChoice === `paper`){
        humanScore++;
       return "You win. Scissor beats paper";
        
    }
    else if(humanChoice === `scissor` &&  computerChoice === `rock`){
        computerScore++;
       return "You lose. Rock beats scissor";
        
    }

    else{
       return `enter valid input!`;
    }
}


function playGame(){

    for(let i = 1; i <= 5; i++){

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(`Round: ${i}`);
        console.log(`Player: ${humanSelection}`);
        console.log(`Computer: ${computerSelection}`);

        let result = playRound(humanSelection, computerSelection);
        console.log(result)

        
    }
    console.log(`Current Score: Human ${humanScore}, Computer ${computerScore}`)
    if( humanScore > computerScore){

        console.log(`You won!`);
    }
    else if(computerScore > humanScore){
        console.log(`You lost`);
    }
    else{
        console.log("Tie!");
    }

}

playGame();