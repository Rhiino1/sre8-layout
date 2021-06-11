import '../styles/generalPanel.css'

const ext_url = "http://localhost:9091/timer";

const raceMode = document.querySelector('#raceMode');
const raceModePlayersInput = document.querySelector('.race-players-names');
const playersQuantity = document.querySelector('#player-quantity-list')
const playersQuantityContainer = document.querySelector('#race-players-quantity-container');

const playersNames = document.querySelectorAll('.player-name');
const playersTwitchLinks = document.querySelectorAll('.twitch-icon');
const playersLabels = document.querySelectorAll('.players-twitch-label');
const playersContainer = document.querySelectorAll('.player-container');
const playersLinks = document.querySelectorAll('.playerLink');
const playersDones = document.querySelectorAll('.done-button-players');

const generateLinks = document.querySelector('#generar-links');
const resetLinks = document.querySelector('#reset-links');
const playButton = document.querySelector('#play');
const pauseButton = document.querySelector('#pause');
const resetButton = document.querySelector('#reset');

const raceModeEnabled = nodecg.Replicant('raceModeEnabled');
const racePlayersName = nodecg.Replicant('racePlayers');
const tokenLinks = nodecg.Replicant('tokenLinks');

NodeCG.waitForReplicants(raceModeEnabled, racePlayersName).then(() => {
	racePlayersName.on('change', value => {
		for (let i = 0; i < playersNames.length; i++) {
			playersNames[i].value = value.players[i];
			playersLabels[i].textContent = `${value.twitch[i]}`;
			playersTwitchLinks[i].href = `http://twitch.tv/${value.twitch[i]}`
		}

		if (racePlayersName.value.playing > 1) {
			playersQuantity.selectedIndex = value.playing - 2;
			console.log(playersQuantity.childNodes[racePlayersName.value.playing - 2], racePlayersName.value.playing - 2);
		} else {
			playersQuantity.selectedIndex = 0;
		}
		showPlayers()
	})

	raceModeEnabled.on('change', (value) => {
		resetLinksFunction()
		raceMode.checked = value;
		showPlayers()
	})

	tokenLinks.on('change', (value) => {
		if (value.length > 0) {
			generateLinks.classList.add('btn-disabled');
		} else {
			generateLinks.classList.remove('btn-disabled');
		}
		setLinks()
	})
})

raceMode.addEventListener('click', () => {
	if (raceMode.checked) {
		nodecg.sendMessage('raceMode', true);
		raceModeEnabled.value = true;
	} else {
		nodecg.sendMessage('raceMode', false);
		raceModeEnabled.value = false;
	}
})

function setInputPlayersName() {
	for (let i = 1; i < playersContainer.length; i++) {
		if (i < playersQuantity.value) {
			playersContainer[i].style.display = 'flex';
		} else {
			playersContainer[i].style.display = 'none';
		}
	}
}

function showPlayers() {
	raceModePlayersInput.firstChild.style.display = 'flex';
	if (raceModeEnabled.value) {
		document.querySelector('.body-container').style.gridTemplateRows = '.7fr 1fr 1fr 1fr';
		nodecg.sendMessage('raceMode', true);
		// if (racePlayersName.value.playing === 1) {
		// 	playersQuantity.selectedIndex = 0;
		// 	racePlayersName.value.playing = 2;
		// }
		for (let i = 1; i < raceModePlayersInput.childNodes.length; i++) {
			raceModePlayersInput.childNodes[i].style.display = 'flex';
		}
		playersQuantityContainer.style.display = 'flex';
		setInputPlayersName()
	} else {
		document.querySelector('.body-container').style.gridTemplateRows = '.2fr 1fr 1fr 1fr';
		// racePlayersName.value.playing = 1;
		for (let i = 1; i < raceModePlayersInput.childNodes.length; i++) {
			raceModePlayersInput.childNodes[i].style.display = 'none';
		}
		playersQuantityContainer.style.display = 'none';
		playersDones[0].style.display = 'none';
	}
}

function donePlayer(numPlayer) {
	if (raceModeEnabled.value) {
		nodecg.sendMessage('doneRacePlayer', racePlayersName.value.players[numPlayer]);
	}
}

function setLinks() {
	if (raceModeEnabled.value) {
		if (tokenLinks.value.length > 0) {
			for (let i = 0; i < playersLinks.length; i++) {
				if (tokenLinks.value[i]) {
					playersLinks[i].style.display = 'block';
					playersLinks[i].href = `${ext_url}?p=${tokenLinks.value[i]}`;
					playersDones[i].style.display = 'block';
				}
			}
		} else {
			for (let i = 0; i < playersLinks.length; i++) {
				playersLinks[i].style.display = 'none';
				playersDones[i].style.display = 'none';
			}
		}
	} else {
		if (tokenLinks.value[0]) {
			playersLinks[0].style.display = 'block';
			playersLinks[0].href = `${ext_url}?p=${tokenLinks.value[0]}`;
			// playersDones[0].style.display = 'block';
		} else {
			playersLinks[0].style.display = 'none';
			playersDones[0].style.display = 'none';
		}
	}
}

