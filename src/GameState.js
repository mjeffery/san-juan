"use strict";
var shortid = require('shortid');

class GameState {

	constructor(data, objs) {
		this._id = data.id;
		this._phaseId = data.phaseId;
		this._players = objs.players;
		this._deck = objs.deck;
		this._tradingHouse = objs.tradingHouse;
	}

	get players() { return }

	set phase(val) { this._phase = phase; }

	currentPlayer (){}

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
	
	asJson(){
		let deck = this._deck.asJson();
		
		return {
			id: this._id,
			phaseId: this._phaseId,
			players: this._players.asJson(),
			deck: deck.cards,
			discard: deck.discard
		}
	}
}

module.exports = GameState;
