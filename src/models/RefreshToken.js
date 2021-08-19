const { Model } = require('objection');
const Users = require('./Users');

class RefreshToken extends Model {
  static get tableName() {
    return 'refresh_token';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['userId', 'refreshToken'],

      properties: {
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

module.exports = RefreshToken;