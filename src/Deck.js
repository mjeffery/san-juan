"use strict";
var shuffle = require('lodash').shuffle;

class Deck {
    constructor(objs) {
        this._cards = objs.cards;
        this._discard = objs.discard;
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
    
    asJson(){
        return {
            cards: this._cards,
            discard: this._discard
        };
    }
}

module.exports = Deck;
