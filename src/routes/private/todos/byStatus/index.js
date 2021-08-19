const Router = require('koa-router');

const deleteByStatus = require('./delete');

const router = new Router();

router.delete('/', deleteByStatus);

module.exports = router;