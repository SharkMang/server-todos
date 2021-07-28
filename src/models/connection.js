const { Model } = require('objection');
const Knex = require('knex');
const config = require('../config');

const knex = Knex(config.DB);

const connection = async () => {
  return Model.knex(knex)
}

module.exports = connection;