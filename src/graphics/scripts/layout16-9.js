import '../styles/layout16-9.css';


let game = document.querySelector('#game');
let category = document.querySelector('#category');
let estimate = document.querySelector('#estimate');
let platform = document.querySelector('#platform');

const generalRunInfo = nodecg.Replicant('generalRunInfo');

NodeCG.waitForReplicants(generalRunInfo).then(() => {
  generalRunInfo.on('change', (value) => {
    game.innerHTML = value.game;
    category.innerHTML = value.category;
    estimate.innerHTML = value.estimate;
    platform.innerHTML = value.platform;
  })
})