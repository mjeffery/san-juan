'use strict';

let Game = require('../src/db/game');

let gameState = require('./GameMock')();
let game = new Game(gameState.asJson());

console.log(gameState.asJson());

game.save((err)=>console.log('Probably a success:'+err));