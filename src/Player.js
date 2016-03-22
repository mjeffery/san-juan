"use strict";
var shortid = require('shortid');

class Player {

	constructor(data, objs) {
		this._id = data.id;
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
		json = (card) => {card.asJson()};
		return {
			id : this._id,
			role: this._role,
			hand : this._cards.map(json),
			buildings : this._buildings.map(json)
		}
	}
}

module.exports = Player;
