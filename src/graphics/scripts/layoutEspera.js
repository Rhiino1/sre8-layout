import '../styles/layoutEspera.css';


const songNameText = document.querySelector('.song-name');
const hostText = document.querySelector('.host-name');

const songName = nodecg.Replicant('songName');
const nextRunsListSchedule = nodecg.Replicant('nextRunsListSchedule');
const totalDonationAmount = nodecg.Replicant('totalDonationAmount');
const generalRunInfo = nodecg.Replicant('generalRunInfo');

let nextGamesListContainer = document.querySelector('.next-games-list-container');
let totalAmount = document.querySelector('.total-amount');

NodeCG.waitForReplicants(songName, nextRunsListSchedule, totalDonationAmount).then(() => {
	songName.on('change', (value) => {
		songNameText.textContent = value.name;
	})

	generalRunInfo.on('change', (value) =>{
		hostText.textContent = value.host;
	})

	totalDonationAmount.on('change', (value) => {
		totalAmount.textContent = formatter.format(value);
	})

	nextRunsListSchedule.on('change', (newValue, oldValue) => {
		while (nextGamesListContainer.firstChild) {
			nextGamesListContainer.removeChild(nextGamesListContainer.firstChild);
		}
		console.log(nextGamesListContainer.childNodes.length);
		for (let i = 0; i < newValue.length; i++) {
			let nextGameContainer = document.createElement('div');

			let nextGameBgContainer = document.createElement('div');


			if (i === 0) {
				let nextListMainTitleContainer = document.createElement('div');
				nextListMainTitleContainer.classList.add('next-list-main-title-container');
				nextGamesListContainer.appendChild(nextListMainTitleContainer);

				nextGameBgContainer.classList.add('next-game-bg-main-container-1');
				nextGameContainer.appendChild(nextGameBgContainer);

				let nextListMainTitle = document.createElement('h1');
				nextListMainTitle.classList.add('next-list-main-title');
				nextListMainTitle.textContent = 'YA VIENE:';
				nextListMainTitleContainer.appendChild(nextListMainTitle);

				let firstDivisor = document.createElement('div');
				firstDivisor.classList.add('first-divisor');
				nextListMainTitleContainer.appendChild(firstDivisor);

				nextGameContainer.classList.add('main-game-container');
				nextGamesListContainer.appendChild(nextGameContainer);
			} else if (i === 1) {
				let nextListTitleContainer = document.createElement('div');
				nextListTitleContainer.classList.add('next-list-title-container');
				nextGamesListContainer.appendChild(nextListTitleContainer);

				let nextListTitle = document.createElement('h1');
				nextListTitle.classList.add('next-list-title');
				nextListTitle.textContent = 'EN LISTA:';
				nextListTitleContainer.appendChild(nextListTitle);

				let secondDivisor = document.createElement('div');
				secondDivisor.classList.add('second-divisor');
				nextListTitleContainer.appendChild(secondDivisor);
			}

			if (!nextGameContainer.classList.contains('main-game-container')) {
				nextGameContainer.classList.add('not-main-game-container');

				nextGameBgContainer.classList.add('next-game-bg-not-main-container-1');
				nextGameContainer.appendChild(nextGameBgContainer);
			}
			nextGameContainer.classList.add('next-game-container');
			nextGamesListContainer.appendChild(nextGameContainer);

			let nextGameRunnersEstimateContainer = document.createElement('div');
			nextGameRunnersEstimateContainer.classList.add('next-game-runners-estimate-container');
			nextGameContainer.appendChild(nextGameRunnersEstimateContainer);

			let nextGameRunner = document.createElement('h3');
			nextGameRunner.classList.add('next-game-runner');
			nextGameRunnersEstimateContainer.appendChild(nextGameRunner);

			let nextGameEstimate = document.createElement('h3');
			nextGameEstimate.classList.add('next-game-estimate');
			nextGameRunnersEstimateContainer.appendChild(nextGameEstimate);

			nextGameRunner.textContent = joinRunnersNames(newValue[i].runners);
			nextGameEstimate.textContent = newValue[i].estimado;

			let nextGameNameContainer = document.createElement('div');
			nextGameNameContainer.classList.add('next-game-name-container');
			nextGameContainer.appendChild(nextGameNameContainer);

			let nextGameName = document.createElement('h2');
			nextGameName.classList.add('next-game-name');
			nextGameNameContainer.appendChild(nextGameName);

			nextGameName.textContent = newValue[i].game;

			let nextGameCategoryPlatformContainer = document.createElement('div');
			nextGameCategoryPlatformContainer.classList.add('next-game-category-platform-container');
			nextGameContainer.appendChild(nextGameCategoryPlatformContainer);

			let nextGameCategory = document.createElement('h3');
			nextGameCategory.classList.add('next-game-category');
			nextGameCategoryPlatformContainer.appendChild(nextGameCategory);

			let nextGamePlatform = document.createElement('h3');
			nextGamePlatform.classList.add('next-game-platform');
			nextGameCategoryPlatformContainer.appendChild(nextGamePlatform);

			nextGameCategory.textContent = newValue[i].categoria;
			nextGamePlatform.textContent = newValue[i].plataforma;

		}
	})
})

