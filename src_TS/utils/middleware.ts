import jwt from 'koa-jwt'
import * as Koa from 'koa'
import { secretKey } from '../config'

export const isAuthenticated = (secret: string = secretKey) => jwt({ secret  });

export const errorsHandler = async (ctx: Koa.Context, next: Koa.Next) => {
  try{
    await next()
  } catch(e) {
    ctx.status = e.status || 500;
    ctx.body = { error: e.message || 'Internal server Error.' }
    return ctx
  }
};