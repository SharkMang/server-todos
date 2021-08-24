import { Model } from 'objection';
import Knex from 'knex';
import { DB } from '../config';

const knex = Knex(DB);

const connection = () => {
  return Model.knex(knex)
}

export default connection;