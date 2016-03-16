var GameState = require('../src/GameState');
var Deck = require('../src/Deck');
var Player = require('../src/Player');

module.exports = function game(){
    var deck = new Deck();
    var players = [new Player(1, deck), new Player(2, deck)];

    return new GameState(players, deck);

};