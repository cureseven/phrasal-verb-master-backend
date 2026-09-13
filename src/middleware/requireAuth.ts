import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { AUTH_COOKIE_NAME } from '../controllers/authController.js';

interface AuthTokenPayload {
  userId: string;
}

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

  try {
    const payload = jwt.verify(token, secret) as AuthTokenPayload;
    req.userId = payload.userId;
    next();
  } catch {
    return res.status(401).json({ error: '認証の有効期限が切れています。再度ログインしてください。' });
  }
}
