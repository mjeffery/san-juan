var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var game = require('../test/GameMock')();


var findPhase = require('./phases');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

function findGame(id) { return game }

app.use(session({ secret: 'keyboard cat', cookie: { id: 'taco-buttplug' }}));

app.param('id', (req, res, next, id) => {
	findGame(id)
		.then((game) => {
			req.game = game; 
			next();
		})
		.catch((err) => {
			res.status(404);	
		});
});

app.get('/games/:id', (req, res, next) => {
	
});

app.post('/games/:id', (req, res, next) => {
	let game = req.game;
	let msg = req.body;

	let phaseId = game.phaseId;
	let phase = findPhase(phaseId);
	if(phase) {
		phase.onMessage(game, msg);
		
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
	}
	else {
		res.status(500);
	}
});
