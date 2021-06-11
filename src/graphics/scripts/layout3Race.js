import '../styles/layout3Race.css';
import '../../../images/SRE8.png'
import '../../../images/aecc-v1.png'
import '../../../images/background.mp4'


let game = document.querySelector('#game');
let category = document.querySelector('#category');
let estimate = document.querySelector('#estimate');
let platform = document.querySelector('#platform');


let nextRunList = document.querySelector('.next-run-list');



const generalRunInfo = nodecg.Replicant('generalRunInfo');
const nextRunsListSchedule = nodecg.Replicant('nextRunsListSchedule');
const timer = nodecg.Replicant('timer');
const racePlayers = nodecg.Replicant('racePlayers');

let timerDisplay = document.querySelector(`[data-chronometer]`);
let leftRunnerName = document.querySelector(`.left-runner-name`);
let topRunnerName = document.querySelector(`.top-runner-name`);
let rightRunnerName = document.querySelector(`.right-runner-name`);
let leftRunnerTwitch = document.querySelector(`.left-runner-twitch`);
let topRunnerTwitch = document.querySelector(`.top-runner-twitch`);
let rightRunnerTwitch = document.querySelector(`.right-runner-twitch`);



NodeCG.waitForReplicants(generalRunInfo, nextRunsListSchedule, timer, racePlayers).then(() => {
	generalRunInfo.on('change', (value) => {
		game.innerHTML = value.game;
		category.innerHTML = value.category;
		estimate.innerHTML = value.estimate;
		platform.innerHTML = value.platform;
	})

	timer.on('change', (newValue) => {
		if (newValue.hours === '00') {
			timerDisplay.textContent = `${newValue.minutes}:${newValue.seconds}.${newValue.tenthseconds}`
			timerDisplay.setAttribute('data-text', `${newValue.minutes}:${newValue.seconds}.${newValue.tenthseconds}`)
		} else {
			timerDisplay.textContent = `${newValue.hours}:${newValue.minutes}:${newValue.seconds}.${newValue.tenthseconds}`
			timerDisplay.setAttribute('data-text', `${newValue.hours}:${newValue.minutes}:${newValue.seconds}.${newValue.tenthseconds}`)
		}
	})

	racePlayers.on('change', (newValue, oldValue) => {
		// leftRunnerName.textContent = newValue.players[0];
		leftRunnerTwitch.textContent = newValue.twitch[0];
		// topRunnerName.textContent = newValue.players[0];
		topRunnerTwitch.textContent = newValue.twitch[1];
		// rightRunnerName.textContent = newValue.players[2];
		rightRunnerTwitch.textContent = newValue.twitch[2];
	})


	nextRunsListSchedule.on('change', (newValue, oldValue) => {
		while (nextRunList.firstChild) {
			nextRunList.removeChild(nextRunList.firstChild);
		}
		// console.log(nextGamesListContainer.childNodes.length);
		for (let i = 0; i < newValue.length; i++) {
			let nextRunContainer = document.createElement('div');
			nextRunContainer.classList.add('next-run-container');
			nextRunList.appendChild(nextRunContainer);


			let nextRunGameTitle = document.createElement('h2');
			nextRunGameTitle.classList.add('next-run-game-title');
			nextRunContainer.appendChild(nextRunGameTitle);

			nextRunGameTitle.textContent = newValue[i].game;
		}
	})
})


const activeIncentives = nodecg.Replicant('activeIncentives')
let activeIncentivesTag = [];
let index = 0;

let incentiveList = document.querySelector('.incentive-list');

