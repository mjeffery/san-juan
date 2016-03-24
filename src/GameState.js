"use strict";
var shortid = require('shortid');
var Deck = require('./Deck');
var Players = require('./Players');

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

GameState.create = (obj)=>{
	let deck = Deck.create({cards: obj.deck, discard: obj.discard});
	let players = Players.create({players: obj.players}, deck);
	
	return new GameState(obj, {deck, players});
};

module.exports = GameState;