function joinRunnersNames(runners) {
	let runnersName = '';
	for (let i = 0; i < runners.length; i++) {
		if (i === 0) {
			runnersName = runners[i].name;
		} else {
			runnersName.concat(' - ', runners[i].name);
		}
	}
	return runnersName;
}




//charts
const incentiveContainer = document.querySelector('.incentives-container');
const chartContainer = document.querySelector('.chart-container');

const activeIncentives = nodecg.Replicant('activeIncentives')
let activeIncentivesTag = [];
let index = 0;

const showChart = document.querySelector('#show-chart');
const hideChart = document.querySelector('#hide-chart');
const randChart = document.querySelector('#rand-chart');

NodeCG.waitForReplicants(activeIncentives).then(() => {
	activeIncentives.on('change', (newValue, oldValue) => {
		activeIncentivesTag = [];
		index = 0;
		console.log('cambie');
		if (!(newValue.length > 0)) {
			let incentiveTitleCont = document.querySelectorAll('.incentive-title-container');
			if (incentiveTitleCont) {
				incentiveTitleCont.forEach(title => {
					if (incentiveContainer.contains(title)) {
						incentiveContainer.removeChild(title);
					}
				})
			}
			if (chartContainer) {
				while (chartContainer.firstChild) {
					chartContainer.removeChild(chartContainer.firstChild);
				}
			}
			return;
		}

		let incentiveTitleCont = document.querySelectorAll('.incentive-title-container');
		if (incentiveTitleCont) {
			incentiveTitleCont.forEach(title => {
				if (incentiveContainer.contains(title)) {
					incentiveContainer.removeChild(title);
				}
			})
		}
		if (chartContainer) {
			while (chartContainer.firstChild) {
				chartContainer.removeChild(chartContainer.firstChild);
			}
		}
		newValue.forEach(incentive => {
			let incentiveTitleContainer = document.createElement('div');
			incentiveTitleContainer.classList.add('incentive-title-container');
			// incentiveContainer.insertBefore(incentiveTitleContainer, incentiveContainer.firstChild)
			incentiveContainer.insertBefore(incentiveTitleContainer, chartContainer)

			let incentiveTitle = document.createElement('h1');
			incentiveTitle.classList.add('incentive-title');
			incentiveTitleContainer.appendChild(incentiveTitle);
			incentiveTitle.textContent = incentive.name;

			if (incentive.bidWar) {
				if (incentive.bids.length == 2) {

					let pieContainer = document.createElement('div');
					pieContainer.classList.add('pie-container');
					chartContainer.appendChild(pieContainer);
					let pieTitlesContainer = document.createElement('div');
					pieTitlesContainer.classList.add('pie-titles-container');
					pieContainer.appendChild(pieTitlesContainer);

					let winnerBidContainer = document.createElement('div');
					winnerBidContainer.classList.add('winner-bid-container');
					pieTitlesContainer.appendChild(winnerBidContainer);

					let winnerBidText = document.createElement('h3');
					winnerBidText.classList.add('winner-bid-text');
					winnerBidContainer.appendChild(winnerBidText);
					let winnerBidAmountText = document.createElement('h1');
					winnerBidAmountText.classList.add('winner-bid-amount-text');
					winnerBidContainer.appendChild(winnerBidAmountText);


					let loserBidContainer = document.createElement('div');
					loserBidContainer.classList.add('loser-bid-container');
					pieTitlesContainer.appendChild(loserBidContainer);

					let loserBidText = document.createElement('h3');
					loserBidText.classList.add('loser-bid-text');
					loserBidContainer.appendChild(loserBidText);
					let loserBidAmountText = document.createElement('h1');
					loserBidAmountText.classList.add('loser-bid-amount-text');
					loserBidContainer.appendChild(loserBidAmountText);

					let chartSvgContainer = document.createElement('div');
					chartSvgContainer.classList.add('chart-svg-container');
					pieContainer.appendChild(chartSvgContainer);

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

					winnerBidText.textContent = winnerBid.name;
					winnerBidAmountText.textContent = winnerBid.amount;
					loserBidText.textContent = loserBid.name;
					loserBidAmountText.textContent = loserBid.amount;

					// pieTitlesContainer.style.display = 'none';

					let radius = 200;
					let perimeter = 2 * Math.PI * radius / 2;
					let porcentage = Math.floor(Math.random() * (100 - 51) + 51);
					// let porcentage = Math.floor(Math.random() * 100);
					// let porcentage = Math.floor(winner * 100);
					let result = ((porcentage * perimeter) / 100);
					// console.log(porcentage);

					const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

					// set width and height
					svg.classList.add('svg-container');
					let width = 400;
					let height = 400;
					svg.setAttribute("width", width);
					svg.setAttribute("height", height);
					// svg.setAttribute('transform', 'rotate(30)')
					svg.setAttribute('transform', 'rotate(-30) scale(1, -1)')
					//bg
					let bg = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
					bg.classList.add('bg-circle');
					bg.setAttributeNS(null, 'r', radius);
					bg.setAttributeNS(null, 'cx', width / 2);
					bg.setAttributeNS(null, 'cy', height / 2);
					// bg.setAttributeNS(null, 'stroke-width', 10);
					bg.setAttributeNS(null, 'fill', 'black');
					svg.appendChild(bg);

					//pie
					let pie = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
					pie.classList.add('pie');
					pie.setAttributeNS(null, 'r', radius / 2);
					pie.setAttributeNS(null, 'cx', width / 2);
					pie.setAttributeNS(null, 'cy', height / 2);
					pie.setAttributeNS(null, 'stroke-width', radius);
					pie.setAttributeNS(null, 'stroke', 'tomato');
					pie.setAttributeNS(null, 'stroke-dasharray', `${result} ${perimeter}`);
					// rotate(30)
					// pie.setAttribute('transform', `scale(1, -1) translate(0, -${height})`)
					svg.appendChild(pie);

					// activeIncentivesTag.push(svg);
					activeIncentivesTag.push(pieContainer);
					chartSvgContainer.appendChild(svg);

				} else {

					let bidwarProgressBarsContainer = document.createElement('div');
					bidwarProgressBarsContainer.classList.add('bidwar-progress-bars-container');
					chartContainer.appendChild(bidwarProgressBarsContainer);

					let amounts = [];
					let bidsSorted = [];

					// console.log(incentive.bids);
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

					let winner = bidsSorted[0].currentAmount;

					let total = 4
					if (bidsSorted.length < 4) {
						total = bidsSorted.length;
					}
					for (let i = 0; i < total; i++) {

						let bidProgressBarContainer = document.createElement('div');
						bidProgressBarContainer.classList.add('bid-progress-bar-container');
						bidwarProgressBarsContainer.appendChild(bidProgressBarContainer);

						let bidProgressBarSubcontainer = document.createElement('div');
						bidProgressBarSubcontainer.classList.add('bid-progress-bar-subcontainer');
						bidProgressBarContainer.appendChild(bidProgressBarSubcontainer);
						bidProgressBarSubcontainer.style.width = '816' + 'px';

						let bidProgressBar = document.createElement('span');
						bidProgressBar.classList.add('bid-progress-bar');
						bidProgressBarSubcontainer.appendChild(bidProgressBar);

						bidProgressBar.style.width = ((bidsSorted[i].currentAmount / winner) * 100) + '%';

						let progressBarCurrentTitle = document.createElement('h2');
						progressBarCurrentTitle.classList.add('progress-bar-current-title');
						bidProgressBar.appendChild(progressBarCurrentTitle);
						progressBarCurrentTitle.textContent = bidsSorted[i].name;

						let bidProgressBarTotalContainer = document.createElement('div');
						bidProgressBarTotalContainer.classList.add('bid-progress-bar-total-container');
						bidProgressBarContainer.appendChild(bidProgressBarTotalContainer);

						let progressBarTotalTitle = document.createElement('h2');
						progressBarTotalTitle.classList.add('progress-bar-total-title');
						bidProgressBarTotalContainer.appendChild(progressBarTotalTitle);
						progressBarTotalTitle.textContent = bidsSorted[i].currentAmount;


						if (i === 0) {
							bidProgressBarSubcontainer.style.borderColor = '#691677'
							bidProgressBarSubcontainer.style.boxShadow = '0px 0 15px -1px #691677'
							bidProgressBar.style.backgroundColor = '#470f51'
							bidProgressBarTotalContainer.style.backgroundColor = '#470f51';
							bidProgressBarTotalContainer.style.borderColor = '#691677'
							bidProgressBarTotalContainer.style.boxShadow = '0px 0 15px -1px #691677'
						} else if (i === 1) {
							bidProgressBarSubcontainer.style.borderColor = '#8a231a'
							bidProgressBarSubcontainer.style.boxShadow = '0px 0 15px -1px #8a231a'
							bidProgressBar.style.backgroundColor = '#51140f'
							bidProgressBarTotalContainer.style.backgroundColor = '#51140f';
							bidProgressBarTotalContainer.style.borderColor = '#8a231a'
							bidProgressBarTotalContainer.style.boxShadow = '0px 0 15px -1px #8a231a'
						} else if (i === 2) {
							bidProgressBarSubcontainer.style.borderColor = '#184179'
							bidProgressBarSubcontainer.style.boxShadow = '0px 0 15px -1px #184179'
							bidProgressBar.style.backgroundColor = '#0f2b51'
							bidProgressBarTotalContainer.style.backgroundColor = '#0f2b51';
							bidProgressBarTotalContainer.style.borderColor = '#184179'
							bidProgressBarTotalContainer.style.boxShadow = '0px 0 15px -1px #184179'
						} else {
							bidProgressBarSubcontainer.style.borderColor = '#827d18'
							bidProgressBarSubcontainer.style.boxShadow = '0px 0 15px -1px #827d18'
							bidProgressBar.style.backgroundColor = '#514e0f'
							bidProgressBarTotalContainer.style.backgroundColor = '#514e0f';
							bidProgressBarTotalContainer.style.borderColor = '#827d18'
							bidProgressBarTotalContainer.style.boxShadow = '0px 0 15px -1px #827d18'
						}
					}

					activeIncentivesTag.push(bidwarProgressBarsContainer);

				}
			} else {

				//external divs
				let progressBarContainer = document.createElement('div');
				progressBarContainer.classList.add('progress-bar-container')
				chartContainer.appendChild(progressBarContainer);

				let progressBarSubcontainer = document.createElement('div');
				progressBarSubcontainer.classList.add('progress-bar-subcontainer')
				progressBarContainer.appendChild(progressBarSubcontainer);

				//subcontainer
				let progressBar = document.createElement('span');
				progressBar.classList.add('progress-bar');
				progressBarSubcontainer.appendChild(progressBar);

				let progressBarCurrentTitle = document.createElement('h2');
				progressBarCurrentTitle.classList.add('progress-bar-current-title');
				progressBar.appendChild(progressBarCurrentTitle);

				let progressBarPorcentage = document.createElement('span');
				progressBarPorcentage.classList.add('progress-bar-porcentage');
				progressBar.appendChild(progressBarPorcentage);

				//total container
				let progressBarTotalContainer = document.createElement('div');
				progressBarTotalContainer.classList.add('progress-bar-total-container');
				progressBarContainer.appendChild(progressBarTotalContainer);

				let progressBarTotalTitle = document.createElement('h2');
				progressBarTotalTitle.classList.add('progress-bar-total-title');
				progressBarTotalContainer.appendChild(progressBarTotalTitle);

				let current = incentive.currentAmount;
				let goal = incentive.goal;
				let totalWidth = 815.996;

				let width = current * totalWidth / goal;

				progressBar.style.width = width + 'px';

				progressBarCurrentTitle.textContent = formatter.format(incentive.currentAmount);
				progressBarPorcentage.textContent = Math.trunc((width / totalWidth) * 100) + '%';
				progressBarTotalTitle.textContent = formatter.format(incentive.goal);

				activeIncentivesTag.push(progressBarContainer);
			}
		})
		// console.log(activeIncentivesTag);
	})
})


