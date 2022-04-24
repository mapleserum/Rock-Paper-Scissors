let computerSelection
let victory

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
    const rand = Math.random();
    let playerSelection = rockPaperScissors.toLowerCase()

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
    } else if (computerSelection == 'Scissors!' && playerSelection == 'paper') {
        victory = 'You Lose!'
    } else if (computerSelection == 'Paper!' && playerSelection == 'rock') {
        victory = 'You Lose!'
    } else if (computerSelection == 'Rock!' && playerSelection == 'paper') {
        victory = 'You Win!'
    } else if (computerSelection == 'Scissors!' && playerSelection == 'rock') {
        victory = 'You Win!'
    } else if (computerSelection == 'Paper!' && playerSelection == 'scissors') {
        victory = 'You Win!'
    } else {
        victory = 'Draw!'
    }
    return victory + " Computer chose: " + computerSelection
}