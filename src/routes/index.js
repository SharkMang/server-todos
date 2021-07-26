const Router = require('koa-router');
const router = new Router();
const auth = require('./auth');
const private = require('./private');

const jwt = require('../utils');

router.get('/', (ctx) => {
  ctx.body = 'LogIn';
});

router.use('/auth', auth.routes());
router.use('/private', private.routes())

module.exports = router;