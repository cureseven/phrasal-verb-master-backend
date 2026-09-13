import { Router } from 'express';
import { getRelatedVerbs, getVerbById, listVerbs } from '../controllers/verbsController.js';
import { optionalAuth } from '../middleware/optionalAuth.js';

const router = Router();

router.get('/', optionalAuth, listVerbs);
// '/:id' より先に定義しないと "related" がidとしてマッチしてしまう
router.get('/related', getRelatedVerbs);
router.get('/:id', getVerbById);

export default router;
