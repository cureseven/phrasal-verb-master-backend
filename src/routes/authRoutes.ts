import { Router } from 'express';
import {
  deleteAccount,
  login,
  logout,
  me,
  signup,
  updateUsername,
} from '../controllers/authController.js';
import { requireAuth } from '../middleware/requireAuth.js';

const router = Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);
router.get('/me', requireAuth, me);
router.patch('/me', requireAuth, updateUsername);
router.delete('/me', requireAuth, deleteAccount);

export default router;
