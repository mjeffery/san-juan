"use strict";

var CardTypes = require('./cards/CardTypes');

class Card {
	
	constructor(data) {
		this._id = data.id;
		this._name = data.name;
	}

	asJson(){
		return {
			id: this._id,
			type: CardTypes.id(this._name)
		}
	}
}

module.exports = Card;
