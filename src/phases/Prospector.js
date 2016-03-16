"use strict";

var Phase = require('../Phase');

class Prospector extends Phase {
    onStart(state) {


        state.phase('role-select')
    }
}

module.exports = Phase;