//✋✌️✊
const playerEl = document.getElementById('player-el')
const cpuEl = document.getElementById('cpu-el')
const yourScoreEl = document.getElementById('yourscore-el')
const cpuScoreEl = document.getElementById('cpuscore-el')
const borderEl = document.querySelector('.border')
const resetBtnEl = document.querySelector('.reset-btn')
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
    yourScoreEl.textContent = "You Win!!"
    cpuScoreEl.textContent = "Loser :("
} else {
    //nothing
}
if (cpuScore === 5) {
  
    yourScoreEl.textContent = "You Lost :( Play Again"
    cpuScoreEl.textContent = "Winner!!:"
} else {
    //nothing
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
    yourScoreEl.textContent = "You Win!!"
    cpuScoreEl.textContent = "Loser :("
} else {
    //nothing
}
if (cpuScore === 5) {
    yourScoreEl.textContent = "You Lost :( Play Again"
    cpuScoreEl.textContent = "Winner!!:"  
} else {
    //nothing
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
    yourScoreEl.textContent = "You Win!!"
    cpuScoreEl.textContent = "Loser :("
} else {
    //nothing
}
if (cpuScore === 5) {
    yourScoreEl.textContent = "You Lost :( Play Again"
    cpuScoreEl.textContent = "Winner!!"
} else {
    //nothing
}

}
function resetBtn() {
    playerScore = 0
    cpuScore = 0
    yourScoreEl.textContent = "Your Score: "
    cpuScoreEl.textContent = "CPU Score: "
    cpuEl.textContent = "?"
    playerEl.textContent = "?"
}