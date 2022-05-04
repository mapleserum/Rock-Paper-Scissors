//Coded by Daniel Gingras on April 24th 2022

//Taken from original experiment
const para = document.querySelector('p');
const div = document.querySelector('div');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        game(button.id);
      });
    });

/* function playGame(choice) {
if (choice === `rock`) {
para.textContent = `rock`;
} else if (choice === `paper`) {
para.textContent = `paper`;
} else if (choice == `scissors`) {
para.textContent = `scissors`;
} else {
para.textContent = `error or no selection yet`
}
} */

//Variables

let win = 0;
let lose = 0;
let draw = 0;

//Minor Functions

function tally() {
    if (victory === 'You Lose!') {
        ++lose;
    } else if (victory === 'You Win!') {
        ++win;
    } else {
        ++draw;
    }
    div.textContent = 'Wins: ' + win + '. Loses: ' + lose + '. Draws: ' + draw +'.'
}

function finalScore() {
    if (win > lose) {
   div.textContent = 'You win the match with ' + win + ' wins, ' + lose + ' losses, and ' + draw + ' draws. Congratulations!'
} else if (win < lose) {
   div.textContent = 'You lost the match with ' + win + ' wins, ' + lose + ' losses, and ' + draw + ' draws.'
} else {
    div.textContent = 'The match is a draw. You had ' + win + ' wins, ' + lose + ' losses, and ' + draw + ' draws.'
}
}

function reset() {
    win = 0;
    lose = 0;
    draw = 0;
}


//Game Function

function singleRound(playSelect, compSelect) {
    const rand = Math.random();

    if (rand <= .3333333333) {
        compSelect = 'Rock!';
    } else if (rand > .3333333333 && rand <= .6666666666) {
        compSelect = 'Paper!';
    } else if (rand > .6666666666) {
        compSelect = 'Scissors!';
    } else {
        compSelect = 'Error!';
    }

    if (compSelect == 'Rock!' && playSelect == 'scissors' ||
            compSelect == 'Scissors!' && playSelect == 'paper' ||
            compSelect == 'Paper!' && playSelect == 'rock') {
        victory = 'You Lose!';
    } else if (compSelect == 'Rock!' && playSelect == 'paper' ||
            compSelect == 'Scissors!' && playSelect == 'rock' ||
            compSelect == 'Paper!' && playSelect == 'scissors') {
        victory = 'You Win!';
    } else if (compSelect == 'Paper!' && playSelect == 'paper' ||
            compSelect == 'Rock!' && playSelect == 'rock' ||
            compSelect == 'Scissors!' && playSelect == 'scissors') {
        victory = 'Draw!';
    } else {
        victory = 'Draw';
        div.textContent = 'Error! Please enter a valid choice.'
    }
    para.textContent = victory + " Computer chose: " + compSelect
    tally()
}

function game(playSelect) {
    for (let i = 0; i < 5; i++) {
        if (i <= 5) {
            singleRound(playSelect)
        } else {
            div.textContent = 'Error!'
     }
    }
     finalScore()
     reset()
     return
}