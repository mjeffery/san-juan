var mongoose = require('mongoose');

var GameState = require('../src/GameState');
var Deck = require('../src/Deck');
var Players = require('../src/Players');
var Player = require('../src/Player');

mongoose.connect('mongodb://localhost/myapp');

module.exports = function game(){
    var deck = new Deck({cards: [], discard: []});
    var players = new Players();
    
    players.add(new Player({id: 1, role: 'commander taco'}, {deck: deck, hand: [], buildings: []}));
    players.add(new Player({id: 2, role: 'anarchy fajitas'}, {deck: deck, hand: [], buildings: []}));
    
    return new GameState({id: 1, phase: 0}, {players: players, deck: deck, tradingHouse: {}});
};