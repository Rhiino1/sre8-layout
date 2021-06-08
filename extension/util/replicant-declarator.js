const nodecgApiContext = require("./nodecg-api-context");

const nodecg = nodecgApiContext.get();

const usernameTimer = nodecg.Replicant('usernameTimer', {
	defaultValue: 'admin'
});
const passwordTimer = nodecg.Replicant('passwordTimer', {
	defaultValue: 'password'
});

const timer = nodecg.Replicant('timer', {
	defaultValue: {
		hours: `00`,
		minutes: `00`,
		seconds: `00`,
		tenthseconds: `0`,
	},
	persistent: false
})

const raceModeEnabled = nodecg.Replicant('raceModeEnabled', {
	defaultValue: false,
	persistent: false
});

const racePlayers = nodecg.Replicant('racePlayers', {
	defaultValue: {
		players: ["rhino", "player2", "player3", "player4"],
		twitch: ["rhino", "player2", "player3", "player4"],
		finished: [false, false, false, false],
		pos: 1,
		playing: 4,
	},
	persistent: false,
});

const tokenLinks = nodecg.Replicant('tokenLinks', {
	defaultValue: []
});

const generalRunInfo = nodecg.Replicant('generalRunInfo', {
	defaultValue: {
		game: "game",
		category: "category",
		estimate: "estimate",
		platform: "platform",
		host: "host",
		runId: -1
	},
	persistent: false
});

const nextRunsListSchedule = nodecg.Replicant('nextRunsListSchedule', {
	defaultValue: [],
	persistent: false
});

const obsAddress = nodecg.Replicant('obsAddresses', {
	defaultValue: 'localhost',
	persistent: false
})

const actualSourcesMixer = nodecg.Replicant('mixerSources', {
	defaultValue: [],
	persistent: false
});

const songName = nodecg.Replicant('songName', {
	defaultValue: {
		id: 'none',
		name: 'none',
		sourceName: 'SongTitle'
	},
	persistent: false
});

const incentivesList = nodecg.Replicant('incentivesList', {
	defaultValue: [],
	persistent: false
})

const activeIncentives = nodecg.Replicant('activeIncentives', {
	defaultValue: [],
	persistent: false
})

//convertir en persistente
const prizesList = nodecg.Replicant('prizesList', {
	defaultValue: [],
	persistent: false
})

//convertir en persistente
const activePrizes = nodecg.Replicant('activePrizes', {
	defaultValue: [],
	persistent: false
})
