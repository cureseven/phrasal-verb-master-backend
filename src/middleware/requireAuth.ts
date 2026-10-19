import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { AUTH_COOKIE_NAME } from '../controllers/authController.js';
import { USER_TOKEN_AUDIENCE } from '../services/authService.js';

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies?.[AUTH_COOKIE_NAME];
  if (!token) {
    return res.status(401).json({ error: '認証が必要です。' });
  }

  const secret = process.env.JWT_SECRET;
  if (!secret) {
    console.error('JWT_SECRET is not set');
    return res.status(500).json({ error: 'サーバー設定エラーです。' });
  }

  let userId: unknown;
  try {
    const payload = jwt.verify(token, secret, { audience: USER_TOKEN_AUDIENCE });
    userId = typeof payload === 'object' ? payload.userId : undefined;
  } catch {
    return res.status(401).json({ error: '認証の有効期限が切れています。再度ログインしてください。' });
  }
  if (typeof userId !== 'string') {
    return res.status(401).json({ error: '認証が必要です。' });
  }

  req.userId = userId;
  next();
}
