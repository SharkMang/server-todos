const Todos = require("../../../models/Todos");

const get = async (ctx) => {
  const { userId } = ctx.header;

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

module.exports = get;