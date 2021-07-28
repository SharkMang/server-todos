const Router = require('koa-router');
const router = new Router();
const todos = require('./todos');

const { secretKey } = require('../../config');
const jwt = require('koa-jwt')

router.use(jwt({ secret:  secretKey}));

router.use('/todos', todos.routes());

module.exports = router;