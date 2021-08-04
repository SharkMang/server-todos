const Todos = require('../../../../models/Todos');
const { resolve } = require('../../../../utils');

const deleteById = async (ctx) => {
  const { userId } = ctx.state.user;
  const todoId = ctx.params.id;

  await Todos.query()
    .where({ userId })
    .deleteById(todoId);

  const todos = await Todos.query().where({ userId });
    
  const body = {
    massege: 'Successfully deleted',
    list: todos
  }
  
  return resolve(ctx, body);
}

module.exports = deleteById;