'use strict';

let games = {};

class GameRepository {

	findGame(id) {
		return games[id];
	}

	saveGame(id, game) {
		games[id] = game;
	}
}

module.exports = GameRepository;
