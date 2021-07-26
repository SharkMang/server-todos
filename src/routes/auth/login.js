const Users = require('../../models/Users');
const bcrypt = require('bcrypt');

const createToken = require('../../utils')


const login = async (ctx) => {
  const { email, password: userPassword } = ctx.request.body

  const user = await Users.query().findOne({ email });
  try {
    if (!user) {
      throw {}
    }

    const {
      password, 
    } = user;
  
    if (await bcrypt.compare(userPassword, password)) {
      ctx.status = 200;
      ctx.body = {
        token: createToken(email),
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

module.exports = login;