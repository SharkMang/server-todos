const Users = require('../../models/Users');
const { knex } = require('../../models/Users');
const { createToken } = require('../../utils')
const bcrypt = require('bcrypt')

const singUp = async (ctx) => {
  let { password, email, name, lastName } = ctx.request.body;

  if (!password || !email || !name || !lastName) {
    ctx.status = 400;
    ctx.body = {
      error: 'Expected an object with username, password, email, name but got: ' + ctx.request.body
    }
    return;
  }

  const user = await Users.query().findOne({email})

  if (!user) {
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);
    const id = Math.round(Math.random() * 10000);

    await Users.query().insert({id, name, lastName, email, password});

    ctx.status = 200;
  
    ctx.body = {
      message: "Successfully sing up!",
    };
    
    return ctx;
  } 

  ctx.status = 406;
  ctx.body = {
    error: "User exists"
  }
}

module.exports = singUp;