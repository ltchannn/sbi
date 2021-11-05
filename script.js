const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');
const resetButton = document.getElementById('reset');
const startButton = document.getElementById('start');

const newYears = '5 Nov 2021 23:30:00';

let countDown = setInterval(Timer, 1000);

function Timer() {
	const newYearsDate = new Date(newYears);
	const currentDate = new Date();
	const totalSeconds = (newYearsDate - currentDate) / 1000;

	const days = Math.floor(totalSeconds / 3600 / 24);
	const hours = Math.floor(totalSeconds / 3600) % 24;
	const mins = Math.floor(totalSeconds / 60) % 60;
	const seconds = Math.floor(totalSeconds) % 60;

	daysEl.innerText = days >= 0 ? days : 0;
	hoursEl.innerText = hours >= 0 ? hours : 0;
	minsEl.innerText = mins >= 0 ? mins : 0;
	secondsEl.innerText = seconds >= 0 ? seconds : 0;
}

startButton.addEventListener('click', () => {
	setInterval(Timer, 1000);
});

resetButton.addEventListener('click', () => {
	clearInterval(countDown);
	daysEl.innerText = 0;
	hoursEl.innerText = 0;
	minsEl.innerText = 0;
	secondsEl.innerText = 0;
});
