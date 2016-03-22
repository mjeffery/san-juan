"use strict";

var CardTypes = require('./cards/CardTypes');

class Card {

	var _id;
	var _owner;
	var _name;
	var _gameState;
	
	constructor(data) {
		this._id = data.id;
		this._name = data.name;
		this._base = base;
	}

	asJson(){
		return {
			id: this._id,
			type: CardTypes.id(this._name)
		}
	}
}

module.exports = Card;
