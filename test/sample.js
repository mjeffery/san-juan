'use strict';

let Game = require('../src/db/game');

let game = new Game(require('./GameMock')());

game.save((err)=>console.log('Probably a success:'+err));