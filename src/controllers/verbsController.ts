import { Request, Response } from 'express';
import { VerbsService } from '../services/verbsService.js';
import { parseLocale } from '../lib/locale.js';

const verbsService = new VerbsService();

export const listVerbs = async (req: Request, res: Response) => {
  const { verb, particle, status, lang } = req.query;

  try {
    const verbs = await verbsService.list({
      verb: typeof verb === 'string' ? verb : undefined,
      particle: typeof particle === 'string' ? particle : undefined,
      status: typeof status === 'string' ? status : undefined,
      userId: req.userId,
      locale: parseLocale(lang),
    });
    res.json(verbs);
  } catch (error) {
    console.error('listVerbs failed:', error);
    res.status(500).json({ error: '句動詞一覧の取得に失敗しました。', code: 'SERVER_ERROR' });
  }
};

export const getVerbById = async (req: Request, res: Response) => {
  const id = req.params.id;
  if (typeof id !== 'string') {
    return res.status(400).json({ error: '不正なIDです。', code: 'BAD_REQUEST' });
  }

  try {
    const verb = await verbsService.getById(id, parseLocale(req.query.lang));
    if (!verb) {
      return res.status(404).json({ error: '句動詞が見つかりません。', code: 'NOT_FOUND' });
    }
    res.json(verb);
  } catch (error) {
    console.error('getVerbById failed:', error);
    res.status(500).json({ error: '句動詞の取得に失敗しました。', code: 'SERVER_ERROR' });
  }
};

export const getRelatedVerbs = async (req: Request, res: Response) => {
  const { type, value, lang } = req.query;

  if (
    (typeof type !== 'string' || (type !== 'verb' && type !== 'particle')) ||
    typeof value !== 'string' ||
    !value
  ) {
    return res
      .status(400)
      .json({ error: 'typeは"verb"か"particle"、valueは必須です。', code: 'BAD_REQUEST' });
  }

  try {
    const verbs = await verbsService.getRelated(type, value, parseLocale(lang));
    res.json(verbs);
  } catch (error) {
    console.error('getRelatedVerbs failed:', error);
    res.status(500).json({ error: '関連する句動詞の取得に失敗しました。', code: 'SERVER_ERROR' });
  }
};
