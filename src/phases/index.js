"use strict";

let phases = {
	'game-start': require('./GameStartPhase')
};

module.exports = function findPhase(id) { return phases[id]; }
