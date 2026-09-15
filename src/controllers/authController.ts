import { Request, Response } from 'express';
import { AuthError, AuthService } from '../services/authService.js';
import { prisma } from '../lib/prisma.js';

const authService = new AuthService();

export const AUTH_COOKIE_NAME = 'pvm_token';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;
const MAX_USERNAME_LENGTH = 30;

function validateCredentials(email: unknown, password: unknown): string | null {
  if (typeof email !== 'string' || !EMAIL_REGEX.test(email)) {
    return 'メールアドレスの形式が正しくありません。';
  }
  if (typeof password !== 'string' || password.length < MIN_PASSWORD_LENGTH) {
    return `パスワードは${MIN_PASSWORD_LENGTH}文字以上で入力してください。`;
  }
  return null;
}

function authCookieOptions() {
  const isProduction = process.env.NODE_ENV === 'production';
  return {
    httpOnly: true,
    secure: isProduction,
    sameSite: (isProduction ? 'none' : 'lax') as 'none' | 'lax',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  };
}

export const signup = async (req: Request, res: Response) => {
  const { email, password } = req.body ?? {};
  const validationError = validateCredentials(email, password);
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  try {
    const user = await authService.signup(email, password);
    res.status(201).json({ user });
  } catch (error) {
    if (error instanceof AuthError) {
      return res.status(error.status).json({ error: error.message });
    }
    console.error('signup failed:', error);
    res.status(500).json({ error: 'サインアップに失敗しました。' });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body ?? {};
  const validationError = validateCredentials(email, password);
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  try {
    const { token, user } = await authService.login(email, password);
    res.cookie(AUTH_COOKIE_NAME, token, authCookieOptions());
    res.json({ user });
  } catch (error) {
    if (error instanceof AuthError) {
      return res.status(error.status).json({ error: error.message });
    }
    console.error('login failed:', error);
    res.status(500).json({ error: 'ログインに失敗しました。' });
  }
};

export const logout = async (_req: Request, res: Response) => {
  res.clearCookie(AUTH_COOKIE_NAME, authCookieOptions());
  res.status(204).send();
};

export const me = async (req: Request, res: Response) => {
  if (!req.userId) {
    return res.status(401).json({ error: '認証が必要です。' });
  }

  const user = await prisma.user.findUnique({
    where: { id: req.userId },
    select: { id: true, email: true, username: true },
  });
  if (!user) {
    // トークンは有効だがユーザーが削除済みなどのケース。クライアントには未認証として扱わせる。
    res.clearCookie(AUTH_COOKIE_NAME, authCookieOptions());
    return res.status(401).json({ error: '認証が必要です。' });
  }
  res.json({ user });
};

export const updateUsername = async (req: Request, res: Response) => {
  if (!req.userId) {
    return res.status(401).json({ error: '認証が必要です。' });
  }

  const { username } = req.body ?? {};
  if (typeof username !== 'string' || !username.trim()) {
    return res.status(400).json({ error: 'ユーザー名を入力してください。' });
  }
  const trimmed = username.trim();
  if (trimmed.length > MAX_USERNAME_LENGTH) {
    return res.status(400).json({ error: `ユーザー名は${MAX_USERNAME_LENGTH}文字以内で入力してください。` });
  }

  try {
    const user = await authService.updateUsername(req.userId, trimmed);
    res.json({ user });
  } catch (error) {
    console.error('updateUsername failed:', error);
    res.status(500).json({ error: 'ユーザー名の更新に失敗しました。' });
  }
};

export const deleteAccount = async (req: Request, res: Response) => {
  if (!req.userId) {
    return res.status(401).json({ error: '認証が必要です。' });
  }

  const { password } = req.body ?? {};
  if (typeof password !== 'string' || !password) {
    return res.status(400).json({ error: 'パスワードを入力してください。' });
  }

  try {
    await authService.deleteAccount(req.userId, password);
    res.clearCookie(AUTH_COOKIE_NAME, authCookieOptions());
    res.status(204).send();
  } catch (error) {
    if (error instanceof AuthError) {
      return res.status(error.status).json({ error: error.message });
    }
    console.error('deleteAccount failed:', error);
    res.status(500).json({ error: 'アカウントの削除に失敗しました。' });
  }
};
