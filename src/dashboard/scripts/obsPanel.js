require('../styles/obsPanel.css');

const addressInput = document.querySelector('#obs-address');
const obsMixer = document.querySelector('.mixer-container');


const connectBtn = document.querySelector('#obs-connect-btn');
const disconnectBtn = document.querySelector('#obs-disconnect-btn');


const obsAddress = nodecg.Replicant('obsAddresses');
const actualSourcesMixer = nodecg.Replicant('mixerSources');

NodeCG.waitForReplicants(obsAddress, actualSourcesMixer).then(() => {
	obsAddress.on('change', value => {
		addressInput.value = value;
	})

	actualSourcesMixer.on('change', (newValue, oldValue) => {
		if (oldValue && oldValue.length > 0) {
			const inputRanges = document.querySelectorAll('.input-mixer');
			const inputRangesNumber = document.querySelectorAll('.input-number-mixer');
			const inputBtns = document.querySelectorAll('.mute-btn-mixer');
			for (let i = 0; i < newValue.length; i++) {
				let source = newValue[i];
				if (source.volume === null) {
					inputRanges[i].value = -100;
				} else {
					inputRanges[i].value = source.volume;
				}
        inputRangesNumber[i].textContent = inputRanges[i].value;
				if (source.muted) {
					inputBtns[i].childNodes[0].childNodes[0].classList.replace('fa-volume-up', 'fa-volume-mute');
        } else {
          inputBtns[i].childNodes[0].childNodes[0].classList.replace('fa-volume-mute', 'fa-volume-up');
				}
			}
		} else {
			while (obsMixer.firstChild) {
				obsMixer.removeChild(obsMixer.firstChild);
			}
			newValue.forEach(source => {
				let div = document.createElement('div');
				div.classList.add('source-sound-container');

				let subDiv = document.createElement('div');
				subDiv.classList.add('input-subDiv-container');

				let label = document.createElement('label');
				label.htmlFor = source.name;
        if(source.name.match(/p[1-4]GameBrowser/)){
          label.innerHTML = `Player ${source.name.charAt(1)}`;
        }else{
          label.innerHTML = source.name;
        }
				label.classList.add('label-mixer');

				let input = document.createElement('input');
				input.type = 'range';
				input.classList.add('input-mixer');
				input.name = source.name;
				input.min = -100;
				input.max = 26;
				input.step = .01;
				if (source.volume === null) {
					input.value = -100;
				} else {
					input.value = source.volume;
				}

				let numberText = document.createElement('p');
				numberText.classList.add('input-number-mixer');
				numberText.textContent = input.value;


				let btn = document.createElement('button');
				btn.classList.add('mute-btn-mixer')
        let iconSpan = document.createElement('span');
        let icon = document.createElement('i');
        iconSpan.appendChild(icon);
				if (source.muted) {
          icon.classList.add('fas', 'fa-volume-mute');
				} else {
          icon.classList.add('fas', 'fa-volume-up');
				}
        btn.appendChild(iconSpan);

				input.addEventListener('change', () => {
					source.volume = input.value;
					nodecg.sendMessage('set-source-volume', {
						source: source.name,
						volume: input.value
					})
				})

				input.addEventListener('input', () => {
					numberText.textContent = input.value
				})

				btn.addEventListener('click', () => {
					nodecg.sendMessage('mute-source', {
						source: source.name,
					}).then(() => {
						if (source.muted) {
							console.log('muteada la fuente ' + source.name)
						} else {
							console.log('desmuteada la fuente ' + source.name)
						}
					});
				})


				subDiv.appendChild(input);
				subDiv.appendChild(numberText);
				subDiv.appendChild(btn);
				div.appendChild(label);
				div.appendChild(subDiv);
        if(source.name === 'p1GameBrowser'){
          let hr = document.createElement('hr');
          hr.style.width = '100%';
          obsMixer.appendChild(hr);  
        }
				obsMixer.appendChild(div);
			});
		}
	})
});

connectBtn.addEventListener('click', () => {
	obsAddress.value = addressInput.value;
	nodecg.sendMessage('connect-obs', addressInput.value).then((result) => {
		if (result) {
			nodecg.log.info('Connected');
		}
	})
})

disconnectBtn.addEventListener('click', () => {
	nodecg.sendMessage('disconnect-obs').then((result) => {
		if (result) {
			nodecg.log.info('Disconnected');
			while (obsMixer.firstChild) {
				obsMixer.removeChild(obsMixer.firstChild);
			}
		}
	})
})


// nodecg.listenFor('obs-mixer', (value, ack) => {
// 	nodecg.log.info(value);
// })

const playBtn = document.querySelector('#btn-play');
const pauseBtn = document.querySelector('#btn-pause');
const nextBtn = document.querySelector('#btn-next');
const text = document.querySelector('#musica4');
const text1 = document.querySelector('#musica5');

const songName = nodecg.Replicant('songName');

songName.on('change', (value) => {
	text.innerHTML = value.id;
	text1.innerHTML = value.name;
})

playBtn.addEventListener('click', () => {
	nodecg.sendMessage('playVideo');
})

pauseBtn.addEventListener('click', () => {
	nodecg.sendMessage('pauseVideo');
})
nextBtn.addEventListener('click', () => {
	nodecg.sendMessage('nextVideo');
})
