import { Request, Response } from 'express';
import { AdminAuthService } from '../services/adminAuthService.js';
import { AuthError } from '../services/authService.js';
import { prisma } from '../lib/prisma.js';

const adminAuthService = new AdminAuthService();

export const ADMIN_AUTH_COOKIE_NAME = 'pvm_admin_token';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateCredentials(email: unknown, password: unknown): string | null {
  if (typeof email !== 'string' || !EMAIL_REGEX.test(email)) {
    return 'メールアドレスの形式が正しくありません。';
  }
  if (typeof password !== 'string' || password.length === 0) {
    return 'パスワードを入力してください。';
  }
  return null;
}

function adminAuthCookieOptions() {
  const isProduction = process.env.NODE_ENV === 'production';
  return {
    httpOnly: true,
    secure: isProduction,
    sameSite: (isProduction ? 'none' : 'lax') as 'none' | 'lax',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  };
}

export const adminLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body ?? {};
  const validationError = validateCredentials(email, password);
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  try {
    const { token, admin } = await adminAuthService.login(email, password);
    res.cookie(ADMIN_AUTH_COOKIE_NAME, token, adminAuthCookieOptions());
    res.json({ admin });
  } catch (error) {
    if (error instanceof AuthError) {
      return res.status(error.status).json({ error: error.message });
    }
    console.error('admin login failed:', error);
    res.status(500).json({ error: 'ログインに失敗しました。' });
  }
};

export const adminLogout = async (_req: Request, res: Response) => {
  res.clearCookie(ADMIN_AUTH_COOKIE_NAME, adminAuthCookieOptions());
  res.status(204).send();
};

export const adminMe = async (req: Request, res: Response) => {
  if (!req.adminId) {
    return res.status(401).json({ error: '認証が必要です。' });
  }

  const admin = await prisma.admin.findUnique({
    where: { id: req.adminId },
    select: { id: true, email: true },
  });
  if (!admin) {
    res.clearCookie(ADMIN_AUTH_COOKIE_NAME, adminAuthCookieOptions());
    return res.status(401).json({ error: '認証が必要です。' });
  }
  res.json({ admin });
};