showChart.addEventListener('click', () => {
	if (!(activeIncentivesTag.length > 0)) {
		return;
	} else {
		incentiveContainer.childNodes.forEach(child => {
			if (!child.classList.contains('chart-container')) {
				child.style.display = 'none';
			}
		})

		chartContainer.childNodes.forEach(child => {
			if (child.style.display === 'flex') {
				child.style.display = 'none';
			}
		})

		incentiveContainer.childNodes[index].style.display = 'flex';
		chartContainer.childNodes[index].style.display = 'flex';
		index++;
		if (index === activeIncentivesTag.length) {
			index = 0;
		}
		console.log('avance', index);
	}
})

hideChart.addEventListener('click', () => {
	if (!(activeIncentivesTag.length > 0)) {
		return;
	} else {
		if (index === 0) {
			index = activeIncentivesTag.length - 1;
		} else {
			index--;
		}
		incentiveContainer.childNodes[index].style.display = 'none';
		chartContainer.childNodes[index].style.display = 'none';
	}
})

randChart.addEventListener('click', () => {
	// chartSvgContainer.childNodes.forEach(svg => {
	// 	svg.childNodes.forEach((child) => {
	// 		if (child.classList.contains('pie')) {
	// 			let temp = child.getAttribute('stroke-dasharray').split(' ');
	// 			let porcentage = Math.floor(Math.random() * (99 - 51) + 51);
	// 			console.log(porcentage);
	// 			let result = ((porcentage * temp[1]) / 100);
	// 			child.setAttributeNS(null, 'stroke-dasharray', `${result} ${temp[1]}`);
	// 		}
	// 	})
	// })
})

