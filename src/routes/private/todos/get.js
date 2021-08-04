const Todos = require("../../../models/Todos");
const { resolve, TODOS_STATUS } = require('../../../utils')

const get = async (ctx) => {
  const { userId } = ctx.state.user;
  const { page = 0, limit = 6, status } = ctx.query;

  const query = Todos.query()
    .where({ userId })
    .page(parseInt(page) - 1, parseInt(limit));

  if (status === TODOS_STATUS.COMPLETED || status === TODOS_STATUS.INCOMPLETED) {
    query.where({ status })
  } else if (status === TODOS_STATUS.ALL) {

    const count = await Todos.query().where({ userId }).then((i) => { 
      let active = 0;
      let completed = 0;
      i.forEach(t => {
        t.status === TODOS_STATUS.COMPLETED? completed++ : active++
      })
      return { active, completed }
    });

    const todos = await query;

    const body = {
      page,
      limit,
      count,
      list: todos, 
    };

    return resolve(ctx, body);
  }
  return ctx.throw(401, 'Not valid status');
} 

module.exports = get;