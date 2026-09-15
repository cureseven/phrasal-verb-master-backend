import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from '../lib/prisma.js';

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = '7d';
const SALT_ROUNDS = 10;

export class AuthError extends Error {
  constructor(
    message: string,
    public status: number
  ) {
    super(message);
  }
}

function getJwtSecret(): string {
  if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is not set');
  }
  return JWT_SECRET;
}

export class AuthService {
  async signup(email: string, password: string) {
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      throw new AuthError('このメールアドレスは既に登録されています。', 409);
    }

    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
    const user = await prisma.user.create({
      data: { email, passwordHash },
    });

    return { id: user.id, email: user.email, username: user.username };
  }

  async login(email: string, password: string) {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new AuthError('メールアドレスまたはパスワードが正しくありません。', 401);
    }

    const isValid = await bcrypt.compare(password, user.passwordHash);
    if (!isValid) {
      throw new AuthError('メールアドレスまたはパスワードが正しくありません。', 401);
    }

    const token = jwt.sign({ userId: user.id }, getJwtSecret(), {
      expiresIn: JWT_EXPIRES_IN,
    });

    return { token, user: { id: user.id, email: user.email, username: user.username } };
  }

  async updateUsername(userId: string, username: string) {
    const user = await prisma.user.update({
      where: { id: userId },
      data: { username },
    });

    return { id: user.id, email: user.email, username: user.username };
  }

  async deleteAccount(userId: string, password: string) {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new AuthError('ユーザーが見つかりません。', 404);
    }

    const isValid = await bcrypt.compare(password, user.passwordHash);
    if (!isValid) {
      throw new AuthError('パスワードが正しくありません。', 401);
    }

    await prisma.user.delete({ where: { id: userId } });
  }
}
