const Router = require('koa-router');

const put = require('./put');
const deleteByStatus = require('./delete');

const router = new Router();

router.put('/', put);
router.delete('/', deleteByStatus);

module.exports = router;