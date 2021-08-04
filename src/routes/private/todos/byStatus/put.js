const Todos = require("../../../../models/Todos");
const { resolve, isValidStatus } = require('../../../../utils');

const put = async (ctx) => {
  const { userId } = ctx.state.user;
  const status = ctx.query.status;
  
  const query = Todos.query().where({ userId });

  try{
    if (isValidStatus(status)) {
      await query.select('status').patch({ status });
    } else {
      throw{}
    }
  
    const todos = await Todos.query().where({ userId })
    
    const body = {
      message: `Successfully updated status to ${status}`,
      list: todos, 
    };
  
    return resolve(ctx, body);
  } catch(err) {
    const body = `Not correct status: ${status}`;
    return ctx.throw(401, body)
  }
  
}

module.exports = put;