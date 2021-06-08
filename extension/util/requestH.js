const axios = require('axios');

// Info importante para la solicitud
baseURLHoraro = 'https://horaro.org/-/api/v1';
baseURLOengus = 'https://oengus.io/api/marathons/';
const horarioHoraro = axios.create({
	baseURL: `${baseURLHoraro}`
})

const horarioOengus = axios.create({
	baseURL: `${baseURLOengus}`
})

async function get(url) {
	let response =  await horarioHoraro.get(url);
  return response.data;
}

function put(url) {
	var result = horarioHoraro.put(url).then(function (response) {
		console.log(response.data);
		return response.data;
	});
}

// Info para el horario
let horaroCounter = 0;
let horaroCounterMax = -1;
let active = false;
let nextRuns = [];
// baseTitle = `${process.env.STREAM_TITLE}`;
let comsEdited = false;
let runnerEdited = false;
let categoriaEdited = false;
let estimadoEdited = false;




// Exportar informacion
module.exports = {
	horarioHoraro,
	horarioOengus,
	get,
	put,
	baseURLHoraro,
	baseURLOengus,
	horaroCounter,
	horaroCounterMax,
	active,
	nextRuns,
	comsEdited,
	runnerEdited,
	categoriaEdited,
	estimadoEdited
};
