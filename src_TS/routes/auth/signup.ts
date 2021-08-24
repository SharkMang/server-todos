import { Users } from '../../models';
import bcrypt from 'bcrypt';
import * as Koa from 'koa'

import { checkValidSingupUser, resolve } from '../../utils';
import { createRefreshToken } from '../../services/auth';

export default async (ctx: Koa.Context) => {
  const { password, email, name, lastName } = ctx.request.body;
  
  const notValidUser = await checkValidSingupUser({ password, email, name, lastName });

  if (notValidUser) {
    return ctx.throw(400, notValidUser.join(' '))
  } else {

    const user = await Users.query().findOne({ email });

    if (!user) {
      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash(password, salt);

      await Users.query().insert({ 
        name, 
        lastName, 
        email, 
        password: passwordHash
      });      

      const { id: userId } = await Users.query().findOne({ email })      

      await createRefreshToken(userId!)

      const body = {
        message: "Successfully sing up!",
      };
    
      return resolve(ctx, body);
    } else {
      return ctx.throw(401, "Email not valid")
    }
  }
}