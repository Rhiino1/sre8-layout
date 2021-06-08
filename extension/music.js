const nodecgApiContext = require("./util/nodecg-api-context");
const nodecg = nodecgApiContext.get();


const songName = nodecg.Replicant('songName');

let getYoutubeTitle = require('get-youtube-title')

songName.on('change', async (value) => {
	getYoutubeTitle(value.id, 'AIzaSyAk8L8c7_7fmNFnvnvYWzFDnqdnAakD9Z4', function (err, title) {
		value.name = title;
	})
})
