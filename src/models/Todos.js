const { Model } = require('objection');

class Todos extends Model {
  static get tableName() {
    return 'todos';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['id', 'nameTodo', 'isChecked', 'editing'],

      properties: {
        id: { type: 'integer' },
        nameTodo: { type: 'string' },
        isChecked: { type: 'boolean' },
        aditing: { type: 'boolean' }
      }
    };
  }
}

module.exports = Todos;