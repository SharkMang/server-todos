const Router = require('koa-router');
const router = new Router();
const post = require('./post');
const put = require('./put');
const deleteById = require('./deleteById');

router.post('/:id', post);

router.get('/:id', (ctx) => {
  ctx.body = `Todo ${ctx.params.id}`
});

router.put('/:id', put);

router.delete('/:id', deleteById);

module.exports = router;