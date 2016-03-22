'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let cardSchema = new Schema({
	id: { type: Number },
	type: { type: Number }
});

let buildingSchema = new Schema({
	id: { type: Number },
	type: { type: Number },
	cards: { type: [cardSchema] }
});

let playerSchema = new Schema({
	userId: { type: String },
	username: { type: String },
	hand: { type: [cardSchema] },
	buildings: { type: [buildingSchema] },
	role:  { type: Number }
});

let gameSchema = new Schema({
	players: { type: [playerSchema] },
	phaseId: { type: String },
	deck: { type: [cardSchema] },
	discard: { type: [cardSchema] },
	tradingHouse: { type: [Number] },
	roles: { type: Number }
});

module.exports = new mongoose.Model('Game', gameSchema);
