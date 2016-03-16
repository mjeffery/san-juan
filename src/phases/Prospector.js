"use strict";

var Phase = require('../Phase');

class Prospector extends Phase {
    onStart(state) {
        state.currentPlayer().draw();
        state.phase('role-select')
    }
}

module.exports = Prospector;