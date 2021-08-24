import { Model } from 'objection';
import { RefreshTokenModel } from '../types';
import Users from './Users';

interface RefreshToken extends RefreshTokenModel {}

class RefreshToken extends Model {
  static get tableName() {
    return 'refresh_token';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [ 'userId', 'refreshToken'],

      properties: {
        id: { type: 'integer' },
        userId: { type: 'integer', unique: true }, 
        refreshToken: { type: 'string' },
      }
    };
  }

  static get relationMappings() {
    return {
      owner: {
        relation: Model.BelongsToOneRelation,
        modelClass: Users,
        join: {
          from: 'refresh_token.userId',
          to: 'users.id'
        }
      }
    }
  };
}

export default RefreshToken;