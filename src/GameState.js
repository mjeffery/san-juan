"use strict";

class GameState {
	constructor(players, deck) {
		this._players = [];
		this._deck = deck;
		this._phaseId = 0;
	}

	set phase(val) { this._phaseId = phase; }

	currentPlayer (){

	}

	nextPlayer(){}

	serializeForPlayer(player) {
		return {
			game: {
				deck: this._deck.serializePublic()
			},
			hand: player._hand,
			buildings: player._buildings
		};
	}
}

module.exports = GameState;
