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

const EXAMPLE_COUNT = 3;

function parseExamples(examples: unknown): { sentenceEn: string; sentenceJa: string }[] | null {
  if (!Array.isArray(examples) || examples.length !== EXAMPLE_COUNT) {
    return null;
  }
  const parsed: { sentenceEn: string; sentenceJa: string }[] = [];
  for (const ex of examples) {
    if (
      typeof ex !== 'object' ||
      ex === null ||
      typeof (ex as Record<string, unknown>).sentenceEn !== 'string' ||
      !(ex as Record<string, unknown>).sentenceEn ||
      typeof (ex as Record<string, unknown>).sentenceJa !== 'string' ||
      !(ex as Record<string, unknown>).sentenceJa
    ) {
      return null;
    }
    parsed.push({
      sentenceEn: (ex as { sentenceEn: string }).sentenceEn,
      sentenceJa: (ex as { sentenceJa: string }).sentenceJa,
    });
  }
  return parsed;
}

export const createVerb = async (req: Request, res: Response) => {
  const { verb, particle, meaningJa, examples } = req.body ?? {};
  const fields = { verb, particle, meaningJa };

  for (const [key, value] of Object.entries(fields)) {
    if (typeof value !== 'string' || !value.trim()) {
      return res.status(400).json({ error: `${key}は必須です。` });
    }
  }

  const parsedExamples = parseExamples(examples);
  if (!parsedExamples) {
    return res.status(400).json({ error: `例文（英文・日本語訳）は${EXAMPLE_COUNT}つ必須です。` });
  }

  try {
    const created = await verbsService.create({ verb, particle, meaningJa, examples: parsedExamples });
    res.status(201).json(created);
  } catch (error) {
    console.error('createVerb failed:', error);
    res.status(500).json({ error: '句動詞の登録に失敗しました。' });
  }
};

export const updateVerb = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { meaningJa, examples } = req.body ?? {};

  if (typeof id !== 'string') {
    return res.status(400).json({ error: '不正なIDです。' });
  }
  if (typeof meaningJa !== 'string' || !meaningJa.trim()) {
    return res.status(400).json({ error: '意味は必須です。' });
  }
  const parsedExamples = parseExamples(examples);
  if (!parsedExamples) {
    return res.status(400).json({ error: `例文（英文・日本語訳）は${EXAMPLE_COUNT}つ必須です。` });
  }

  try {
    const existing = await verbsService.getById(id);
    if (!existing) {
      return res.status(404).json({ error: '句動詞が見つかりません。' });
    }
    const updated = await verbsService.update(id, { meaningJa, examples: parsedExamples });
    res.json(updated);
  } catch (error) {
    console.error('updateVerb failed:', error);
    res.status(500).json({ error: '更新に失敗しました。' });
  }
};

export const deleteVerb = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (typeof id !== 'string') {
    return res.status(400).json({ error: '不正なIDです。' });
  }

  try {
    const existing = await verbsService.getById(id);
    if (!existing) {
      return res.status(404).json({ error: '句動詞が見つかりません。' });
    }
    await verbsService.delete(id);
    res.status(204).send();
  } catch (error) {
    console.error('deleteVerb failed:', error);
    res.status(500).json({ error: '削除に失敗しました。' });
  }
};
