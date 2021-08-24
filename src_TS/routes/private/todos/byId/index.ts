import Router from 'koa-router'

import put from './put'
import deleteById from './delete'

const router = new Router();

router.put('/:id', put);
router.delete('/:id', deleteById);

export default router;