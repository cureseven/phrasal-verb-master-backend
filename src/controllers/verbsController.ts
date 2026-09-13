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

export const getVerbById = async (req: Request, res: Response) => {
  const id = req.params.id;
  if (typeof id !== 'string') {
    return res.status(400).json({ error: '不正なIDです。' });
  }

  try {
    const verb = await verbsService.getById(id);
    if (!verb) {
      return res.status(404).json({ error: '句動詞が見つかりません。' });
    }
    res.json(verb);
  } catch (error) {
    console.error('getVerbById failed:', error);
    res.status(500).json({ error: '句動詞の取得に失敗しました。' });
  }
};

export const getRelatedVerbs = async (req: Request, res: Response) => {
  const { type, value } = req.query;

  if (
    (typeof type !== 'string' || (type !== 'verb' && type !== 'particle')) ||
    typeof value !== 'string' ||
    !value
  ) {
    return res.status(400).json({ error: 'typeは"verb"か"particle"、valueは必須です。' });
  }

  try {
    const verbs = await verbsService.getRelated(type, value);
    res.json(verbs);
  } catch (error) {
    console.error('getRelatedVerbs failed:', error);
    res.status(500).json({ error: '関連する句動詞の取得に失敗しました。' });
  }
};
