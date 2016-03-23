var mongoose = require('mongoose');

var GameState = require('../src/GameState');
var Deck = require('../src/Deck');
var Players = require('../src/Players');
var Player = require('../src/Player');
var Card = require('../src/Card');
mongoose.connect('mongodb://localhost/myapp');

module.exports = function game(){
    var deck = new Deck({cards: [new Card({name: 'card 1'})], discard: [new Card({name: 'card 1'})]});
    var players = new Players();
    
    players.add(new Player({userId: 1, role: 1}, {deck: deck, hand: [new Card({name: 'card 1'})], buildings: []}));
    players.add(new Player({userId: 2, role: 2}, {deck: deck, hand: [new Card({name: 'card 1'})], buildings: []}));
    
    return new GameState({id: null, phase: 0}, {players: players, deck: deck, tradingHouse: {}});
};