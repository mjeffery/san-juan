'use strict';

let _ = require('lodash');
let Player = require('./Player');

class Players {
	constructor() {
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

	add(player) {
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
}

module.exports = Players;
