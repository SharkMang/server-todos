
exports.up = async function(knex) {
  await knex.schema.alterTable('users', function(table) {
    table.string('email').notNullable().alter();
    table.string('password').notNullable().alter();
  })
};

exports.down = async function(knex) {
  await knex.schema.alterTable('users', function(table) {
    table.string('email').alter();
    table.string('password').alter();
  })
};
