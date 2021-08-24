import Router from 'koa-router';

import login from './login';
import singup from './signup';
import refresh from './refresh';

const router = new Router();

import delUser from './delUser';
router.post('/deluser', delUser)

router.post('/login', login);
router.post('/singup', singup);
router.post('/refresh-token', refresh)

export default router;