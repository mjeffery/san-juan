"use strict";

let _ = require('lodash');
let Phase = require('../Phase');

class GameStartPhase extends Phase {
	onStart(state) {
		state.deck.reset();
		for(let player in state.players) {
			player.drawCards(4);
		}

		state.tradingHouse.shuffle();
	}
}

module.exports = new GameStartPhase();
