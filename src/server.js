'use strict';

var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');

var gamesRouter = require('./api/games');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
	secret: 'keyboard cat',
	cookie: { playerId: 1 },
	proxy: true,
	resave: true,
	saveUninitialized: true
}));

app.use('/api', gamesRouter);

app.listen(3000);
