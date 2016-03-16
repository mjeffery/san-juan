"use strict";

class GameState {

	constructor(players, deck) {
		this._players = players;
		this._deck = deck;
		this._phaseId = 0;
	}

	get players() { return }

	set phase(val) { this._phaseId = phase; }

	currentPlayer (){

	}

	nextPlayer(){}

	serializeForPlayer(id) {
		let player = this._players.player(id);

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
