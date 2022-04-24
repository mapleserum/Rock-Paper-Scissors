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

function singleRound(playerSelection) {
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

    if (computerSelection == 'Rock!' && playerSelection == 'Scissors!') {
        victory = 'You Lose'
    } else if (computerSelection == 'Scissors!' && playerSelection == 'Paper!') {
        victory = 'You Lose'
    } else if (computerSelection == 'Paper!' && playerSelection == 'Rock!') {
        victory = 'You Lose'
    } else if (computerSelection == 'Rock!' && playerSelection == 'Paper!') {
        victory = 'You Win'
    } else if (computerSelection == 'Scissors!' && playerSelection == 'Rock!') {
        victory = 'You Win'
    } else if (computerSelection == 'Paper!' && playerSelection == 'Scissors!') {
        victory = 'You Win'
    } else {
        victory = 'Draw'
    }
    return victory + " Computer chose: " + computerSelection

}