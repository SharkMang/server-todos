const Router = require('koa-router');
const get = require('./get');
const post = require('./post');
const byStatus = require('./byStatus');
const byId = require('./byId');

const router = new Router();

router.get('/', get);
router.post('/', post);

router.use('/byid', byId.routes());
router.use('/bystatus', byStatus.routes());

module.exports = router;