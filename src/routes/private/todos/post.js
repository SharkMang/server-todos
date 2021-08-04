const Todos = require('../../../models/Todos');
const { TODOS_STATUS, resolve, isValidName } = require('../../../utils');

const post = async (ctx) => {
  const { userId } = ctx.state.user;
  const { name } = ctx.request.body;

  const { page = 0, limit = 1000,  } = ctx.query;
  try{
    if (!isValidName(name)) throw{}

    await Todos.query().insert({
      userId,
      name,
      status: TODOS_STATUS.INCOMPLETED
    });

    const todos = await Todos.query()
      .where({ userId })
      .page(parseInt(page), parseInt(limit));
    
    const body = {
      message: 'successfuly added todo',
      page,
      limit,
      list: todos
    }

    return resolve(ctx, body);
  } catch(err) {
    return ctx.throw(401, 'Not valid name')
  }
  
}


module.exports = post;