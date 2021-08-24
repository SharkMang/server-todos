import { Todos } from '../../../models';
import { getResolveBodyTodos } from '../../../services/todos';
import { resolve, isValidName } from '../../../utils';
import { DEFAULT_PAGE, TODOS_STATUS, ITEMS_PER_PAGE } from '../../../constants';

export default async (ctx: any) => {
  const { userId } = ctx.state.user;
  const { 
    page = `${DEFAULT_PAGE}`,
    limit = `${ITEMS_PER_PAGE}`,
  } = ctx.query;
  const { name } = ctx.request.body;

  try{
    if (!isValidName(name)) throw{}

    await Todos.query().insert({
      userId,
      name,
      status: TODOS_STATUS.INCOMPLETED
    });

    const body = await getResolveBodyTodos({ userId, page, limit })
    
    return resolve(ctx, body);
  } catch(err) {
    return ctx.throw(401, 'Not valid name')
  } 
}