import { Request, Response } from 'express';
import { QuizService } from '../services/quizService.ts'; // 環境によっては .js や拡張子なし

const quizService = new QuizService();

export const getNextQuiz = async (req: Request, res: Response) => {
  try {
    const { mode, word } = req.query;
    const result = await quizService.getNextCard(
      mode as string,
      word as string
    );
    res.json(result);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};