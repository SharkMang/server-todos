const Todos = require('../../../../models/Todos');

const put = async (ctx) => {
  const { userId } = ctx.header;
  const todoId = ctx.params.id;
  const { newTodo } = ctx.request.body;

  await Todos.query()
    .where({ userId: id })
    .findById(todoId)
    .patch({
      todo: newTodo
    })

  ctx.body = {
    massege: 'Successfully updated'
  }
  
  return;
}

module.exports = put;