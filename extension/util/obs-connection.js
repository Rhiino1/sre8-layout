const nodecgApiContext = require("./nodecg-api-context");
const nodecg = nodecgApiContext.get();

const obsAddress = nodecg.Replicant('obsAddresses');


const OBSWebSocket = require('obs-websocket-js');
const obs = new OBSWebSocket();

let connected = false,
	heartbeat,
	currentScene,
	currentPreviewScene,
	isStudioMode = false;
let scenes = [];
let actualSourcesMixer = nodecg.Replicant('mixerSources');
let songName = nodecg.Replicant('songName');

songName.on('change', async (value) => {
	updateSongName(value);
})

async function updateSongName(value) {
	// if (connected) {
	// 	console.log('entre aqui');
	// 	if (value.name && value.name !== 'none') {
	// 		let source = await obs.send('GetSourceSettings', {
	// 			sourceName: value.sourceName
	// 		})
	// 		// console.log(source.sourceName, value.sourceName);
	// 		// console.log(source.sourceSettings.text, value.name);
	// 		if (source) {
	// 			let sourceUpdated = await obs.send('SetSourceSettings', {
	// 				sourceName: value.sourceName,
	// 				sourceSettings: {
	// 					text: value.name
	// 				}
	// 			})
	// 			console.log(sourceUpdated);
	// 		}
	// 	}
	// }
}

nodecg.listenFor('connect-obs', (address, ack) => {
	connect(address).then((err) => {
		if (err) {
			connected = true;
			ack(err, false);
		} else {
			ack(null, true);
		}
	})
});

nodecg.listenFor('disconnect-obs', (value, ack) => {
	actualSourcesMixer.value = [];
	disconnect();
	ack(null, true);
})

nodecg.listenFor('mute-source', async (value, ack) => {
	await obs.send('ToggleMute', {
		source: value.source
	})
	ack(null, true);
})

nodecg.listenFor('set-source-volume', async (value, ack) => {
	await obs.send('SetVolume', {
		source: value.source,
		volume: Math.pow(10, value.volume / 20)
	})
	ack(null, true);
})


obs.on('AuthenticationSuccess', async () => {
	console.log('Connected');
	connected = true;
	await sendCommand('SetHeartbeat', {
		enable: true
	});
	await updateMixer();
	await updateSongName(songName.value)

});


obs.on('ConnectionClosed', (data) => {
	nodecg.log.info('Disconnected');
});

obs.on('SourceMuteStateChanged', async (data) => {

	let index = actualSourcesMixer.value.findIndex(s => s.name === data.sourceName)
	if (index !== -1) {
		if (data.sourceName.match(/p[1-4]GameBrowser/)) {
			if (!data.muted) {
				actualSourcesMixer.value[index].muted = data.muted;
				await muteOtherPlayers(data.sourceName);
			}
		} else {
			actualSourcesMixer.value[index].muted = data.muted;
		}
	}
})

obs.on('SourceVolumeChanged', async (data) => {
	let sourceIndex = actualSourcesMixer.value.findIndex(s => s.name === data.sourceName)
	if (sourceIndex !== -1) {
		let volumeDb = 20 * Math.log10(data.volume);
		actualSourcesMixer.value[sourceIndex].volume = volumeDb;
	}
})


async function muteOtherPlayers(name) {
	actualSourcesMixer.value.forEach(async s => {
		if (s.name.match(/p[1-4]GameBrowser/)) {
			if (s.name !== name) {
				s.muted = true;
				await obs.send('SetMute', {
					source: s.name,
					mute: true
				});
			}
		}
	})
}

function compare(a, b) {
	if (a.name < b.name) {
		return -1;
	}
	if (a.name > b.name) {
		return 1;
	}
	return 0;
}
async function updateMixer() {
	let data = await obs.send('GetSourcesList');
	let sources = data.sources.filter(s => {
		return s.typeId === 'browser_source' || s.typeId === 'wasapi_output_capture'
	})

	let tempArr = [];
	tempArr = await Promise.all(sources.map(async s => {
		let volume = await obs.send('GetVolume', {
			source: s.name,
			useDecibel: true
		});
		s.volume = volume.volume;
		s.muted = volume.muted;
		return s;
	}));
	tempArr.sort(compare);
	actualSourcesMixer.value = tempArr
}

async function sendCommand(command, params) {
	try {
		return await obs.send(command, params || {});
	} catch (e) {
		console.log('Error sending command', command, ' - error is:', e);
		return {};
	}
}

async function connect(address) {
	try {
		await obs.connect({
			address: address,
			password: 'admin'
		})
		// await getStudioMode();
		// if (!isStudioMode) {
		// 	await toggleStudioMode();
		// }
	} catch (e) {
		return e;
	}
}

async function disconnect() {
	await obs.disconnect();
	connected = false;
}

async function getStudioMode() {
	let data = await sendCommand('GetStudioModeStatus');
	isStudioMode = (data && data.studioMode) || false;
}

async function toggleStudioMode() {
	await sendCommand('ToggleStudioMode');
}
