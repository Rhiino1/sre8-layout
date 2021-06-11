'use strict';

//nodecg context, needed on all extensions.
const nodecgApiContext = require('./util/nodecg-api-context');


module.exports = function (nodecg) {
	nodecg.log.info(process.env.EXT_TIMER_URL)
	nodecgApiContext.set(nodecg);
	require('./util/replicant-declarator');
	require('./timerExtController/timerRouter');
	require('./timer');

	require('./horarioAPI')
	require('./oengusAPI')
	require('./oengusWebhook');

	require('./music')
	require('./util/obs-connection');
};
