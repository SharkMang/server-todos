import count from './count'
import getFilteredListTodos from './todos'
import { TODOS_STATUS } from '../../constants'

type Props = {
  userId: number
  page: string
  limit: string
  filter?: TODOS_STATUS
}

export default async ({ userId, page, limit, filter = TODOS_STATUS.ALL }: Props) => {

  const list = await getFilteredListTodos({ userId, page, limit, filter })

  return {
    list, 
    filter,
    count: await count(userId),
    page: parseInt(page),
    limit: parseInt(limit),
  }
}