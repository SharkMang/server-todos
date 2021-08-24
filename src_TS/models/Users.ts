import { Model } from 'objection';
import Todos from './Todos';
import { UserModel } from '../types'
import RefreshToken from './RefreshToken';

interface Users extends UserModel {}

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
      },
      refreshToken: {
        relation: Model.HasManyRelation,
        modelClass: RefreshToken,
        join: {
          from: 'users.id',
          to: 'refresh_token.userId'
        }
      }
    }
  };

  static format(user: UserModel) {
    return {
      name: user.name,
      lastName: user.lastName,
      email: user.email
    }
  }
}

export default Users