"use strict";
var shortid = require('shortid');

class Player {

	constructor(data, objs) {
		this._userId = data.userId;
		this._role = data.role;
		
		this._deck = objs.deck;
		this._hand = objs.hand;
		this._buildings = objs.buildings;
	}

	build (card, payment) {

	}

	draw(){
		this._hand.push(this._deck.draw());
	}

	serializePublic(){
		return {
			cards: this.size(),
			discard: this.discardSize()
		};
	}

	asJson(){
		let json = (card) => {card.asJson()};
		return {
			userId : this._userId,
			role: this._role,
			hand : this._hand.map(json),
			buildings : this._buildings.map(json)
		}
	}
}

module.exports = Player;