playersQuantity.addEventListener('change', () => {
	racePlayersName.value.playing = playersQuantity.selectedIndex + 2;
	setInputPlayersName()
})

generateLinks.addEventListener('click', () => {
	for (let i = 0; i < playersNames.length; i++) {
		racePlayersName.value.players[i] = playersNames[i].value;
	}

	nodecg.sendMessage('generar-links', [playersNames[0].value, playersNames[1].value, playersNames[2].value, playersNames[3].value]).then(array => {
		if (raceModeEnabled.value) {
			for (let i = 0; i < playersLinks.length; i++) {
				playersLinks[i].href = `${ext_url}?p=${array[i]}`;
				playersLinks[i].style.display = 'block';
				playersDones[i].style.display = 'block';
			}
		} else {
			playersLinks[0].href = `${ext_url}?p=${array[0]}`;
			playersLinks[0].style.display = 'block';
			// playersDones[0].style.display = 'block';
		}
		generateLinks.classList.add('btn-disabled');
	})
})

resetLinks.addEventListener('click', resetLinksFunction)

function resetLinksFunction() {
	nodecg.sendMessage('reset-links');
	for (let i = 0; i < playersLinks.length; i++) {
		playersLinks[i].style.display = 'none';
		playersLinks[i].href = "#";
		playersDones[i].style.display = 'none';
	}
	generateLinks.classList.remove('btn-disabled');
}

playButton.addEventListener('click', () => {
	nodecg.sendMessage('play-external-timer')
	nodecg.sendMessage('play', true);
})

pauseButton.addEventListener('click', () => {
	nodecg.sendMessage('pause-external-timer')
	nodecg.sendMessage('pause', true);
})

resetButton.addEventListener('click', () => {
	nodecg.sendMessage('reset-external-timer')
	nodecg.sendMessage('reset', true);
})


for (let i = 0; i < playersDones.length; i++) {
	playersDones[i].addEventListener('click', () => {
		donePlayer(i);
	});
}


//------- general section -------

const generalText = document.querySelectorAll('.general-info-text');
const generalRunButtons = document.querySelectorAll('.general-button');
const scheduleNumberInput = document.querySelector('#manual-schedule-number-input');

const generalRunInfo = nodecg.Replicant('generalRunInfo');

NodeCG.waitForReplicants(generalRunInfo).then(() => {
	generalRunInfo.on('change', (value) => {
		generalText[0].value = value.game;
		generalText[1].value = value.category;
		generalText[2].value = value.estimate;
		generalText[3].value = value.platform;
		generalText[4].value = value.host;
		scheduleNumberInput.value = value.runId + 1;
		// actualScheduleNumber.innerHTML = value.runId;
	})
})


generalRunButtons[0].addEventListener('click', (e) => {
	nodecg.sendMessage('backSchedule');
})

generalRunButtons[1].addEventListener('click', (e) => {
	generalRunInfo.value.game = generalText[0].value;
	generalRunInfo.value.category = generalText[1].value;
	generalRunInfo.value.estimate = generalText[2].value;
	generalRunInfo.value.platform = generalText[3].value;
	generalRunInfo.value.host = generalText[4].value;
	for (let i = 0; i < playersNames.length; i++) {
		playersNames[i].value = racePlayersName.value.players[i];
	}
})

generalRunButtons[2].addEventListener('click', (e) => {
	nodecg.sendMessage('advanceSchedule');
})

generalRunButtons[3].addEventListener('click', (e) => {
	nodecg.sendMessage('manualSchedule', scheduleNumberInput.value - 1);
})

const incentivesSelect = document.querySelector('.incentives-select');
const activeIncentivesSelect = document.querySelector('.active-incentives-select');

const incentiveToActiveButton = document.querySelector('#incentive-to-active-button');
const activeToIncentiveButton = document.querySelector('#active-to-incentive-button');


const incentivesList = nodecg.Replicant('incentivesList');
const activeIncentives = nodecg.Replicant('activeIncentives');


