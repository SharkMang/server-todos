import { Todos } from '../../models'
import { TODOS_STATUS } from '../../constants'
import { Todo } from '../../types'

export default async (userId: number) => {
  const allTodos: Todo[] = await Todos.query().where({ userId })
    
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