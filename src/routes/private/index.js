const Router = require('koa-router');
const router = new Router();
const todos = require('./todos');
const isAuthenticated = require('../../utils')

router.use('/todos', /* isAuthenticated(), */ todos.routes());

module.exports = router;