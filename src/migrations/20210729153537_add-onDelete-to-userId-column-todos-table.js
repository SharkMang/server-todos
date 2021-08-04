
exports.up = async function(knex) {

  const todosToUpdate = await knex('todos').select('userId', 'id');

  await knex.schema.table('todos', function(table) {
    table.dropColumn('userId');
  })

  await knex.schema.table('todos', function(table) {
    table
      .integer('userId')
      .references('id')
      .inTable('users')
      .onDelete('cascade');
  })

  await Promise.all(
    todosToUpdate.map(({ id, userId }) => 
      knex('todos')
        .where({ id })
        .update({ userId }) 
    )
  )
};

exports.down = async function(knex) {
  const todosToUpdate = await knex('todos').select('userId', 'id');

  await knex.schema.table('todos', function(table) {
    table.dropColumn('userId');
  })

  await knex.schema.table('todos', function(table) {
    table
      .integer('userId')
      .references('id')
      .inTable('users');
  })

  await Promise.all(
    todosToUpdate.map(({ id, userId }) => 
      knex('todos')
        .where({ id })
        .update({ userId }) 
    )
  )
};
