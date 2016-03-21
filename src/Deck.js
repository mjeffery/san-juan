"use strict";
var shuffle = require('lodash').shuffle;

class Deck {
    constructor() {
        this._cards = [];
        this._discard = [];
    }

    draw(){
		if(this._cards.length === 0) {
			this.reset();
		}

		return this._cards.pop();
    }

	discard(card) {
		this._discard.push(card);
	}

    reset(){
        this._cards = shuffle(Array.concat(this._cards, this._discard));
		this._discard = [];
    }

    size(){
        return this._cards.length;
    }

    discardSize(){
        return this._discard.length;
    }

    serializePublic(){
        return {
            cards: this.size(),
                discard: this.discardSize()
        };
    }
}

module.exports = Deck;
