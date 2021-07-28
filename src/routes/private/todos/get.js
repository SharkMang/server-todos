const Todos = require("../../../models/Todos");

const get = async (ctx) => {
  const userId = ctx.state.user.date;
  let { page = 0, limit = 1000 } = ctx.query;
  

  page = parseInt(page);
  limit = parseInt(limit);

  const todos = await Todos.query()
    .where({ userId })
    // .page(page)
    // .limit(limit)

  const countTodos = await Todos.query().where({userId}).count('isChecked');
  
  ctx.status = 200;
  ctx.body = {
    countTodos,
    todos,
    page,
    limit,
  };

  return ctx;
} 

module.exports = get;