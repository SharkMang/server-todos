import jwt from 'jsonwebtoken';
import * as Koa from 'koa'

import { resolve } from '../../utils';
import { isValidRefreshToken, createToken, createRefreshToken } from '../../services/auth';
import { secretKey } from '../../config';

export default async (ctx: Koa.Context) => {
  const { token, refreshToken } = ctx.request.body;

  try {
    const user = jwt.verify(token, secretKey, { ignoreExpiration: true })

    if (typeof user !== 'string') {
      const userId = user.userId

      const isValidRefresh = await isValidRefreshToken({ userId, refreshToken })

      if (isValidRefresh) {
        const body = {
          refreshToken: await createRefreshToken(userId),
          token: createToken(userId),
          message: "Successfully logged in!"
        }
  
        return resolve(ctx, body);
      }
      throw {}
    }
    throw {}
  } catch (error) {
    return ctx.throw(400, 'Not authorizated')
  }
}