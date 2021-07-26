const Todos = require("../../../models/Todos");

const post = async (ctx) => {

  const { userId } = ctx.body;
  const { page = 0, limit = 1000 } = ctx.param

  const todos = await Todos.query()
    .where({ userId: id })
    .page(page)
    .limit(limit)
  
  return ctx.body = {
    todos,
    page,
    limit,
    totalCount,
  }
}


module.exports = post;