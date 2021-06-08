const nodecgApiContext = require("./util/nodecg-api-context");
const nodecg = nodecgApiContext.get();
let cryptr = require('./util/crypt');
let NanoTimer = require('nanotimer');
let timerReplicant = nodecg.Replicant('timer');

const racePlayers = nodecg.Replicant('racePlayers');
const playerPosition = nodecg.Replicant('playerPosition');
const tokenLinks = nodecg.Replicant('tokenLinks');

let hours = `00`;
let minutes = `00`;
let seconds = `00`;
let tenthseconds = `0`;
let timer = {
	hours: hours,
	minutes: minutes,
	seconds: seconds,
	tenthseconds: tenthseconds,
}
let state;
let timerA = new NanoTimer();

async function chronometer() {

	tenthseconds++;

	if (tenthseconds > 9){
		tenthseconds = 0;
		seconds++;

		if (seconds < 10) seconds = `0` + seconds
	}

	if (seconds > 59) {
		seconds = `00`
		minutes++

		if (minutes < 10) minutes = `0` + minutes
	}

	if (minutes > 59) {
		minutes = `00`
		hours++
	}

	timer.hours = hours;
	timer.minutes = minutes;
	timer.seconds = seconds;
	timer.tenthseconds = tenthseconds;
	state = 'count'

	timerReplicant.value = timer;
}

nodecg.listenFor('play', () => {
	if (state !== 'count') {
		nodecg.log.info('llegue al count dentro del play');
		try {
			timerA.setInterval(chronometer, '', '100m')
			nodecg.log.info('timer started');
		} catch (e) {
			nodecg.log.info('Error colocando el intervalo');
		}
	}
})

nodecg.listenFor('pause', () => {
	timerA.clearInterval();
	state = 'paused'
	nodecg.log.info('timer paused');
});

nodecg.listenFor('reset', () => {
	timerA.clearInterval();
	hours = `00`;
	minutes = `00`;
	seconds = `00`;
	tenthseconds = `0`;
	state = 'clear'
	timer.hours = hours;
	timer.minutes = minutes;
	timer.seconds = seconds;
	timer.tenthseconds = tenthseconds;
	timerReplicant.value = timer;
	resetRaceInfo()
	nodecg.log.info('timer reset');
})

nodecg.listenFor('doneRacePlayer', (name) => {
	let text;
	let index = racePlayers.value.players.indexOf(name) + 1;
	if (timerReplicant.value.hours === '00') {
		text = `${timerReplicant.value.minutes}:${timerReplicant.value.seconds}.${timerReplicant.value.tenthseconds}`
	} else {
		text = `${timerReplicant.value.hours}:${timerReplicant.value.minutes}:${timerReplicant.value.seconds}.${timerReplicant.value.tenthseconds}`
	}
	nodecg.log.info(`el jugador ${name} numero ${index} termino con un tiempo de ${text} en posicion numero ${racePlayers.value.pos}`);
	racePlayers.value.pos = racePlayers.value.pos + 1;
	racePlayers.value.finished[index-1] = true;
})

nodecg.listenFor('generar-links', (array, ack) => {
	let response = [];
	for (let i = 0; i < racePlayers.value.playing; i++) {
		let a = cryptr.encrypt(array[i]);
		tokenLinks.value.push(a);
		response.push(a);
	}
	ack(null, response);
})

nodecg.listenFor('reset-links', (ack) => {
	tokenLinks.value.length = 0;
})

racePlayers.on('change', (value) => {
	let finish = false;
	if (value.playing === 4) {
		if (value.finished[0] && value.finished[1] && value.finished[2] && value.finished[3]) {
			finish = true;
		}
	} else if (value.playing === 3) {
		if (value.finished[0] && value.finished[1] && value.finished[2]) {
			finish = true;
		}
	} else if (value.playing === 2) {
		if (value.finished[0] && value.finished[1]) {
			finish = true;
		}
	}

	if (finish) {
		nodecg.sendMessage('pause-external-timer')
		nodecg.sendMessage('pause', true);
		resetRaceInfo()
	}
})

function resetRaceInfo(){
	racePlayers.value.finished = [false, false, false, false];
	racePlayers.value.pos = 1;
	finish = false;
}