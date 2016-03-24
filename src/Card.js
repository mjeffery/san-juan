"use strict";

var CardTypes = require('./cards/CardTypes');

class Card {
	
	constructor(data) {
		this._id = data._id;
		this._name = CardTypes.card(data.type);
	}

	asJson(){
		return {
			id: this._id,
			type: CardTypes.id(this._name)
		}
	}
}

Card.create=(card) => {
	return new Card(card);	
};

module.exports = Card;
