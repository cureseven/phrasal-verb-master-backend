import { Request, Response } from 'express';
import { AuthError, AuthService } from '../services/authService.js';

const authService = new AuthService();

export const AUTH_COOKIE_NAME = 'pvm_token';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

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
