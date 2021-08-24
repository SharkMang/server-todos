import { Users } from '../../models';
import * as Koa from 'koa'

export default async (ctx: Koa.Context) => {
  const { id } = ctx.request.body;

  await Users.query()
    .where({ id })
    .del()
  return ctx.body = {
    message : 'Success'
  };
}



// import delUser from './delUser';
// router.post('/deluser', delUser)