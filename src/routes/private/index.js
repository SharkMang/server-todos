const Router = require('koa-router');

const todos = require('./todos');

const router = new Router();

router.use('/todos', todos.routes());

module.exports = router;