const { Todos } = require('../../../../models');
const { getResolveBodyTodos } = require('../../../../services/todos');
const { resolve } = require('../../../../utils');
const { DEFAULT_PAGE, TODOS_STATUS, ITEMS_PER_PAGE } = require('../../../../constants');


const deleteById = async (ctx) => {
  const { userId } = ctx.state.user;
  const todoId = ctx.params.id;
  const { 
    page = DEFAULT_PAGE, 
    limit = ITEMS_PER_PAGE,
    filter = TODOS_STATUS.ALL
  } = ctx.query;

  await Todos.query()
    .where({ userId })
    .deleteById(parseInt(todoId));

    
  const body = await getResolveBodyTodos({ userId, page, limit, filter })
  
  return resolve(ctx, body);
}

module.exports = deleteById;