const { Todos } = require('../../../../models');
const { getResolveBodyTodos } = require('../../../../services/todos');
const { isValidChangesForTodo, resolve } = require('../../../../utils');
const { DEFAULT_PAGE, TODOS_STATUS, ITEMS_PER_PAGE } = require('../../../../constants');

const put = async (ctx) => {
  const { userId } = ctx.state.user;
  const todoId = ctx.params.id;
  const { 
    page = DEFAULT_PAGE, 
    limit = ITEMS_PER_PAGE,
    filter = TODOS_STATUS.ALL
  } = ctx.query;
  const updatesForTodo = ctx.request.body; 

  if (isValidChangesForTodo(updatesForTodo)) {
    await Todos.query()
    .where({ userId, id: todoId })
    .patch(updatesForTodo);

    const body = await getResolveBodyTodos({ userId, page, limit, filter })
    
    return resolve(ctx, body);
  }
  return ctx.throw(401, `Not valid change ${JSON.stringify(updatesForTodo)}`)
}

module.exports = put;

