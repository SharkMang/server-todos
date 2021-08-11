const Todos = require('../../../models/Todos');
const { TODOS_STATUS, ITEMS_PER_PAGE, resolve, isValidName } = require('../../../utils');

const post = async (ctx) => {
  const { userId } = ctx.state.user;
  const { name } = ctx.request.body;
  const { 
    page = 1, 
    limit = ITEMS_PER_PAGE,
    status = TODOS_STATUS.ALL
  } = ctx.query;

  try{
    if (!isValidName(name)) throw{}

    await Todos.query().insert({
      userId,
      name,
      status: TODOS_STATUS.INCOMPLETED
    });

    const todos = await Todos.query()
      .where({ userId })
      .select('id','name','status')
      .orderBy('id')
      .page(parseInt(page) - 1, parseInt(limit));

    const count = await Todos.query().where({ userId }).then((i) => { 
      let active = 0;
      let completed = 0;
      let total = i.length;
      i.forEach(t => {
        t.status === TODOS_STATUS.COMPLETED? completed++ : active++
      })
      return { active, completed, total }
    });
    
    const body = {
      message: 'successfuly added todo',
      page: parseInt(page),
      limit: parseInt(limit),
      status: TODOS_STATUS.ALL,
      count,
      list: todos
    }

    return resolve(ctx, body);
  } catch(err) {
    return ctx.throw(401, 'Not valid name')
  }
  
}


module.exports = post;