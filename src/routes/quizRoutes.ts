import { Router } from 'express';
import { getNextQuiz } from '../controllers/quizController.js';

const router = Router();

router.get('/next', getNextQuiz);

export default router;