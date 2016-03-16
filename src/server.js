'use strict';

var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var game = require('../test/GameMock')();

var findPhase = require('./phases');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

function findGame(id) { return game }

app.use(session({
	secret: 'keyboard cat',
	cookie: { playerId: 1 },
	proxy: true,
	resave: true,
	saveUninitialized: true
}));

app.param('id', function(req, res, next){
	req.game = game;
	next();
});/*(req, res, next, id) => {
	findGame(id)
		.then((game) => {
			req.game = game;
			next();
		})
		.catch((err) => {
			res.status(404);
		});
});*/

app.post('/games/:id', (req, res) => {
	let game = req.game;
	let msg = req.body;

	let phaseId = game.phaseId;
	let phase = findPhase(phaseId);
	if(phase) {
		phase.onMessage(game, req.session.playerId, msg);
		
		while(game.phaseId !== phaseId) {
			phaseId = game.phaseId;
			phase = findPhase(phaseId);
			if(phase) {
				phase.onStart(game);
			}
			else {
				res.status(404);
				break;
			}
		}

		res.json(game.serializeForPlayer(req.session.playerId));
	}
	else {
		res.status(500);
	}
});

app.listen(3000);
