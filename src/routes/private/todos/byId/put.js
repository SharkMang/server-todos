const Todos = require('../../../../models/Todos');
const { isValidChangesForTodo, resolve } = require('../../../../utils');

const put = async (ctx) => {
  const { userId } = ctx.state.user;
  const todoId = ctx.params.id;
  const updatesForTodo = ctx.request.body; 


  try{
    if (!isValidChangesForTodo(updatesForTodo)) throw{}

    await Todos.query()
      .where({ userId })
      .findById(todoId)
      .patch(updatesForTodo);

    const todos = await Todos.query().where({ userId });
    
    const body = {
      massege: `Successfully updated!`,
      list: todos
    };
  
    return resolve(ctx, body);
  } catch(err) {
    return ctx.throw(401, `Not valid change ${JSON.stringify(updatesForTodo)}`)
  }
  
}

module.exports = put;

