import { NextFunction, Request, Response } from 'express';
import { prisma } from '../lib/prisma.js';

/**
 * requireAuthの後段で使う。管理者が読み取り専用に設定したユーザーの
 * 書き込み系操作（進捗の記録など）を止める。レコードが無ければ通常状態として通過する。
 */
export async function requireWritable(req: Request, res: Response, next: NextFunction) {
  if (!req.userId) {
    return res.status(401).json({ error: '認証が必要です。' });
  }

  try {
    const status = await prisma.userAccountStatus.findUnique({
      where: { userId: req.userId },
      select: { isReadOnly: true },
    });
    if (status?.isReadOnly) {
      return res.status(403).json({ error: 'このアカウントは現在、閲覧のみご利用いただけます。' });
    }
    next();
  } catch (error) {
    console.error('requireWritable failed:', error);
    res.status(500).json({ error: 'サーバーエラーが発生しました。' });
  }
}
