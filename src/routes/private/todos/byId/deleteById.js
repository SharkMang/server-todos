const Todos = require('../../../../models/Todos');

const deleteById = async (ctx) => {
  const { userId } = ctx.header;
  const todoId = ctx.params.id;

  await Todos.query()
    .where({ userId: id })
    .deleteById(todoId)

  ctx.body = {
    massege: 'Successfully deleted'
  }
  
  return;
}

module.exports = deleteById;