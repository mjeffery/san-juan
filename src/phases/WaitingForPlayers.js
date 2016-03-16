'use strict';

let Phase = require('../Phase');

class WaitingForPlayersPhase extends Phase {
	onStart(state) {
	}

	onMessage(state, player, msg) {

	}
}

module.exports = new WaitingForPlayersPhase();
