"use strict";
var shuffle = require('lodash').shuffle;

class Deck {
    constructor() {
        this._deck = [];
        this._discard = [];
    }

    draw(){
        return _deck.pop();
    }

    reset(){
        this._deck = shuffle(Array.concat(this._deck, this._discard));
    }
}

module.exports = Card;
