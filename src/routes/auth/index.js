const Router = require('koa-router');

const login = require('./login');
const singup = require('./signup');
const refresh = require('./refresh');

const router = new Router();

router.post('/login', login);
router.post('/singup', singup);
router.post('/refresh-token', refresh)

module.exports = router;