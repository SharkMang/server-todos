const { Todos } = require('../../models')
const { TODOS_STATUS } = require('../../constants')

module.exports = async (userId) => {
  const allTodos = await Todos.query().where({ userId })
    
  const count = allTodos.reduce((acc, i) => { 
    const { active, completed } = acc

    if (i.status === TODOS_STATUS.COMPLETED) {
      return { ...acc, completed: completed + 1 }
    }
   
    return { ...acc, active: active + 1, completed }
  }, {
    active: 0,
    completed: 0,
    total: allTodos.length
  })
  
  return count;
}