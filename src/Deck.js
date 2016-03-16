"use strict";
var shuffle = require('lodash').shuffle;

class Deck {
    constructor() {
        this._cards = [];
        this._discard = [];
    }

    draw(){
        return _cards.pop();
    }

    reset(){
        this._cards = shuffle(Array.concat(this._cards, this._discard));
    }

    size(){
        return this._cards.length
    }

    discardSize(){
        return this._discard.length
    }

    serializePublic(){
        return {
            cards: this.size(),
                discard: this.discardSize()
        };
    }
}

module.exports = Card;
