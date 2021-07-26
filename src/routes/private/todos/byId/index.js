const Router = require('koa-router');
const router = new Router();

router.post('/:id', (ctx) => {
  ctx.body = `Todo ${ctx.id}`
});

router.get('/:id', (ctx) => {
  ctx.body = `Todo ${ctx.params.id}`
});

router.put('/:id', (ctx) => {
  ctx.body = `Todo ${ctx.id}`
});

router.delete('/:id', (ctx) => {
  ctx.body = `Todo ${ctx.id}`
});

module.exports = router;