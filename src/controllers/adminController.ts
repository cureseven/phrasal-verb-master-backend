import { Request, Response } from 'express';
import { AdminService } from '../services/adminService.js';
import { ExampleInput, LocalizedText, VerbsService } from '../services/verbsService.js';
import { prisma } from '../lib/prisma.js';
import { SUPPORTED_LOCALES } from '../lib/locale.js';

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

/** { ja: '...', zh: '...' } の形で、対応する全言語が空でない文字列になっているかを確認する */
function parseLocalizedText(value: unknown): LocalizedText | null {
  if (typeof value !== 'object' || value === null) {
    return null;
  }
  const record = value as Record<string, unknown>;
  const result: Partial<LocalizedText> = {};
  for (const locale of SUPPORTED_LOCALES) {
    const text = record[locale];
    if (typeof text !== 'string' || !text.trim()) {
      return null;
    }
    result[locale] = text;
  }
  return result as LocalizedText;
}

function parseExamples(examples: unknown): ExampleInput[] | null {
  if (!Array.isArray(examples) || examples.length !== EXAMPLE_COUNT) {
    return null;
  }
  const parsed: ExampleInput[] = [];
  for (const ex of examples) {
    if (typeof ex !== 'object' || ex === null) {
      return null;
    }
    const { sentenceEn, translations } = ex as Record<string, unknown>;
    const parsedTranslations = parseLocalizedText(translations);
    if (typeof sentenceEn !== 'string' || !sentenceEn.trim() || !parsedTranslations) {
      return null;
    }
    parsed.push({ sentenceEn, translations: parsedTranslations });
  }
  return parsed;
}

const MEANINGS_REQUIRED_MESSAGE = '意味（日本語・中国語）は必須です。';
const EXAMPLES_REQUIRED_MESSAGE = `例文（英文・日本語訳・中国語訳）は${EXAMPLE_COUNT}つ必須です。`;

export const getVerb = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (typeof id !== 'string') {
    return res.status(400).json({ error: '不正なIDです。' });
  }

  try {
    const verb = await verbsService.getByIdForAdmin(id);
    if (!verb) {
      return res.status(404).json({ error: '句動詞が見つかりません。' });
    }
    res.json(verb);
  } catch (error) {
    console.error('getVerb failed:', error);
    res.status(500).json({ error: '句動詞の取得に失敗しました。' });
  }
};

export const createVerb = async (req: Request, res: Response) => {
  const { verb, particle, meanings, examples } = req.body ?? {};

  for (const [key, value] of Object.entries({ verb, particle })) {
    if (typeof value !== 'string' || !value.trim()) {
      return res.status(400).json({ error: `${key}は必須です。` });
    }
  }

  const parsedMeanings = parseLocalizedText(meanings);
  if (!parsedMeanings) {
    return res.status(400).json({ error: MEANINGS_REQUIRED_MESSAGE });
  }
  const parsedExamples = parseExamples(examples);
  if (!parsedExamples) {
    return res.status(400).json({ error: EXAMPLES_REQUIRED_MESSAGE });
  }

  try {
    const created = await verbsService.create({
      verb,
      particle,
      meanings: parsedMeanings,
      examples: parsedExamples,
    });
    res.status(201).json(created);
  } catch (error) {
    console.error('createVerb failed:', error);
    res.status(500).json({ error: '句動詞の登録に失敗しました。' });
  }
};

export const updateVerb = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { meanings, examples } = req.body ?? {};

  if (typeof id !== 'string') {
    return res.status(400).json({ error: '不正なIDです。' });
  }
  const parsedMeanings = parseLocalizedText(meanings);
  if (!parsedMeanings) {
    return res.status(400).json({ error: MEANINGS_REQUIRED_MESSAGE });
  }
  const parsedExamples = parseExamples(examples);
  if (!parsedExamples) {
    return res.status(400).json({ error: EXAMPLES_REQUIRED_MESSAGE });
  }

  try {
    if (!(await verbsService.exists(id))) {
      return res.status(404).json({ error: '句動詞が見つかりません。' });
    }
    const updated = await verbsService.update(id, { meanings: parsedMeanings, examples: parsedExamples });
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
    if (!(await verbsService.exists(id))) {
      return res.status(404).json({ error: '句動詞が見つかりません。' });
    }
    await verbsService.delete(id);
    res.status(204).send();
  } catch (error) {
    console.error('deleteVerb failed:', error);
    res.status(500).json({ error: '削除に失敗しました。' });
  }
};
