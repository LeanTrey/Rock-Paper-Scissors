//✋✌️✊
const playerEl = document.getElementById('player-el')
const cpuEl = document.getElementById('cpu-el')
const yourScoreEl = document.getElementById('yourscore-el')
const cpuScoreEl = document.getElementById('cpuscore-el')
const borderEl = document.querySelector('.border')
const winLossEl = document.getElementById('winloss-el')
const rockEmoji = '✊';
const paperEmoji = '✋';
const scissorsEmoji = '✌️';
const emojis = [rockEmoji, paperEmoji, scissorsEmoji];
let playerScore = 0
let cpuScore = 0


function paperFunction() {
playerEl.textContent = '✋'
const randomNum = Math.floor(Math.random() * 3);
cpuEl.textContent = emojis[randomNum]
if (randomNum === 0) {
    playerScore += 1
    yourScoreEl.textContent = "Your Score: " + playerScore
} else if (randomNum === 1) {
    //nothing
} else {
    cpuScore += 1
    cpuScoreEl.textContent = "CPU Score: " + cpuScore
}
if (playerScore === 5) {
    yourScoreEl.textContent = "Winner!!"
    cpuScoreEl.textContent = "Loser"
    winLossEl.textContent = "Congrats you have beat the computer!!, Press Reset Button To Play Again"
} else {
    //nothing
    winLossEl.textContent = "You got this keep going"
}
if (cpuScore === 5) {
    winLossEl.textContent = "You Lost :( Play Again, Press Reset Button To Try Again"
    yourScoreEl.textContent = "Loser"
    cpuScoreEl.textContent = "Winner!!:"
} else {
    //nothing
    winLossEl.textContent = "You got this keep going"
}

}
function rockFunction() {
playerEl.textContent = '✊'
const randomNum = Math.floor(Math.random() * 3);
cpuEl.textContent = emojis[randomNum]
if (randomNum === 0) {
    // nothing, it's a tie
} else if (randomNum === 1) {
    cpuScore += 1
    cpuScoreEl.textContent = "CPU Score: " + cpuScore
} else {
    playerScore += 1
    yourScoreEl.textContent = "Your Score: " + playerScore
}
if (playerScore === 5) {
    yourScoreEl.textContent = "Winner!!:"
    cpuScoreEl.textContent = "Loser"
    winLossEl.textContent = "Congrats you have beat the computer!!, Press Reset Button To Play Again"
} else {
    //nothing
    winLossEl.textContent = "You got this keep going"
}
if (cpuScore === 5) {
    winLossEl.textContent = "You Lost :( Play Again, Press Reset Button To Try Again"
    yourScoreEl.textContent = "Loser"
    cpuScoreEl.textContent = "Winner!!:"  
} else {
    //nothing
    winLossEl.textContent = "You got this keep going"
}

}
function scissorFunction() {
playerEl.textContent = '✌️'
const randomNum = Math.floor(Math.random() * 3);
cpuEl.textContent = emojis[randomNum]
if (randomNum === 0) {
    cpuScore += 1
    cpuScoreEl.textContent = "CPU Score: " + cpuScore
} else if (randomNum === 1) {
    playerScore += 1
    yourScoreEl.textContent = "Your Score: " + playerScore
} else {
    //nothing
}
if (playerScore === 5) {
    yourScoreEl.textContent = "Winner!!:"
    cpuScoreEl.textContent = "Loser"
    winLossEl.textContent = "Congrats you have beat the computer!!, Press Reset Button To Play Again"
} else {
    //nothing
    winLossEl.textContent = "You got this keep going"
}
if (cpuScore === 5) {
    winLossEl.textContent = "You Lost :( Play Again, Press Reset Button To Try Again"
    yourScoreEl.textContent = "Loser"
    cpuScoreEl.textContent = "Winner!!:"
} else {
    //nothing
    winLossEl.textContent = "You got this keep going"
}

}
