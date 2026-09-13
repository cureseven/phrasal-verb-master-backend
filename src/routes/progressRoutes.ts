import { Router } from 'express';
import { getProgressSummary, markProgress } from '../controllers/progressController.js';
import { requireAuth } from '../middleware/requireAuth.js';

const router = Router();

router.post('/mark', requireAuth, markProgress);
router.get('/summary', requireAuth, getProgressSummary);

export default router;
