const Todos = require('../../../../models/Todos');

const deleteById = async (ctx) => {
  const userId = ctx.state.user.date;
  const todoId = ctx.params.id;

  await Todos.query()
    .where({ userId })
    .deleteById(todoId)

  ctx.status = 200;
  ctx.body = {
    massege: 'Successfully deleted'
  }
  
  return;
}

module.exports = deleteById;