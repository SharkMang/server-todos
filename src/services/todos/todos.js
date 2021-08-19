const { Todos } = require('../../models')
const { TODOS_STATUS } = require('../../constants')

module.exports = async ({ userId, page, limit, filter }) => {

  const query = Todos.query()
      .where({ userId })
      .select('id','name','status')
      .orderBy('id')
      .page(parseInt(page), parseInt(limit));

  if (filter !== TODOS_STATUS.ALL) {
    query.where({ status: filter })
  }

  return await query;
}