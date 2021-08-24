import { Users } from '../../models';
import bcrypt from 'bcrypt';
import assert from 'assert';
import * as Koa from 'koa'

import { resolve, checkValidLoginUser } from '../../utils';
import { createToken, createRefreshToken } from '../../services/auth';
import { User } from '../../types';

type LoginBody = {
  token: string
  refreshToken: string
  user: User
  message: string
}

export default async (ctx: Koa.Context) => {
  const { email, password: reqPassword } = ctx.request.body;

  const notValidUser = checkValidLoginUser({ password: reqPassword, email });
  
  try {
    if (notValidUser) throw{}
  
    const user = await Users.query().findOne({ email });
    
    assert(user)
    
    const { password, id } = user;
    const isPasswordCorrect = await bcrypt.compare(reqPassword, password)

    if (isPasswordCorrect) {
      
      const body: LoginBody = {
        token: createToken(id!),
        refreshToken: await createRefreshToken(id!),
        user: Users.format(user),
        message: "Successfully logged in!"
      }

      return resolve(ctx, body);
    }
  
    throw {}
  } catch (error) {
    return ctx.throw(401, notValidUser || 'Not authorizated')
  }
}