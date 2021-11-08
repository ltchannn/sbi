const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');
const resetButton = document.getElementById('reset');
const startButton = document.getElementById('start');

const newYears = '30 Nov 2021 24:00:00';

let inIntervId;

function startTimer() {
    if (!inIntervId) {
        inIntervId = setInterval(Timer, 1000)
    }
}

function Timer() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerText = days 
    hoursEl.innerText = hours 
    minsEl.innerText = mins 
    secondsEl.innerText = seconds 
}

function stopTimer() {
    clearInterval(inIntervId)
    inIntervId = null;
    daysEl.innerText = 0;
    hoursEl.innerText = 0;
    minsEl.innerText = 0;
    secondsEl.innerText = 0;
}

startButton.addEventListener('click', startTimer);

resetButton.addEventListener('click', stopTimer);
