const nodecgApiContext = require("./util/nodecg-api-context");
const nodecg = nodecgApiContext.get();
// const requestRQ = require('./util/requestH');
const axios = require('axios');

let baseURLOengusTest = nodecg.bundleConfig.baseURLOengus;

const incentivesList = nodecg.Replicant('incentivesList');
const activeIncentives = nodecg.Replicant('activeIncentives');

getIncentives();

nodecg.listenFor('donationEvent', async (value) => {
	if (!value) {
		ack('False');
		return;
	}
	let res = await getIncentives();
});

nodecg.listenFor('updateIncentives', async (value) => {
	if (!value) {
		ack('False');
		return;
	}
	let res = await getIncentives();
});

async function getIncentives() {
	let response = await axios.get(`${baseURLOengusTest}pruebasre8/incentives`);
	if (!response.data) {
		console.error('error');
		return false;
	}

	// console.log(response.data[2].bids);
	// incentivesList.value = response.data;
	// activeIncentives.value.push(response.data[0]);
	// let totalAmount = response.data[0].bids.reduce((acc, currentValue) => {acc + currentValue.currentAmount})
	// console.log(response.data[0].bids);

	let totalAmount = 0;
	response.data[1].bids.forEach((bid) => {
		// totalAmount += bid.currentAmount;
		let temp = Math.floor(Math.random() * 10)
		bid.currentAmount = temp;
		totalAmount += temp;
	})
	response.data[1].currentAmount = totalAmount;
	incentivesList.value.push(response.data[1]);
	// activeIncentives.value.push(response.data[0]);

	let temp = Math.floor(Math.random() * (50 - 1) + 1);
	response.data[2].currentAmount = temp;
	incentivesList.value.push(response.data[2]);
	// activeIncentives.value.push(response.data[1]);

	totalAmount = 0;
	response.data[4].bids.forEach((bid) => {
		// totalAmount += bid.currentAmount;
		let temp = Math.floor(Math.random() * 10)
		bid.currentAmount = temp;
		totalAmount += temp;
	})
	response.data[4].currentAmount = totalAmount;
	incentivesList.value.push(response.data[4]);
	// activeIncentives.value.push(response.data[3]);

	// console.log(response.data);
	// console.log(totalAmount);
	console.log('volvi a pedir incentivos');
	return true;
}
