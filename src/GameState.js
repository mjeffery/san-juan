"use strict";
var shortid = require('shortid');

class GameState {

	constructor(players, deck) {
		this._id = shortid.generate();
		this._players = players;
		this._deck = deck;
		this._phaseId = 0;
	}

	get players() { return }

	set phase(val) { this._phaseId = phase; }

	currentPlayer (){}

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

	get id(){
		return this._id;
	}
}

module.exports = GameState;
