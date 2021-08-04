const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const auth = require('./auth');
const private = require('./private');

const { isAuthenticated, errorsHandler } = require('../utils');

const router = new Router();

router.use(bodyParser());
router.use(errorsHandler);



router.get('/', 
  () => ctx.body = {
    massege: 'Test'
  }
)


router.use('/auth', auth.routes());
router.use('/private', isAuthenticated(), private.routes())

module.exports = router;