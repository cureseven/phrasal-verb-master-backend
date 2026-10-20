import { Request, Response } from 'express';
import { QuizService } from '../services/quizService.js';
import { parseLocale } from '../lib/locale.js';

const quizService = new QuizService();

export const getNextQuiz = async (req: Request, res: Response) => {
  const { mode, word, lang } = req.query;

  try {
    const result = await quizService.getNextCard(
      parseLocale(lang),
      typeof mode === 'string' ? mode : undefined,
      typeof word === 'string' ? word : undefined
    );
    res.json(result);
  } catch (error) {
    console.error('getNextQuiz failed:', error);
    res.status(500).json({ error: '問題の取得に失敗しました。', code: 'SERVER_ERROR' });
  }
};
