const nodecgApiContext = require("../util/nodecg-api-context");
const nodecg = nodecgApiContext.get();
const router = nodecg.Router();
// let cors = require('cors')
let axios = require('axios');
let cryptr = require('../util/crypt');

const racePlayers = nodecg.Replicant('racePlayers');
const soloPlayer = nodecg.Replicant('soloPlayer');
const tokenLinks = nodecg.Replicant('tokenLinks');

router.post('/validate-player', (req, res) => {
	if (validatePlayer(req.body.player)) {
		res.sendStatus(200);
	} else {
		res.sendStatus(400).end();
	}
})

function validatePlayer(player) {
	let temp = tokenLinks.value.includes(player);
	return temp ? true : false;
}

nodecg.listenFor('raceMode', async (value) => {
	nodecg.log.info(value)
	await axios.post('http://localhost:9091/race-enabled', {
		enabled: value
	}).then((response) => {
		console.log(response.status);
	}).catch((err) => {
		nodecg.log.info(err)
	});
})

nodecg.listenFor('play-external-timer', () => {
	axios.post('http://localhost:9091/start-internal-timer').then(response => {
		if (response.status === 200) {
			nodecg.log.info('external-timer on');
		}
	})
})

nodecg.listenFor('pause-external-timer', () => {
	axios.post('http://localhost:9091/pause-internal-timer').then(response => {
		if (response.status === 200) {
			nodecg.log.info('external-timer paused');
		}
	})
});

nodecg.listenFor('reset-external-timer', () => {
	axios.post('http://localhost:9091/reset-internal-timer').then(response => {
		if (response.status === 200) {
			nodecg.log.info('external-timer reset');
		}
	})
});

router.post('/play-external-timer', (req, res) => {
	if (validatePlayer(req.body.player)) {
		nodecg.sendMessage('play', true);
		res.status(200).end();
	} else {
		res.sendStatus(401).end();
	}
});

router.post('/pause-external-timer', (req, res) => {
	if (validatePlayer(req.body.player)) {
		nodecg.sendMessage('pause', true);
		res.status(200).end();
	} else {
		res.sendStatus(401).end();
	}
});

router.post('/reset-external-timer', (req, res) => {
	if (validatePlayer(req.body.player)) {
		nodecg.sendMessage('reset', true);
		res.status(200).end();
	} else {
		res.sendStatus(401).end();
	}
});

router.post('/done-external-timer', (req, res) => {
	if (!validatePlayer(req.body.player)) {
		nodecg.log.info('entre aqui');
		res.sendStatus(401).send('not authorized');
	} else {
		let name = cryptr.decrypt(req.body.player);
		nodecg.log.info(name);
		if (racePlayers.value.players.find(player => player === name)) {
			nodecg.sendMessage('doneRacePlayer', name);
			res.status(200).end();
		}
	}
})

router.post('/prueba', cors(), (req, res) => {
	console.log('llego la prueba');
})

nodecg.mount('/ext', router);
