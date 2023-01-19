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
    yourScoreEl.textContent += " " + "I"
    playerScore += 1
} else if (randomNum === 1) {
    //nothing
} else {
    cpuScoreEl.textContent += " " + 'I'
    cpuScore += 1
}
if (playerScore === 5) {
    winLossEl.textContent = "Congrats you have beat the computer!!"
    yourScoreEl.textContent = "Your Score:"
    cpuScoreEl.textContent = "CPU Score:"
} else {
    //nothing
    winLossEl.textContent = "You got this keep going"
}
if (cpuScore === 5) {
    winLossEl.textContent = "You Lost :( Play Again"
    yourScoreEl.textContent = "Your Score:"
    cpuScoreEl.textContent = "CPU Score:"    
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
    cpuScoreEl.textContent += " " + 'I'
    cpuScore += 1
} else {
    yourScoreEl.textContent += " " + "I"
    playerScore += 1
}
if (playerScore === 5) {
    winLossEl.textContent = "Congrats you have beat the computer!!"
    yourScoreEl.textContent = "Your Score:"
    cpuScoreEl.textContent = "CPU Score:"
} else {
    //nothing
    winLossEl.textContent = "You got this keep going"
}
if (cpuScore === 5) {
    winLossEl.textContent = "You Lost :( Play Again"
    yourScoreEl.textContent = "Your Score:"
    cpuScoreEl.textContent = "CPU Score:"    
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
    cpuScoreEl.textContent += " " + 'I'
    cpuScore += 1
} else if (randomNum === 1) {
    yourScoreEl.textContent += " " + "I"
    playerScore += 1
} else {
    //nothing
}
if (playerScore === 5) {
    winLossEl.textContent = "Congrats you have beat the computer!!"
    yourScoreEl.textContent = "Your Score:"
    cpuScoreEl.textContent = "CPU Score:"
} else {
    //nothing
    winLossEl.textContent = "You got this keep going"
}
if (cpuScore === 5) {
    winLossEl.textContent = "You Lost :( Play Again"
    yourScoreEl.textContent = "Your Score:"
    cpuScoreEl.textContent = "CPU Score:"    
} else {
    //nothing
    winLossEl.textContent = "You got this keep going"
}

}
