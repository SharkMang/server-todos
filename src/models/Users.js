const { Model } = require('objection');

class Users extends Model {
  static get tableName() {
    return 'users';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['id', 'name', 'lastName', 'email'],

      properties: {
        id: { type: 'integer', unique: true },
        name: { type: 'string', },
        lastName: { type: 'string' },
        email: { type: 'string', unique: true },
        password: {type: 'string'}
      }
    };
  }

  // static get relationMappings() {
  //   return {
  //     children: {
  //       relation: Model.HasManyRelation,
  //       modelClass: Person,
  //       join: {
  //         from: 'persons.id',
  //         to: 'persons.parentId'
  //       }
  //     }
  //   };
  // }
}

module.exports = Users