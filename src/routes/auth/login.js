/**
 * 1. Validate email | password
 * 2. Return accessToken
 */
const getUserByUsername = require('../../utils');
const Users = require('../../models/Users');
const bcrypt = require('bcrypt');
const secret = 'A very secret key';

const jwt = require('koa-jwt');


const login = async (ctx) => {
  const { email } = ctx.request.body

  const user = await Users.query().findOne({ email });
  try {
    if (!user) {
      throw {}
    }
  
    const {
      password,
      ...userInfoWithoutPassword
    } = user;
  
    if (await bcrypt.compare(ctx.request.body.password, password)) {
      ctx.status = 200;
      ctx.body = {
        token: jwt.sign({
          data: userInfoWithoutPassword,
          exp: Math.floor(Date.now() / 1000) - (60 * 60) 
        }, secret),
        message: "Successfully logged in!"
      }
      return ctx
    }
  
    throw {}
  } catch (error) {
    console.log('error', error)
    ctx.status = 401;
    ctx.body = {
      error: "Authentication failed"
    }

    return ctx;
  }
 
}
// bcrypt
module.exports = login;