const Router = require('koa-router');

const put = require('./put');
const deleteById = require('./delete');

const router = new Router();

router.put('/:id', put);
router.delete('/:id', deleteById);

module.exports = router;