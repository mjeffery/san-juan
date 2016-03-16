var GameState = require('../src/GameState');
var Deck = require('../src/Deck');
var Players = require('../src/Players');
var Player = require('../src/Player');

module.exports = function game(){
    var deck = new Deck();
    var players = new Players();

    players.add(new Player(1, deck));
    players.add(new Player(2, deck));

    return new GameState(players, deck);

};