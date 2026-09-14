import { Router } from 'express';
import { getProgressSummary, markProgress } from '../controllers/progressController.js';
import { requireAuth } from '../middleware/requireAuth.js';
import { requireWritable } from '../middleware/requireWritable.js';

const router = Router();

router.post('/mark', requireAuth, requireWritable, markProgress);
router.get('/summary', requireAuth, getProgressSummary);

export default router;
