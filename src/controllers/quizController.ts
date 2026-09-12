import { Request, Response } from 'express';
import { QuizService } from '../services/quizService.js';

const quizService = new QuizService();

export const getNextQuiz = async (req: Request, res: Response) => {
  try {
    const lastMode = req.query.lastMode as 'verb_fixed' | 'particle_fixed' | undefined;
    const lastWord = req.query.lastWord as string | undefined;

    const quiz = await quizService.generateNextQuiz(lastMode, lastWord);
    res.json(quiz);
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate quiz' });
  }
};