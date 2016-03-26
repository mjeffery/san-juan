'use strict';

var router = require('express').Router();
var findPhase = require('../../phases');

var Game = require('../../db/game');

router.param('id', (req, res, next, id) => {
    req.game = game; //gameRepo.findGame(id);
    next();
});

router.put('/games');

router.get('/games/:id', (req, res) => {
    let game = req.game;
    let player = 1;

    res.json(game.serializeForPlayer(player));
});

router.post('/games', (req, res)=>{
   let gamesRepo = req.app.get('games');
    gamesRepo.create().then((game)=>{
       res.json(game); 
    });
});

router.post('/games/:id', (req, res) => {
    let gameState = req.game;
    let msg = req.body;
    let gamesRepo = req.app.get('games');
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

        gamesRepo.save(gameState)
            .then(function(err){
                res.json(game.serializeForPlayer(req.session.playerId));
            });
    }
    else {
        res.status(500);
    }
});

module.exports = router;