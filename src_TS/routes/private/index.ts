import Router from 'koa-router';

import todos from './todos';
import user from './user';

const router = new Router();

router.use('/todos', todos.routes());
router.use('/user', user.routes());

export default router;