NodeCG.waitForReplicants(activeIncentives).then(() => {
	activeIncentives.on('change', (newValue, oldValue) => {
		activeIncentivesTag = [];
		index = 0;
		if (!(newValue.length > 0)) {
			if (incentiveList) {
				while (incentiveList.firstChild) {
					incentiveList.removeChild(incentiveList.firstChild);
				}
			}
			return;
		}

		if (incentiveList) {
			while (incentiveList.firstChild) {
				incentiveList.removeChild(incentiveList.firstChild);
			}
		}

		newValue.forEach(incentive => {

			if (incentive.bidWar) {
				if (incentive.bids.length == 2) {

					let incentiveContainer = document.createElement('div');
					incentiveContainer.classList.add('incentive-container');
					incentiveList.appendChild(incentiveContainer);

					let bidwarTitleContainer = document.createElement('div');
					bidwarTitleContainer.classList.add('incentive-title-container');
					bidwarTitleContainer.classList.add('bidwar-title-container');
					incentiveContainer.appendChild(bidwarTitleContainer);

					let incentiveTitle = document.createElement('h2');
					incentiveTitle.classList.add('incentive-title');
					bidwarTitleContainer.appendChild(incentiveTitle);

					let bidsVersusContainer = document.createElement('div');
					bidsVersusContainer.classList.add('bids-versus-container');
					incentiveContainer.appendChild(bidsVersusContainer);

					//winner
					let bidVersusWinnerContainer = document.createElement('div');
					bidVersusWinnerContainer.classList.add('bid-versus-container');
					bidVersusWinnerContainer.classList.add('winner');
					bidsVersusContainer.appendChild(bidVersusWinnerContainer);

					let bidVersusWinnerTitleContainer = document.createElement('div');
					bidVersusWinnerTitleContainer.classList.add('bid-versus-title-container');
					bidVersusWinnerContainer.appendChild(bidVersusWinnerTitleContainer);

					let bidVersusWinnerTitle = document.createElement('h2');
					bidVersusWinnerTitle.classList.add('bid-versus-title');
					bidVersusWinnerTitleContainer.appendChild(bidVersusWinnerTitle);

					let bidVersusWinnerAmountContainer = document.createElement('div');
					bidVersusWinnerAmountContainer.classList.add('bid-versus-amount-container');
					bidVersusWinnerContainer.appendChild(bidVersusWinnerAmountContainer);

					let bidWinnerAmount = document.createElement('h2');
					bidWinnerAmount.classList.add('bid-amount');
					bidVersusWinnerAmountContainer.appendChild(bidWinnerAmount);

					//loser
					let bidVersusLoserContainer = document.createElement('div');
					bidVersusLoserContainer.classList.add('bid-versus-container');
					bidVersusLoserContainer.classList.add('loser');
					bidsVersusContainer.appendChild(bidVersusLoserContainer);

					let bidVersusLoserTitleContainer = document.createElement('div');
					bidVersusLoserTitleContainer.classList.add('bid-versus-title-container');
					bidVersusLoserContainer.appendChild(bidVersusLoserTitleContainer);

					let bidVersusLoserTitle = document.createElement('h2');
					bidVersusLoserTitle.classList.add('bid-versus-title');
					bidVersusLoserTitleContainer.appendChild(bidVersusLoserTitle);

					let bidVersusLoserAmountContainer = document.createElement('div');
					bidVersusLoserAmountContainer.classList.add('bid-versus-amount-container');
					bidVersusLoserContainer.appendChild(bidVersusLoserAmountContainer);

					let bidLoserAmount = document.createElement('h2');
					bidLoserAmount.classList.add('bid-amount');
					bidVersusLoserAmountContainer.appendChild(bidLoserAmount);

					let winner = 0;
					let winnerBid = {
						name: '',
						amount: 0
					};
					let loserBid = {
						name: '',
						amount: 0
					};

					incentive.bids.forEach((bid) => {
						let temp = incentive.currentAmount - bid.currentAmount;
						if (temp > winner) {
							winner = temp;
						}
					})

					winnerBid.amount = winner;
					incentive.bids.forEach((bid) => {
						if (winnerBid.amount === bid.currentAmount) {
							winnerBid.name = bid.name;
						} else {
							loserBid.amount = bid.currentAmount;
							loserBid.name = bid.name;
						}
					})

					incentiveTitle.textContent = incentive.name;
					bidVersusWinnerTitle.textContent = winnerBid.name;
					bidWinnerAmount.textContent = formatter.format(winnerBid.amount);
					bidVersusLoserTitle.textContent = loserBid.name;
					bidLoserAmount.textContent = formatter.format(loserBid.amount);

				} else {

					let incentiveContainer = document.createElement('div');
					incentiveContainer.classList.add('incentive-container');
					incentiveList.appendChild(incentiveContainer);

					let bidwarTitleContainer = document.createElement('div');
					bidwarTitleContainer.classList.add('incentive-title-container');
					bidwarTitleContainer.classList.add('bidwar-title-container');
					incentiveContainer.appendChild(bidwarTitleContainer);

					let incentiveTitle = document.createElement('h2');
					incentiveTitle.classList.add('incentive-title');
					bidwarTitleContainer.appendChild(incentiveTitle);

					let bidsContainer = document.createElement('div');
					bidsContainer.classList.add('bids-container');
					incentiveContainer.appendChild(bidsContainer);

					let amounts = [];
					let bidsSorted = [];
					incentiveTitle.textContent = incentive.name;

					incentive.bids.forEach((bid) => {
						amounts.push(bid.currentAmount);
						if (!bidsSorted.includes(bid)) {
							if (bidsSorted.length > 0) {
								let index = 0;
								while (bid.currentAmount < bidsSorted[index].currentAmount) {
									index++;
									if (!bidsSorted[index]) {
										break;
									}
								}
								bidsSorted.splice(index, 0, bid);
							} else {
								bidsSorted.push(bid);
							}
						}
					})

					let total = 3
					if (bidsSorted.length < 3) {
						total = bidsSorted.length;
					}
					for (let i = 0; i < total; i++) {

						let bidContainer = document.createElement('div');
						bidContainer.classList.add('bid-container');
						bidsContainer.appendChild(bidContainer);

						let bidTitleContainer = document.createElement('div');
						bidTitleContainer.classList.add('bid-title-container');
						bidContainer.appendChild(bidTitleContainer);

						let bidTitle = document.createElement('h2');
						bidTitle.classList.add('bid-title');
						bidTitleContainer.appendChild(bidTitle);

						let bidAmountContainer = document.createElement('div');
						bidAmountContainer.classList.add('bid-amount-container');
						bidContainer.appendChild(bidAmountContainer);

						let bidAmount = document.createElement('h2');
						bidAmount.classList.add('bid-amount');
						bidAmountContainer.appendChild(bidAmount);

						bidTitle.textContent = bidsSorted[i].name;
						bidAmount.textContent = formatter.format(bidsSorted[i].currentAmount);
					}

				}
			} else {

				let incentiveContainer = document.createElement('div');
				incentiveContainer.classList.add('incentive-container');
				incentiveList.appendChild(incentiveContainer);

				let progressBarIncentiveTitle = document.createElement('div');
				progressBarIncentiveTitle.classList.add('progress-bar-incentive-title');
				incentiveContainer.appendChild(progressBarIncentiveTitle);

				let incentiveTitle = document.createElement('h2');
				incentiveTitle.classList.add('incentive-title');
				progressBarIncentiveTitle.appendChild(incentiveTitle);

				let progressBarContainer = document.createElement('div');
				progressBarContainer.classList.add('progress-bar-container');
				incentiveContainer.appendChild(progressBarContainer);

				let progressBarSubcontainer = document.createElement('div');
				progressBarSubcontainer.classList.add('progress-bar-subcontainer');
				progressBarContainer.appendChild(progressBarSubcontainer);

				let progressBar = document.createElement('span');
				progressBar.classList.add('progress-bar');
				progressBarSubcontainer.appendChild(progressBar);

				let progressBarCurrentAmount = document.createElement('h2');
				progressBarCurrentAmount.classList.add('progress-bar-current-amount');
				progressBar.appendChild(progressBarCurrentAmount);

				let progressBarTotalContainer = document.createElement('div');
				progressBarTotalContainer.classList.add('progress-bar-total-container');
				progressBarContainer.appendChild(progressBarTotalContainer);

				let progressBarTotalAmount = document.createElement('h2');
				progressBarTotalAmount.classList.add('progress-bar-total-amount');
				progressBarTotalContainer.appendChild(progressBarTotalAmount);

				let current = incentive.currentAmount;
				let goal = incentive.goal;
				let totalWidth = 858;

				let width = current * totalWidth / goal;

				progressBar.style.width = width + 'px';

				incentiveTitle.textContent = incentive.name;
				progressBarCurrentAmount.textContent = formatter.format(incentive.currentAmount);
				progressBarTotalAmount.textContent = formatter.format(incentive.goal);

				activeIncentivesTag.push(incentiveContainer);
			}
		})

	})
})

let formatter = new Intl.NumberFormat('de-DE', {
	style: 'currency',
	currency: 'EUR',
	minimumFractionDigits: 0,
	maximumFractionDigits: 0,
});