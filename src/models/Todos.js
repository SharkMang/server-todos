const { Model } = require('objection');
const Users = require('./Users');

class Todos extends Model {
  static get tableName() {
    return 'todos';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['userId', 'id', 'nameTodo', 'isChecked', 'editing'],

      properties: {
        userId: { type: 'integer' }, 
        id: { type: 'integer' },
        nameTodo: { type: 'string' },
        isChecked: { type: 'boolean' },
        editing: { type: 'boolean' }
      }
    };
  }

  static get relationMappings() {
    return {
      owner: {
        relation: Model.BelongsToOneRelation,
        modelClass: Users,
        join: {
          from: 'todos.userId',
          to: 'users.id'
        }
      }
    }
  };
}

module.exports = Todos;