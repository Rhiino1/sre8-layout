import '../styles/timer.css';

let timerDisplay = document.querySelector(`[data-chronometer]`);
const timer = nodecg.Replicant('timer');

timer.on('change', (newValue) => {
	if (newValue.hours === '00') {
		timerDisplay.textContent = `${newValue.minutes}:${newValue.seconds}.${newValue.tenthseconds}`
	} else {
		timerDisplay.textContent = `${newValue.hours}:${newValue.minutes}:${newValue.seconds}.${newValue.tenthseconds}`
	}
})
