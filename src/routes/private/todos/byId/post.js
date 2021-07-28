const Todos = require('../../../../models/Todos');

const post = async (ctx) => {
  const userId = ctx.state.user.date;
  const todoId = ctx.params.id;
  const updatesForTodo = ctx.request.body;

  await Todos.query()
    .where({ userId })
    .findById(todoId)
    .patch(updatesForTodo);

  ctx.body = {
    massege: `Successfully updated ${JSON.stringify(await Todos.query().where({ userId }).findById(todoId))}`,
  }
  
  return;
}

module.exports = post;