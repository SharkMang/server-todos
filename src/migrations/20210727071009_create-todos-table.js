
exports.up = function(knex) {
  return knex.schema.createTable('todos', function(table) {
    table.increments('id').primary();
    table.string('nameTodo');
    table.boolean('isChecked');
    table.boolean('editing');

    table.integer('userId').references('id').inTable('users');

    table.unique(['id', 'userId']);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("todos");
};
