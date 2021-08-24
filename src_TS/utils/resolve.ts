import * as Koa from 'koa'

export const resolve = (ctx: Koa.Context, body: object = {message: 'Success'}) => {
  ctx.status = 200;
  ctx.body = body;
  return ctx;
}
