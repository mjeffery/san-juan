'use strict';

var router = require('express').Router();
var GameRepository = require('../GameRepository');
var findPhase = require('../phases');

var gameRepo = new GameRepository();

var game = gameRepo.create();

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

router.post('/games/:id', (req, res) => {
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

module.exports = router;