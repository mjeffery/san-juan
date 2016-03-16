"use strict";

let phases = {
	'session-start': require('./SessionStart'),
	'waiting-for-players': require('./WaitingForPlayers'),
	'game-start': require('./GameStart')
};

module.exports = function findPhase(id) { return phases[id]; }
