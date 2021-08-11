const Users = require('../../models/Users');
const bcrypt = require('bcrypt');
const assert = require('assert');

const { createToken, resolve, checkValidLoginUser } = require('../../utils');

const login = async (ctx) => {
  const { email, password: reqPassword } = ctx.request.body;
  
  const notValidUser = await checkValidLoginUser({ password: reqPassword, email });
  
  try {
    if (notValidUser) throw{}
  
    const user = await Users.query().findOne({ email });
    
    assert(user)

    const { password, id } = user;
    const isPasswordCorrect = await bcrypt.compare(reqPassword, password)

    if (isPasswordCorrect) {

      const body = {
        token: await createToken(id),
        user: Users.format(user),
        message: "Successfully logged in!"
      }

      return resolve(ctx, body);
    }
  
    throw {}
  } catch (error) {
    return ctx.throw(400, notValidUser || 'Not authorizated')
  }
}

module.exports = login;