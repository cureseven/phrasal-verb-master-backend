import { Request, Response } from 'express';
import { AdminService } from '../services/adminService.js';
import { VerbsService } from '../services/verbsService.js';
import { prisma } from '../lib/prisma.js';

const adminService = new AdminService();
const verbsService = new VerbsService();

export const getStats = async (_req: Request, res: Response) => {
  try {
    const stats = await adminService.getStats();
    res.json(stats);
  } catch (error) {
    console.error('getStats failed:', error);
    res.status(500).json({ error: '統計情報の取得に失敗しました。' });
  }
};

export const listUsers = async (_req: Request, res: Response) => {
  try {
    const users = await adminService.listUsers();
    res.json(users);
  } catch (error) {
    console.error('listUsers failed:', error);
    res.status(500).json({ error: 'ユーザー一覧の取得に失敗しました。' });
  }
};

async function updateReadOnly(req: Request, res: Response, isReadOnly: boolean) {
  const { id } = req.params;
  if (typeof id !== 'string') {
    return res.status(400).json({ error: '不正なIDです。' });
  }

  try {
    const user = await prisma.user.findUnique({ where: { id } });
    if (!user) {
      return res.status(404).json({ error: 'ユーザーが見つかりません。' });
    }

    await adminService.setReadOnly(id, isReadOnly);
    res.status(204).send();
  } catch (error) {
    console.error('updateReadOnly failed:', error);
    res.status(500).json({ error: '更新に失敗しました。' });
  }
}

export const restrictUser = (req: Request, res: Response) => updateReadOnly(req, res, true);
export const unrestrictUser = (req: Request, res: Response) => updateReadOnly(req, res, false);

export const createVerb = async (req: Request, res: Response) => {
  const { verb, particle, meaningJa, exampleSentence } = req.body ?? {};
  const fields = { verb, particle, meaningJa, exampleSentence };

  for (const [key, value] of Object.entries(fields)) {
    if (typeof value !== 'string' || !value.trim()) {
      return res.status(400).json({ error: `${key}は必須です。` });
    }
  }

  try {
    const created = await verbsService.create({ verb, particle, meaningJa, exampleSentence });
    res.status(201).json(created);
  } catch (error) {
    console.error('createVerb failed:', error);
    res.status(500).json({ error: '句動詞の登録に失敗しました。' });
  }
};
