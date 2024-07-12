
    // Write the code so that getComputerChoice will randomly 
    // return one of the following
    // string values: “rock”, “paper” or “scissors”.
    

function getComputerChoice(){

    const choices = [`Rock`, `Paper`, `Scissors`];
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex];

    // const choices = declaring the three choices w/c is rock, paper, scissors.
    // const randomIndex = randomized the choices (choices.length)
    // return choices[randomIndex]
    
}

console.log(getComputerChoice());

