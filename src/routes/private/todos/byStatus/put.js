const Todos = require("../../../../models/Todos");
const { resolve, isValidStatus, TODOS_STATUS, ITEMS_PER_PAGE } = require('../../../../utils');

const put = async (ctx) => {
  const { userId } = ctx.state.user;
  const {
    page = 1,
    limit = ITEMS_PER_PAGE,
    status = TODOS_STATUS.ALL 
  } = ctx.query;

  const { updateStatus } = ctx.request.body;

  try{
    if (isValidStatus(updateStatus)) {
      await Todos.query().where({ userId }).select('status').patch({status: updateStatus})

    } else {
      throw{}
    }
  
    const query = Todos.query()
    .where({ userId })
    .select('id','name','status')
    .orderBy('id')
    .page(parseInt(page) - 1, parseInt(limit));
    
    if (status !== TODOS_STATUS.ALL) {
      query.where({ status })
    }
    const todos = await query;

    const count = await Todos.query().where({ userId }).then((i) => { 
      let active = 0;
      let completed = 0;
      let total = i.length;
      i.forEach(t => {
        t.status === TODOS_STATUS.COMPLETED? completed++ : active++
      })
      return { active, completed, total }
    });
    
    const body = {
      message: `Successfully updated status to ${status}`,
      list: todos, 
      status,
      count,
      page: parseInt(page),
      limit: parseInt(limit),
    };
  
    return resolve(ctx, body);
  } catch(err) {
    const body = `Not correct status: ${status}`;
    return ctx.throw(401, body)
  }
  
}

module.exports = put;