const Users = require('../../models/Users');
const bcrypt = require('bcrypt');

const { createToken } = require('../../utils')


const login = async (ctx) => {
  const { email, password: reqPassword } = ctx.request.body;
  
  try {
    const user = await Users.query().findOne({ email });

    if (!user) {
      throw {}
    }

    const {
      password, id
    } = user;
  
    if (await bcrypt.compare(reqPassword, password)) {
      ctx.status = 200;
      const token = await createToken(id);
      ctx.body = {
        token ,
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