const Users = require('../../models/Users');
const bcrypt = require('bcrypt')
const { checkValidSingupUser, resolve } = require('../../utils')

const singup = async (ctx) => {
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

      const body = {
        message: "Successfully sing up!",
      };
    
      return resolve(ctx, body);
    } else {
      return ctx.throw(400, "Email not valid")
    }
  }
}

module.exports = singup;