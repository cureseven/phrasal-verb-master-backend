import { Router } from 'express';
import { listVerbs } from '../controllers/verbsController.js';
import { optionalAuth } from '../middleware/optionalAuth.js';

const router = Router();

router.get('/', optionalAuth, listVerbs);

export default router;
