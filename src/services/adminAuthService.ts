import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from '../lib/prisma.js';
import { AuthError } from './authService.js';

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = '7d';

function getJwtSecret(): string {
  if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is not set');
  }
  return JWT_SECRET;
}

export class AdminAuthService {
  async login(email: string, password: string) {
    const admin = await prisma.admin.findUnique({ where: { email } });
    if (!admin) {
      throw new AuthError('メールアドレスまたはパスワードが正しくありません。', 401);
    }

    const isValid = await bcrypt.compare(password, admin.passwordHash);
    if (!isValid) {
      throw new AuthError('メールアドレスまたはパスワードが正しくありません。', 401);
    }

    const token = jwt.sign({ adminId: admin.id }, getJwtSecret(), {
      expiresIn: JWT_EXPIRES_IN,
    });

    return { token, admin: { id: admin.id, email: admin.email } };
  }
}
