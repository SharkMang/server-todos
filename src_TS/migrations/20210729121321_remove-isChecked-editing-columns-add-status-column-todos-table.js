const { TODOS_STATUS } = require('../constants');

exports.up = async function(knex) {
  await knex.schema.table('todos', function(table) {
    table.renameColumn('nameTodo', 'name');
    table.dropColumn('editing');
    table.string('status');
  })

  const todosToUpdate = await knex('todos').select('id', 'isChecked').whereNull('status');

  await Promise.all(
    todosToUpdate.map(({ id, isChecked }) => 
      knex('todos')
        .where({ id })
        .update({ 
          status: isChecked ? TODOS_STATUS.COMPLETED : TODOS_STATUS.INCOMPLETED,
        }) 
    )
  )

  await knex.schema.table('todos', function(table) {
    table.dropColumn('isChecked');
  })
};

exports.down = async function(knex) {
  await knex.schema.table('todos', function(table) {
    table.boolean('isChecked');
    table.boolead('editing');
  })

  const todosToUpdate = await knex('todos').select('id', 'status').whereNull('isChecked');

  await Promise.all(
    todosToUpdate.map(({ id, status }) => 
      knex('todos')
        .where({ id })
        .update({ 
          isChecked: status === TODOS_STATUS.COMPLETED,
          editing: false 
        })
    )
  )

  await knex.schema.alterTable('todos', function(table) {
    table.renameColumn('name', 'nameTodo');
    table.dropColumn('status');
  })
};