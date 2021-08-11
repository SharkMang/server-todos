const Users = require('../../models/Users');
const assert = require('assert');
const { resolve } = require('../../utils');


const loadUser = async (ctx) => {
  const { userId } = ctx.state.user;
  try {
    const user = await Users.query().findOne({ id: userId });
    assert(user);
    const body = {
      user: Users.format(user),
      message: "Successfully load user!"
    }
    return resolve(ctx, body);
  } catch (err) {
    return ctx.throw(400, 'Not authorizated')
  }
} 

module.exports = loadUser;