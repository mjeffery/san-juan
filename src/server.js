'use strict';

var path = require('path');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var flash = require('connect-flash');

var UserRepository = require('./UserRepository');
var GameRepository = require('./GameRepository');

var gamesRouter = require('./routes/api/games');
var usersRouter = require('./routes/users');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(flash());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(session({
	secret: 'keyboard cat',
	cookie: { playerId: 1 },
	proxy: true,
	resave: true,
	saveUninitialized: true
}));

var userRepo = new UserRepository();
app.set('users', userRepo);

var gameRepo = new GameRepository();
app.set('games', gameRepo);

userRepo.createUser({ username: 'mjeffery', password: 'mjeffery', email: 'mjeffery@example.com' });
userRepo.createUser({ username: 'dnelson', password: 'dnelson', email: 'dnelson@example.com' });

app.use('/api', gamesRouter);
app.use(usersRouter);

app.listen(3000);
