import { Todos } from '../../models'
import { TODOS_STATUS } from '../../constants'

type Props = {
  userId: number
  page: string
  limit: string
  filter: TODOS_STATUS
}

export default async ({ userId, page, limit, filter }: Props) => {
  const intPage = parseInt(page)
  const intLimit = parseInt(limit)

  const query = Todos.query()
      .where({ userId })
      .select('id','name','status')
      .orderBy('id')
      .page(intPage, intLimit);

  if (filter !== TODOS_STATUS.ALL) {
    query.where({ status: filter })
  }

  return await query;
}