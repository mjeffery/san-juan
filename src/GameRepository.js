'use strict';
var GameState = require('../src/GameState');
var Deck = require('../src/Deck');
var Players = require('../src/Players');
var Player = require('../src/Player');
var Game = require('./db/game');

let games = {};

function create(){
	let deck = new Deck({cards: [new Card({name: 'card 1'})], discard: [new Card({name: 'card 1'})]});
	let players = new Players();

	return new GameState({id: null, phase: 0}, {players: players, deck: deck, tradingHouse: {}});
}

class GameRepository {

	create() {
		let game = new Game(create().asJson());
		
		return game.save()
			.then((game)=> new GameState());
	}
	
	findGame(id) {
		return Game.findOne({_id: id})
			.exec()
			.then((game)=>{
				return GameState.create(game);
			})
	}

	save(id, gameState) {
		return Game.findOneAndUpdate({_id: id}, new Game(gameState.asJson()), {overwrite: true}).exec();
	}

	findGamesToJoin (){
		return Game
			.find({phaseId:'waiting-for-players'})
			.exec()
			.then((game)=>{
				return GameState.create(game);
			})
	}
}

module.exports = GameRepository;
