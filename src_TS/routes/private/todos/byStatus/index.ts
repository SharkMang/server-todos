import Router from 'koa-router';

import deleteByStatus from './delete';

const router = new Router();

router.delete('/', deleteByStatus);

export default router;