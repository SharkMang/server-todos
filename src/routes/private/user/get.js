const { Users } = require('../../../models');
const { resolve } = require('../../../utils');

const get = async (ctx) => {
  const { userId } = ctx.state.user;
  try {
    const user = await Users.query().findOne({ id: userId });
    const body = {
      user: Users.format(user),
      message: "Successfully load user!"
    }
    return resolve(ctx, body);
  } catch (err) {
    return ctx.throw(401, 'Not authorizated')
  }
} 

module.exports = get;