const Router = require('koa-router');
const router = new Router();
const auth = require('./auth');
const private = require('./private');

const bodyParser = require('koa-bodyparser');
router.use(bodyParser());


router.get('/', (ctx) => {
  ctx.body = 'LogIn';
});

router.use('/auth', auth.routes());
router.use('/private', private.routes())

module.exports = router;