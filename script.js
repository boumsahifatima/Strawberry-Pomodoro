let timeLeft = 25 * 60; 
let timerId = null;

const timerDisplay = document.getElementById('timer');
const clickSound = new Audio('templets/beep.mp3');
const finishSound = new Audio('templets/sound.mp3');

function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

document.getElementById('start').addEventListener('click', () => {
    clickSound.play();
    if (timerId) return;
    timerId = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        } else {
            finishSound.play();
            clearInterval(timerId);
            alert("🌸 C'est fini ! Temps de faire une pause, ma petite fraise ! 🍓");
        }
    }, 1000);
});

document.getElementById('pause').addEventListener('click', () => {
    clearInterval(timerId);
    clickSound.play();
    timerId = null;
});

document.getElementById('reset').addEventListener('click', () => {
    clearInterval(timerId);
    clickSound.play();
    timerId = null;
    timeLeft = 25 * 60;
    updateDisplay();
});