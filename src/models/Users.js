const { Model } = require('objection');
const Todos = require('./Todos');

class Users extends Model {
  static get tableName() {
    return 'users';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [ 'name', 'lastName', 'email'],

      properties: {
        id: { type: 'integer', unique: true },
        name: { type: 'string', },
        lastName: { type: 'string' },
        email: { type: 'string', unique: true },
        password: {type: 'string'}
      }
    };
  }

  static get relationMappings() {
    return {
      todos: {
        relation: Model.HasManyRelation,
        modelClass: Todos,
        join: {
          from: 'users.id',
          to: 'todos.userId'
        }
      }
    }
  };

  static format(user) {
    return {
      id: user.id,
      name: user.name,
      lastName: user.lastName,
      email: user.email
    }
  }
}

module.exports = Users