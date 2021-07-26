const { Model } = require('objection');
const Knex = require('knex');
const { default: config  } = require('../config');

const knex = Knex(config.DB);

module.exports = Model.knex(knex);