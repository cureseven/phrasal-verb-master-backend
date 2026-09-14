import { Router } from 'express';
import { adminLogin, adminLogout, adminMe } from '../controllers/adminAuthController.js';
import { requireAdminAuth } from '../middleware/requireAdminAuth.js';

const router = Router();

router.post('/login', adminLogin);
router.post('/logout', adminLogout);
router.get('/me', requireAdminAuth, adminMe);

export default router;
