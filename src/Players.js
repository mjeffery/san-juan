'use strict';

let _ = require('lodash');
let Player = require('./Player');

/**
 * @class
 */
class Players {
	constructor(deck) {
		this._deck = deck;
		this._players = {};
		this._order = [];
	}

	*[Symbol.Iterator]() {
		for(let id of this._order) {
			yield this._players[id];
		}
	}

	get length() { 
		return this._order.length; 
	}

	player(id) {
		return this._players[id];
	}

	add(player) {
		var id = player._userId;
		player._deck = this._deck;
		var existing = this._players[id];
		if(!!existing) { 
			//TODO this is an error state? 
		}
		else {
			this._players[id] = player;
			this._order.push(id);
		}
	}
		
	remove(idOrPlayer) {
		let id = (idOrPlayer instanceof Player) ? idOrPlayer.id : idOrPlayer;

		_.remove(this._order, id);
		this._players[id] = null;
	}

	shuffle() {
		this._order = _.shuffle(this._order);
	}
	
	asJson() {
		return this._order.map( (id)=> {
				return this._players[id].asJson()
			})
	}
}

Players.create= (obj, deck)=>{
	let players = new Players(deck);
	
	obj.players.forEach((p)=>{players.add(Player.create(p, deck))});
	
	return players;
};

module.exports = Players;
