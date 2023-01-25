const choices =  ['rock','paper','scissors'];
let comp_score = 0;
let player_score = 0;
let player_score_object = document.querySelector('#player-score');
let comp_score_object = document.querySelector('#comp-score');
let player_choices = document.querySelectorAll('.player-choice');
let current_choice;
let comp_current_choice;
player_score_object.textContent = `Your-Score: ${player_score}`;
comp_score_object.textContent= `Comp-Score: ${comp_score}`;



function playGame(e){
    

    if (current_choice){
        current_choice.classList.remove('selected');
        comp_current_choice.classList.remove('selected');
    }
    let comp_choice = getComputerChoice();
    let comp_element = document.querySelector(`#comp-${comp_choice}`)
    console.log
    current_choice = this;
    comp_current_choice = comp_element;
    current_choice.classList.add('selected');
    comp_current_choice.classList.add('selected');

    let current_choice_id = current_choice.id.slice(7);
    playRound(current_choice_id,comp_choice)
    
}



function getRandomInt(min,max) {
    return Math.floor(Math.random() * (max - min)) + min; 
}


function getComputerChoice () {
    return choices[getRandomInt(0,choices.length)];
}

function playRound(playerSelection,compSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection ===  compSelection) {
        console.log('draw');

    }else if (playerSelection == 'rock') {
        if (compSelection == 'paper'){
            console.log('You lose, paper beats rock!');
            comp_score++;
            comp_score_object.textContent= `Comp-Score: ${comp_score}`;
        }else{
            console.log('You win, rock beats scissors');
            player_score++;
            player_score_object.textContent = `Your-Score: ${player_score}`;
        }
    }else if(playerSelection =='paper'){
        if(compSelection =='scissors'){
            console.log('You lose, scissors beats paper');
            comp_score++;
            comp_score_object.textContent= `Comp-Score: ${comp_score}`;
        }else{
            console.log('You win, paper beats rock');
            player_score++;
            player_score_object.textContent = `Your-Score: ${player_score}`;
            
        }
    }else if(playerSelection =='scissors'){
        if (compSelection == 'rock'){
            console.log('You lose, rock beats scissors');
            comp_score++;
            comp_score_object.textContent= `Comp-Score: ${comp_score}`;
        }else{
            console.log('You win,scissors beats paper');
            player_score++;
            player_score_object.textContent = `Your-Score: ${player_score}`;
        }
    }
}


player_choices.forEach(k => k.addEventListener('click',playGame))