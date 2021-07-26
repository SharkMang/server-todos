const Todos = require('../../../../models/Todos');

const post = async (ctx) => {
  console.log(ctx);
  const { userid } = ctx.header;
  const todoId = ctx.params.id;
  const { newTodo } = ctx.request.body;

  await Todos.query()
    .where({ userid: id })
    .findById(todoId)
    .patch({
      todo: newTodo
    })

  ctx.body = {
    massege: 'Successfully updated'
  }
  
  return;
}

module.exports = post;