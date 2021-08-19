const Router = require('koa-router');
const get = require('./get')

const router = new Router();

router.get('/', get);

module.exports = router;
