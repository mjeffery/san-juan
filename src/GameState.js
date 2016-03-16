"use strict";

class GameState {
	constructor(players) {
		this.players = [];
		this._activeRoleSelectPlayer = null;
		this._phaseId = 0;
	}

	set phase(val) { this._phaseId = phase; }

	currentPlayer (){

	}

	nextPlayer(){}
}

module.exports = GameState;
