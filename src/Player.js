"use strict";

class Player {

	constructor(id, deck) {
		this._id = id;
		this._deck = deck;
		this._hand = [];
		this._buildings = [];

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
}

module.exports = Player;
