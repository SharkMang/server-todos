import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import auth from './auth'
import privat from './private';

import { isAuthenticated, errorsHandler } from '../utils';

const router = new Router();

router.use(bodyParser())
router.use(errorsHandler)

router.use('/auth', auth.routes())
router.use('/private', isAuthenticated(), privat.routes())

export default router;