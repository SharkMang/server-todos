const Todos = require('../../../models/Todos');

const post = async (ctx) => {

  const userId = ctx.state.user.date;
  const { nameTodo } = ctx.request.body;

  let { page = 0, limit = 1000 } = ctx.query;
  
  page = parseInt(page);
  limit = parseInt(limit);

  const id = Math.round(Math.random() * 10000);

  await Todos.query().insert({
    userId,
    nameTodo,
    id,
    isChecked: false,
    editing: false
  });

  const todos = await Todos.query().where({userId});
  

  return ctx.body = {
    todos,
    message: 'successfuly added todo'
  }
}


module.exports = post;