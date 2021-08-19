
exports.up = function(knex) {
  return knex.schema.createTable('refresh_token', function(table) {
    table.string('refreshToken');
    table.integer('userId').references('id').inTable('users').unique();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("refresh_token")
};
