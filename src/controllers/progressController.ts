import { Request, Response } from 'express';
import { ProgressError, ProgressService } from '../services/progressService.js';

const progressService = new ProgressService();

export const markProgress = async (req: Request, res: Response) => {
  if (!req.userId) {
    return res.status(401).json({ error: '認証が必要です。' });
  }

  const { phrasalVerbId, status } = req.body ?? {};
  if (typeof phrasalVerbId !== 'string' || typeof status !== 'string') {
    return res.status(400).json({ error: 'phrasalVerbIdとstatusは必須です。' });
  }

  try {
    const result = await progressService.mark(req.userId, phrasalVerbId, status);
    res.json(result);
  } catch (error) {
    if (error instanceof ProgressError) {
      return res.status(error.status).json({ error: error.message });
    }
    console.error('markProgress failed:', error);
    res.status(500).json({ error: '進捗の更新に失敗しました。' });
  }
};

export const getProgressSummary = async (req: Request, res: Response) => {
  if (!req.userId) {
    return res.status(401).json({ error: '認証が必要です。' });
  }

  try {
    const summary = await progressService.summary(req.userId);
    res.json(summary);
  } catch (error) {
    console.error('getProgressSummary failed:', error);
    res.status(500).json({ error: '進捗サマリーの取得に失敗しました。' });
  }
};
