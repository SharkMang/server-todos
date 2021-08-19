const { Todos } = require('../../../models');
const { getResolveBodyTodos } = require('../../../services/todos');
const { resolve, isValidName } = require('../../../utils');
const { DEFAULT_PAGE, TODOS_STATUS, ITEMS_PER_PAGE } = require('../../../constants');

const post = async (ctx) => {
  const { userId } = ctx.state.user;
  const { name } = ctx.request.body;
  const { 
    page = DEFAULT_PAGE, 
    limit = ITEMS_PER_PAGE,
  } = ctx.query;

  try{
    if (!isValidName(name)) throw{}

    await Todos.query().insert({
      userId,
      name,
      status: TODOS_STATUS.INCOMPLETED
    });

    const body = await getResolveBodyTodos({ userId, page, limit })
    
    return resolve(ctx, body);
  } catch(err) {
    return ctx.throw(401, 'Not valid name')
  }
  
}


module.exports = post;