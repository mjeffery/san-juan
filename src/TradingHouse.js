'use strict';

let _ = require('lodash');

let tiles = [
	[1,1,1,2,2],
	[1,2,2,2,3],
	[1,2,2,3,3],
	[1,1,2,2,2],
	[1,1,2,2,3]
];

class TradingHouse {

	constructor() {
		this._tiles = [0, 1, 2, 3, 4];
	}

	shuffle() {
		this._tiles = _.shuffle(this._tiles);
	}
}
