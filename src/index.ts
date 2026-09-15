import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import progressRoutes from './routes/progressRoutes.js';
import quizRoutes from './routes/quizRoutes.js';
import verbsRoutes from './routes/verbsRoutes.js';
import adminAuthRoutes from './routes/adminAuthRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import { prisma } from './lib/prisma.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// FRONTEND_URLはカンマ区切りで複数オリジンを指定できる（メインドメインと管理画面用サブドメインなど）
const allowedOrigins = (process.env.FRONTEND_URL || 'http://localhost:3000')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('CORSで許可されていないオリジンです。'));
      }
    },
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// ヘルスチェック用ルート
app.get('/health', (req, res) => {
  res.json({ message: 'Phrasal Verb Master API is running!' });
});

// DB接続確認テスト用ルート
app.get('/dbhealth', async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({ status: 'ok', database: 'connected' });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Database connection failed' });
  }
});

// ルーティング設定
app.use('/api/auth', authRoutes);
app.use('/api/quiz', quizRoutes);
app.use('/api/verbs', verbsRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/admin/auth', adminAuthRoutes);
app.use('/api/admin', adminRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});