const activePrizes = nodecg.Replicant('activePrizes');
let titlePrizeContainer = document.querySelector('.title-prize-container');
let prizeContainer = document.querySelector('.prize-container');

NodeCG.waitForReplicants(activePrizes).then(() => {
	activePrizes.on('change', (newValue, oldValue) =>{
		let titlesContainer = document.querySelectorAll('.title-prize-name-container');
		if (titlesContainer) {
			titlesContainer.forEach(title => {
				if (titlePrizeContainer.contains(title)) {
					titlePrizeContainer.removeChild(title);
				}
			})
		}

		let prizeImgContainer = document.querySelectorAll('.prize-img-container');
		if (prizeImgContainer) {
			prizeImgContainer.forEach(img => {
				if (prizeContainer.contains(img)) {
					prizeContainer.removeChild(img);
				}
			})
		}
		
		newValue.forEach(prize => {
			let titlePrizeNameContainer = document.createElement('div');
			titlePrizeNameContainer.classList.add('title-prize-name-container');
			titlePrizeContainer.appendChild(titlePrizeNameContainer);

			let titlePrize = document.createElement('h1');
			titlePrize.classList.add('title-prize');
			titlePrizeNameContainer.appendChild(titlePrize);

			let titlePrizeAmount = document.createElement('h3');
			titlePrizeAmount.classList.add('title-prize-amount');
			titlePrizeNameContainer.appendChild(titlePrizeAmount);

			titlePrize.textContent = prize.name;
			titlePrizeAmount.textContent = `Donacion minima de: ${formatter.format(prize.value)}`;

			let prizeImgContainer = document.createElement('div');
			prizeImgContainer.classList.add('prize-img-container');
			prizeContainer.appendChild(prizeImgContainer);

			let prizeImg = document.createElement('img');
			prizeImg.classList.add('prize-img');
			prizeImgContainer.appendChild(prizeImg);

			prizeImg.src = prize.url;
		})
		
	})
})

let formatter = new Intl.NumberFormat('de-DE', {
	style: 'currency',
	currency: 'EUR',
	minimumFractionDigits: 0,
	maximumFractionDigits: 0,
});
