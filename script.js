let computerSelection
let victory
let win = 0
let lose = 0
let draw = 0
let finalScore

alert('Matches are best of five. Good luck!')
alert(game())

function tally() {
    if (victory === 'You Lose!') {
        ++lose
    } else if (victory === 'You Win!') {
        ++win
    } else {
        ++draw
    }
    alert('Wins: ' + win + '. Loses: ' + lose + '. Draws: ' + draw +'.')
}

function score() {
    if (win > lose) {
   alert('You win the match with ' + win + ' wins, ' + lose + ' losses, and ' + draw + ' draws. Congratulations!')
} else if (win < lose) {
   alert('You lost the match with ' + win + ' wins, ' + lose + ' losses, and ' + draw + ' draws.')
} else {
    alert('The match is a draw. You had ' + win + ' wins, ' + lose + ' losses, and ' + draw + ' draws.')
}
}


function reset() {
    win = 0
    lose = 0
    draw = 0
}


function computerPlay() {
    const rand = Math.random();
    if (rand <= .3333333333) {
        computerSelection = 'Rock!'
    } else if (rand > .3333333333 && rand <= .6666666666) {
        computerSelection = 'Paper!'
    } else if (rand > .6666666666) {
        computerSelection = 'Scissors!'
    } else {
        computerSelection = 'Error!'
    }
    return computerSelection
}

function singleRound(rockPaperScissors, computerSelection) {
    let answer = prompt('Choose Rock, Paper, or Scissors:')
    let playerSelection = answer.toLowerCase()


    const rand = Math.random();

    if (rand <= .3333333333) {
        computerSelection = 'Rock!'
    } else if (rand > .3333333333 && rand <= .6666666666) {
        computerSelection = 'Paper!'
    } else if (rand > .6666666666) {
        computerSelection = 'Scissors!'
    } else {
        computerSelection = 'Error!'
    }

    if (computerSelection == 'Rock!' && playerSelection == 'scissors') {
        victory = 'You Lose!'
        alert(victory + " Computer chose: " + computerSelection)
        tally()
    } else if (computerSelection == 'Scissors!' && playerSelection == 'paper') {
        victory = 'You Lose!'
        alert(victory + " Computer chose: " + computerSelection)
        tally()
    } else if (computerSelection == 'Paper!' && playerSelection == 'rock') {
        victory = 'You Lose!'
        alert(victory + " Computer chose: " + computerSelection)
        tally()
    } else if (computerSelection == 'Rock!' && playerSelection == 'paper') {
        victory = 'You Win!'
        alert(victory + " Computer chose: " + computerSelection)
        tally()
    } else if (computerSelection == 'Scissors!' && playerSelection == 'rock') {
        victory = 'You Win!'
        alert(victory + " Computer chose: " + computerSelection)
        tally()
    } else if (computerSelection == 'Paper!' && playerSelection == 'scissors') {
        victory = 'You Win!'
        alert(victory + " Computer chose: " + computerSelection)
        tally()
    } else {
        victory = 'Draw!'
        alert(victory + " Computer chose: " + computerSelection)
        tally()
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        if (i <= 5) {
            singleRound()
        } else {
            alert('Error!')
     }
    }
     score()
     reset()
     alert('Okay! Next match coming up!')
     alert(game())
}