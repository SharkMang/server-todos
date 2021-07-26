
exports.up = function(knex) {
  knex.schema.createTable('users', function() {
    table
      .autoincrements('id')
      .string('name')
      .string('email')
      .string('password')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("users")
};
