const count = require('./count')
const getFilteredListTodos = require('./todos')
const { TODOS_STATUS } = require('../../constants')

module.exports = async ({ userId, page, limit, filter = TODOS_STATUS.ALL }) => {
  const list = await getFilteredListTodos({ userId, page, limit, filter })

  return {
    list, 
    filter,
    count: await count(userId),
    page: parseInt(page),
    limit: parseInt(limit),
  }
}