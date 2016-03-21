'use strict';

let _ = require('lodash');
let Promise = require('bluebird');
let Joi = require('joi');
let bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));

let validate = Promise.promisify(Joi.validate, { context: Joi });


let schema = Joi.object().keys({
	username: Joi.string().trim().required().min(4).alphanum(),
	email: Joi.string().trim().required().email(),
	password: Joi.string().required().min(6).max(50)
});


let nextId = 0;
let users = {};

class UserRepository {
	constructor() { 
	}

	createUser(data) {
		return validate(data, schema)
			.then(validData => {
				let hash =  bcrypt.genSaltAsync(10)
					.then(salt => bcrypt.hashAsync(validData.password, salt, null) );

				let exists = this.findByUsername(validData.username)
					.then( () => true)
					.catch( () => false);

				return Promise.join(exists, hash, (exists, hash) => {
					if(exists) throw new Error('User already exists!');

					let id = nextId++;
					let user = users[id] = {
						id: id,
						username: validData.username,
						email: validData.email,
						hash: hash
					};

					return user;
				});
			});
	}

	findById(id) {
		return Promise.resolve(users[id]);	
	}

	findByUsername(username) {
		return new Promise((resolve, reject) => {
			let user = _.find(users, { username: username});
			!!user ? resolve(user) : reject();
		});
	}
}

module.exports = UserRepository;
