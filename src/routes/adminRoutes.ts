import { Router } from 'express';
import {
  createVerb,
  deleteVerb,
  getStats,
  listUsers,
  restrictUser,
  unrestrictUser,
  updateVerb,
} from '../controllers/adminController.js';
import { requireAdminAuth } from '../middleware/requireAdminAuth.js';

const router = Router();

router.use(requireAdminAuth);

router.get('/stats', getStats);
router.get('/users', listUsers);
router.post('/users/:id/restrict', restrictUser);
router.post('/users/:id/unrestrict', unrestrictUser);
router.post('/verbs', createVerb);
router.patch('/verbs/:id', updateVerb);
router.delete('/verbs/:id', deleteVerb);

export default router;
