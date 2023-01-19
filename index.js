//✋✌️✊
const playerEl = document.getElementById('player-el')
const cpuEl = document.getElementById('cpu-el')
const yourScoreEl = document.getElementById('yourscore-el')
const cpuScoreEl = document.getElementById('cpuscore-el')
const rockEmoji = '✊';
const paperEmoji = '✋';
const scissorsEmoji = '✌️';
const emojis = [rockEmoji, paperEmoji, scissorsEmoji];

function paperFunction() {
playerEl.textContent = '✋'
const randomNum = Math.floor(Math.random() * 3);
if (randomNum === 1) {
return    yourScoreEl.textContent += " " + I
} else if (randomNum === 2) {
//nothing
} else {
return  cpuScoreEl.textContent += " " + I
}



cpuEl.textContent = emojis[randomNum]
}

function rockFunction() {
playerEl.textContent = '✊'
}
function scissorFunction() {
playerEl.textContent = '✌️'
}
