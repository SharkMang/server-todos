const Router = require('koa-router');
const { relatedQuery } = require('../../models/Users');

const todos = require('./todos');
const loadUser = require('./loadUser');

const router = new Router();

router.use('/todos', todos.routes());

router.get('/loaduser', loadUser)

module.exports = router;