"use strict";

class Player {

	constructor(deck) {
		this._deck;
		this._hand = [];
		this._buildings = [];

	}

	build (card, payment) {

	}

	draw(){
		this._hand.push(this._deck.draw());
	}

}

module.exports = Player;
