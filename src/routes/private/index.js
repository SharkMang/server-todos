const Router = require('koa-router');
// const { relatedQuery } = require('../../models/Users');

const todos = require('./todos');
const user = require('./user');

const router = new Router();

router.use('/todos', todos.routes());
router.use('/user', user.routes());

module.exports = router;