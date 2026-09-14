import { Router } from 'express';
import { getStats, listUsers, restrictUser, unrestrictUser } from '../controllers/adminController.js';
import { requireAdminAuth } from '../middleware/requireAdminAuth.js';

const router = Router();

router.use(requireAdminAuth);

router.get('/stats', getStats);
router.get('/users', listUsers);
router.post('/users/:id/restrict', restrictUser);
router.post('/users/:id/unrestrict', unrestrictUser);

export default router;
