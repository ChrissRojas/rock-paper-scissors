const choices =  ['rock','paper','scissors'];


function getRandomInt(min,max) {
    return Math.floor(Math.random() * (max - min)) + min; 
}


function getComputerChoice () {
    return choices[getRandomInt(0,choices.length)];
}

function playRound(playerSelection,compSelection){
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection ===  compSelection) {
        console.log('draw');
    }else if (playerSelection == 'rock') {
        if (compSelection == 'paper'){
            console.log('You lose, paper beats rock!');
        }else{
            console.log('You win, rock beats scissors');
        }
    }else if(playerSelection =='paper'){
        if(compSelection =='scissors'){
            console.log('You lose, scissors beats paper');
        }else{
            console.log('You win, paper beats rock');
        }
    }else if(playerSelection =='scissors'){
        if (compSelection == 'rock'){
            console.log('You lose, rock beats scissors');
        }else{
            console.log('You win,scissoes beats paper');
        }
    }
}

function main(){

}

main()
