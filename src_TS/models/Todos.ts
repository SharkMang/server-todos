import { Model } from 'objection';
import { Todo } from '../types';
import Users from './Users';

interface Todos extends Todo {}

class Todos extends Model {
  static get tableName() {
    return 'todos';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['userId', 'name', 'status'],

      properties: {
        userId: { type: 'integer', unique: true }, 
        id: { type: 'integer', unique: true },
        name: { type: 'string' },
        status: { type: 'string' },
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

export default Todos;