import Router from 'koa-router';
import get from './get';
import post from './post';
import put from './put';
import byStatus from './byStatus';
import byId from './byId';

const router = new Router();

router.get('/', get);
router.post('/', post);
router.put('/', put);

router.use('/byid', byId.routes());
router.use('/bystatus', byStatus.routes());

export default router;