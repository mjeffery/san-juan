'use strict';

let Phase = require('../Phase');

class SessionStartPhase extends Phase {
	onStart(state) {
		state.phaseId = 'waiting-for-players';
	}
}

module.exports = new SessionStartPhase();
