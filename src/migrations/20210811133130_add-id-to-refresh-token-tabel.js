
exports.up = async function(knex) {
  await knex.schema.table('refresh_token', function(table) {
    table.increments('id').primary();
    table.unique(['userId']);
  })
};

exports.down = async function(knex) {
  await knex.schema.table('refresh_token', function(table) {
    table.dropColumn('id');
  })
};
