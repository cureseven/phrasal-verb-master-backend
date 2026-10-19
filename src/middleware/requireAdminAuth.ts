import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { ADMIN_AUTH_COOKIE_NAME } from '../controllers/adminAuthController.js';
import { prisma } from '../lib/prisma.js';
import { ADMIN_TOKEN_AUDIENCE } from '../services/adminAuthService.js';

export async function requireAdminAuth(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies?.[ADMIN_AUTH_COOKIE_NAME];
  if (!token) {
    return res.status(401).json({ error: '認証が必要です。' });
  }

  const secret = process.env.JWT_SECRET;
  if (!secret) {
    console.error('JWT_SECRET is not set');
    return res.status(500).json({ error: 'サーバー設定エラーです。' });
  }

  let adminId: unknown;
  try {
    const payload = jwt.verify(token, secret, { audience: ADMIN_TOKEN_AUDIENCE });
    adminId = typeof payload === 'object' ? payload.adminId : undefined;
  } catch {
    return res.status(401).json({ error: '認証の有効期限が切れています。再度ログインしてください。' });
  }
  if (typeof adminId !== 'string') {
    return res.status(401).json({ error: '認証が必要です。' });
  }

  // 削除済みの管理者のトークンを有効期限まで使えないよう、毎回実在を確認する
  try {
    const admin = await prisma.admin.findUnique({ where: { id: adminId }, select: { id: true } });
    if (!admin) {
      return res.status(401).json({ error: '認証が必要です。' });
    }
  } catch (error) {
    console.error('requireAdminAuth failed:', error);
    return res.status(500).json({ error: 'サーバーエラーが発生しました。' });
  }

  req.adminId = adminId;
  next();
}
