const Router = require('koa-router');
const router = new Router();
const login = require('./login');
const singUp = require('./signUp');

router.get('/', (ctx) => {
  ctx.body = 'Auth'
});

router.post('/login', login);

router.post('/singUp', singUp);

module.exports = router;