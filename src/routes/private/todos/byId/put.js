const Todos = require('../../../../models/Todos');
const { isValidChangesForTodo, resolve, TODOS_STATUS, ITEMS_PER_PAGE } = require('../../../../utils');

const put = async (ctx) => {
  const { userId } = ctx.state.user;
  const todoId = ctx.params.id;
  const { 
    page = 1, 
    limit = ITEMS_PER_PAGE,
    status = TODOS_STATUS.ALL
  } = ctx.query;
  const updatesForTodo = ctx.request.body; 

  try{
    if (!isValidChangesForTodo(updatesForTodo)) throw{}
 
    await Todos.query()
      .where({ userId, id: todoId })
      .patch(updatesForTodo);
    
    const query = Todos.query()
      .where({ userId })
      .select('id','name','status')
      .orderBy('id')
      .page(parseInt(page) - 1, parseInt(limit));
  
    if (status !== TODOS_STATUS.ALL) {
      query.where({ status })
    }
  
    const todos = await query;

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
      massege: `Successfully updated!`,
      page: parseInt(page),
      limit: parseInt(limit),
      status,
      list: todos.results.sort((a, b) => a.id > b.id ? 1 : -1),
      count,
    };
  
    return resolve(ctx, body);
  } catch(err) {
    return ctx.throw(401, `Not valid change ${JSON.stringify(updatesForTodo)}`)
  }
  
}

module.exports = put;

