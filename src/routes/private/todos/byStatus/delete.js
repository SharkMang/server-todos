const { Todos } = require("../../../../models");
const { getResolveBodyTodos } = require("../../../../services/todos");
const { resolve, isValidStatus } = require('../../../../utils');
const { DEFAULT_PAGE, TODOS_STATUS, ITEMS_PER_PAGE } = require("../../../../constants");


const deleteByStatus = async (ctx) => {
  const { userId } = ctx.state.user;
  const {
    page = DEFAULT_PAGE,
    limit = ITEMS_PER_PAGE,
    filter = TODOS_STATUS.ALL,
  } = ctx.query

  const { delStatus } = ctx.request.body;

  try{
    if (isValidStatus(filter) && delStatus !== TODOS_STATUS.ALL) {
      await Todos.query()
        .where({ userId, status: delStatus })
        .del()
    } else {
      throw{}
    }

    const body = await getResolveBodyTodos({ userId, page, limit, filter })
  
    return resolve(ctx, body);
  } catch(err) {
    return ctx.throw(401, `Not correct status: ${delStatus}`);
  }  
} 

module.exports = deleteByStatus;