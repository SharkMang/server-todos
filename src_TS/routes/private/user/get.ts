import { ParameterizedContext } from 'koa';
import { Users } from '../../../models';
import { StateT } from '../../../types';
import { resolve } from '../../../utils';

export default async(ctx: ParameterizedContext<StateT> ) => {
  const { userId } = ctx.state.user;
  try {
    const user = await Users.query().findOne({ id: userId });
    const body = {
      user: Users.format(user),
      message: "Successfully load user!"
    }
    return resolve(ctx, body);
  } catch (err) {
    return ctx.throw(401, 'Not authorizated')
  }
}