'use strict';

let router = require('express').Router();
let Promise = require('bluebird');
let bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));
let Player = require('../Player');

let isAuthenticated = require('../security/isAuthenticated');

//TEMPORARY
router.get('/', (req, res) => {
	res.render('index');
});

router.get('/lobby', isAuthenticated(), (req, res) => {
	let gameRepo = req.app.get('games');

	gameRepo.findGamesToJoin()
		.then((games)=>{
			res.render('lobby', { user: req.session.user, games: games});
		})
		.catch((err)=>{
			res.send(err.stack)
		})
});

router.get('/join/:gameId', isAuthenticated(), (req, res) => {
	let gameRepo = req.app.get('games');
	let id = req.param('gameId');
	
	gameRepo.findGame(id)
		.then((game) => {
			
			return gameRepo.save(id, game)
		})
		.then((game)=>{
			res.json({game});
		})
		.catch((err) =>{
			res.json(err.stack)
		})
});

// END TEMPORARY

router.get('/login', (req, res) => {
	res.render('login', { 
		username: req.flash('username') || '',
		error: req.flash('error') 
	});
});

router.post('/login', (req, res) => {
	let userRepo = req.app.get('users');

	let username = req.body.username;
	let password = req.body.password;

	//TODO pull this out into a login service?
	userRepo.findByUsername(username)
		.then(user => {
			return bcrypt.compareAsync(password, user.hash)
				.then(matchesHash => {
					if(matchesHash) {
						req.session.authenticated = true;
						req.session.user = user;

						let url = '/lobby';
						if(req.session.redirectOnAuth) {
							url = req.session.redirectOnAuth;
							req.session.redirectOnAuth = false;
						}

						res.redirect(url);
					}
					else {
						return Promise.reject();
					}
				})
		})
		.catch(err => {
			req.flash('error', 'Provided credentials do not match any known users');
			req.flash('username', username);
			res.redirect('/login');
		})
});

router.get('/logout', (req, res) => {
	req.session.destroy( err => {
		if(err) { /* TODO: do something */ }
		res.redirect('/');
	});
});

module.exports = router;
