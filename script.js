const picks = ["rock","scissor","paper"];
let playerSelection = '', computerSelection = '';
let playerScore = 0, computerScore = 0;

function computerPlay(){
    const random=Math.floor(Math.random()*picks.length);
     return picks[random];
}

function humanPlayerSelection(){
    let playerInput= prompt("Pick \"Rock, Paper or Scissor\"").toLowerCase();
   
    while(playerInput.length === 0 ||  picks.indexOf(playerInput) === -1){
        playerInput = prompt("Invalid input! Please try again. Pick \"scissor, rock or paper\"").toLowerCase();
    }
    return playerInput;
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == 'rock'){
        if(computerSelection == 'paper'){
            computerScore++;
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        }else if(computerSelection == 'scissor'){
            playerScore++;
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        } else {
            return `It's a Draw! you both pick ${playerSelection}`;
        }
        
    }else if(playerSelection == 'paper'){
        if(computerSelection == 'scissor'){
            computerScore++;
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        }else if(computerSelection == 'rock'){
            playerScore++;
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        } else {
            return `It's a Draw! you both pick ${playerSelection}`;
        }
    }else if(playerSelection == 'scissor'){
         if(computerSelection == 'rock'){
            computerScore++;
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        }else if(computerSelection == 'paper'){
            playerScore++;
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        } else {
            return `It's a Draw! you both pick ${playerSelection}`;
        }
    }
}

function game(){
    alert('This is Rock, Paper & Scissors Game!')
    for (let i = 0; i < 5; i++) {
        playerSelection = humanPlayerSelection();
        computerSelection = computerPlay();

        console.log(playRound(playerSelection, computerSelection));

        console.log(`Round${i + 1}: You = ${playerScore} vs Computer = ${computerScore}`)   
    }

    if(playerScore > computerScore){
        console.log('You Win!');
    }else if(playerScore < computerScore){
        console.log('You Lose!');
    }else{
        console.log("It's a tie!");
    }
     playerScore = 0, computerScore = 0;
}


