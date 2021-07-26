const Router = require('koa-router');
const router = new Router();
const get = require('./get');
const post = require('./post');
const byId = require('./byId');

router.get('/', get);

router.post('/', post);

router.use('/byId', byId.routes());

module.exports = router;