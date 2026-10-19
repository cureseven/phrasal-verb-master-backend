import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { AUTH_COOKIE_NAME } from '../controllers/authController.js';
import { USER_TOKEN_AUDIENCE } from '../services/authService.js';

/**
 * requireAuthと異なり、未ログイン・トークン無効でも処理を継続する。
 * ログイン中のユーザーだけ挙動を変えたい公開エンドポイント向け。
 */
export function optionalAuth(req: Request, _res: Response, next: NextFunction) {
  const token = req.cookies?.[AUTH_COOKIE_NAME];
  const secret = process.env.JWT_SECRET;

  if (token && secret) {
    try {
      const payload = jwt.verify(token, secret, { audience: USER_TOKEN_AUDIENCE });
      if (typeof payload === 'object' && typeof payload.userId === 'string') {
        req.userId = payload.userId;
      }
    } catch {
      // 無効なトークンは無視して未ログイン扱いにする
    }
  }

  next();
}
