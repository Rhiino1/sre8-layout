const nodecgApiContext = require("./util/nodecg-api-context");
const nodecg = nodecgApiContext.get();
let axios = require('axios');

const totalDonationAmount = nodecg.Replicant('totalDonationAmount');

const app = nodecg.Router();
// app.get('/webhook', (req, res) => {
// 	res.send('custom route confirmed');
// });


app.post('/:marathonId', (req, res) => {
	const body = req.body;
	const marathon = req.params.marathonId;

	console.log(JSON.stringify(body));
	handleWebhook(body, marathon);

	res.send('OK');
});

async function handleWebhook(data, marathon) {
	switch (data.event) {
		case 'PING':
			console.log('Got ping event');
			break;
		case 'DONATION':
			console.log('Got donation event')
			let donationStats = await axios.get(`${nodecg.bundleConfig.baseURLOengus}${nodecg.bundleConfig.marathonID}/donations/stats`)
			totalDonationAmount.value = donationStats.data.total;
			console.log(donationStats.data);
			nodecg.sendMessage('donationEvent', true);
			break;
	}
}

nodecg.mount(app);
