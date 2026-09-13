import { Request, Response } from 'express';
import { VerbsService } from '../services/verbsService.js';

const verbsService = new VerbsService();

export const listVerbs = async (req: Request, res: Response) => {
  const { verb, particle, status } = req.query;

  try {
    const verbs = await verbsService.list({
      verb: typeof verb === 'string' ? verb : undefined,
      particle: typeof particle === 'string' ? particle : undefined,
      status: typeof status === 'string' ? status : undefined,
      userId: req.userId,
    });
    res.json(verbs);
  } catch (error) {
    console.error('listVerbs failed:', error);
    res.status(500).json({ error: '句動詞一覧の取得に失敗しました。' });
  }
};
