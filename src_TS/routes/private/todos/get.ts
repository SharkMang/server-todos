import { getResolveBodyTodos } from "../../../services/todos";
import { resolve, isValidStatus } from '../../../utils';
import { DEFAULT_PAGE, TODOS_STATUS, ITEMS_PER_PAGE } from "../../../constants";

export default async (ctx: any) => {
  const { userId } = ctx.state.user;
  const { 
    page = `${DEFAULT_PAGE}`,
    limit = `${ITEMS_PER_PAGE}`,
    filter = TODOS_STATUS.ALL 
  } = ctx.query;


  if (isValidStatus(filter)) {
    const body = await getResolveBodyTodos({ userId, page, limit, filter })
    
    return resolve(ctx, body);
  }
  return ctx.throw(401, 'Not valid status');
}