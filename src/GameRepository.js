'use strict';
var GameState = require('../src/GameState');
var Deck = require('../src/Deck');
var Players = require('../src/Players');
var Player = require('../src/Player');

let games = {};

function build(){
	let deck = new Deck();
	let players = new Players();
	let game = new GameState(players, deck);

	players.add(new Player(1, deck));
	players.add(new Player(2, deck));

	return game;
}

class GameRepository {

	create() {
		let game = build();

		games[game.id] = game;

		return game;
	}



	findGame(id) {
		return games[id];
	}

	saveGame(id, game) {
		games[id] = game;
	}
}

module.exports = GameRepository;
