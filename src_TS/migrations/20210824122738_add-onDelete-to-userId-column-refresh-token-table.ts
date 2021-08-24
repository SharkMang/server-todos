import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  const tokenToUpdate = await knex('refresh_token').select('userId', 'id');

  await knex.schema.table('refresh_token', function(table) {
    table.dropColumn('userId');
  })

  await knex.schema.table('refresh_token', function(table) {
    table
      .integer('userId')
      .references('id')
      .inTable('users')
      .onDelete('cascade');
  })

  await Promise.all(
    tokenToUpdate.map(({ id, userId }) => 
      knex('refresh_token')
        .where({ id })
        .update({ userId }) 
    )
  )
}


export async function down(knex: Knex): Promise<void> {
  const todosToUpdate = await knex('refresh_token').select('userId', 'id');

  await knex.schema.table('refresh_token', function(table) {
    table.dropColumn('userId');
  })

  await knex.schema.table('refresh_token', function(table) {
    table
      .integer('userId')
      .references('id')
      .inTable('users');
  })

  await Promise.all(
    todosToUpdate.map(({ id, userId }) => 
      knex('refresh_token')
        .where({ id })
        .update({ userId }) 
    )
  )
}