NodeCG.waitForReplicants(incentivesList, activeIncentives).then(() => {
	incentivesList.on('change', (newValue, oldValue) => {
		// console.log('entrando aqui');
		// console.log(newValue);
		while (incentivesSelect.firstChild) {
			incentivesSelect.removeChild(incentivesSelect.firstChild);
		}
		for (let i = 0; i < newValue.length; i++) {
			let incentiveOption = document.createElement('option');
			incentiveOption.classList.add('incentives-select-option');
			incentiveOption.value = newValue[i].name;
			incentiveOption.text = newValue[i].name;
			incentivesSelect.appendChild(incentiveOption);
		}
	})

	activeIncentives.on('change', (newValue, oldValue) => {
		// console.log('entrando aqui');
		// console.log(newValue)
		while (activeIncentivesSelect.firstChild) {
			activeIncentivesSelect.removeChild(activeIncentivesSelect.firstChild);
		}
		for (let i = 0; i < newValue.length; i++) {
			let activeIncentiveOption = document.createElement('option');
			activeIncentiveOption.classList.add('active-incentives-select-option');
			activeIncentiveOption.value = newValue[i].name;
			activeIncentiveOption.text = newValue[i].name;
			activeIncentivesSelect.appendChild(activeIncentiveOption);
		}
	})
})

incentiveToActiveButton.addEventListener('click', () => {
	let selected = incentivesSelect.value;
	for (let i = 0; i < incentivesList.value.length; i++) {
		if (incentivesList.value[i].name === selected) {
			// console.log(incentivesList.value[i]);
			let temp = incentivesList.value[i];
			incentivesList.value.splice(i, 1);
			activeIncentives.value.push(temp);
		}
	}
})

activeToIncentiveButton.addEventListener('click', () => {
	let selected = activeIncentivesSelect.value;
	for (let i = 0; i < activeIncentives.value.length; i++) {
		if (activeIncentives.value[i].name === selected) {
			// console.log(incentivesList.value[i]);
			let temp = activeIncentives.value[i];
			activeIncentives.value.splice(i, 1);
			incentivesList.value.push(temp);
		}
	}
})

const prizesSelect = document.querySelector('.prizes-select');
const activePrizesSelect = document.querySelector('.active-prizes-select');

const newPrizeButton = document.querySelector('#new-prize-button');
const createPrizeButton = document.querySelector('#create-prize-button');
const newPrizeInputs = document.querySelectorAll('.new-prize-inputs');
const newPrizeContainer = document.querySelector('.new-prize-container');

const prizeToActiveButton = document.querySelector('#prize-to-active-button');
const activeToPrizeButton = document.querySelector('#active-to-prize-button');


const prizesList = nodecg.Replicant('prizesList');
const activePrizes = nodecg.Replicant('activePrizes');

NodeCG.waitForReplicants(prizesList, activePrizes).then(() => {
	prizesList.on('change', (newValue, oldValue) => {
		// console.log('entrando aqui');
		// console.log(newValue);
		while (prizesSelect.firstChild) {
			prizesSelect.removeChild(prizesSelect.firstChild);
		}
		for (let i = 0; i < newValue.length; i++) {
			let prizeOption = document.createElement('option');
			prizeOption.classList.add('prize-select-option');
			prizeOption.value = newValue[i].name;
			prizeOption.text = newValue[i].name;
			prizesSelect.appendChild(prizeOption);
		}
	})

	activePrizes.on('change', (newValue, oldValue) => {
		// console.log('entrando aqui');
		console.log(newValue)
		while (activePrizesSelect.firstChild) {
			activePrizesSelect.removeChild(activePrizesSelect.firstChild);
		}
		for (let i = 0; i < newValue.length; i++) {
			let activePrizeOption = document.createElement('option');
			activePrizeOption.classList.add('active-prizes-select-option');
			activePrizeOption.value = newValue[i].name;
			activePrizeOption.text = newValue[i].name;
			activePrizesSelect.appendChild(activePrizeOption);
		}
	})
})

newPrizeButton.addEventListener('click', () => {
	if (newPrizeContainer.style.display === 'flex') {
		newPrizeContainer.style.display = 'none';
	} else {
		newPrizeContainer.style.display = 'flex';
	}
})

createPrizeButton.addEventListener('click', () => {
	newPrizeContainer.style.display = 'none';
})


prizeToActiveButton.addEventListener('click', () => {
	let selected = prizesSelect.value;
	for (let i = 0; i < prizesList.value.length; i++) {
		if (prizesList.value[i].name === selected) {
			// console.log(prizesList.value[i]);
			let temp = prizesList.value[i];
			prizesList.value.splice(i, 1);
			activePrizes.value.push(temp);
		}
	}
})

activeToPrizeButton.addEventListener('click', () => {
	let selected = activePrizesSelect.value;
	for (let i = 0; i < activePrizes.value.length; i++) {
		if (activePrizes.value[i].name === selected) {
			// console.log(prizesList.value[i]);
			let temp = activePrizes.value[i];
			activePrizes.value.splice(i, 1);
			prizesList.value.push(temp);
		}
	}
})

createPrizeButton.addEventListener('click', () => {
	let newPrize = {};
	newPrize.name = newPrizeInputs[0].value;
	newPrize.value = newPrizeInputs[1].value;
	newPrize.url = newPrizeInputs[2].value;

	newPrizeInputs.forEach(element => {
		element.value = "";
	});
	prizesList.value.push(newPrize);
})
