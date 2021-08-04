const Router = require('koa-router');

const login = require('./login');
const singup = require('./signup');

const router = new Router();

router.post('/login', login);
router.post('/singup', singup);

module.exports = router;