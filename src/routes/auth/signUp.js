/**
 * 1. Validate data
 * 2. Insert user
 * 3. Return accessToken
 */

const Users = require('../../models/Users');
const { knex } = require('../../models/Users');
const getUserByUsername = require('../../utils');

const singUp = async (ctx) => {
  const { password, email, name, lastName } = ctx.request.body

  if (!password || !email) {
    ctx.status = 400;
    ctx.body = {
      error: 'expected an object with username, password, email, name but got: ' + ctx.request.body
    }
    return;
  }

  const user = await Users.findOne({email})

  if (!user) {

    
    password = await bcrypt.hash(password, 5);
    knex('users').insert({name, lastName, email, password})
    //users.push(ctx.request.body);


    ctx.status = 200;
    ctx.body = {
      message: "Successfully sing up!"
    };
    
    return ctx;
  } 

  ctx.status = 406;
  ctx.body = {
    error: "User exists"
  }

  
}

module.exports = singUp;