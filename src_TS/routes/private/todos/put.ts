import { Todos } from "../../../models";
import { resolve, isValidStatus } from '../../../utils';
import { getResolveBodyTodos } from "../../../services/todos";
import { TODOS_STATUS, ITEMS_PER_PAGE, DEFAULT_PAGE } from '../../../constants';

export default async (ctx: any) => {
  const { userId } = ctx.state.user;
  const {
    page = `${DEFAULT_PAGE}`,
    limit = `${ITEMS_PER_PAGE}`,
    filter = TODOS_STATUS.ALL 
  } = ctx.query;

  const { updateStatus } = ctx.request.body;

  try {
    if (isValidStatus(updateStatus)) {
      await Todos.query().where({ userId }).select('status').patch({ status: updateStatus })

    } else {
      throw{}
    }

    const body = await getResolveBodyTodos({ userId, page, limit, filter })
    
    return resolve(ctx, body);
  } catch(err) {
    return ctx.throw(401, `Not correct status: ${updateStatus}`)
  }
  
}