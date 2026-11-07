import 'dotenv/config';
import { defineConfig } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
    seed: 'tsx prisma/seed.ts',
  },
  datasource: {
    // env() は未設定だと例外になり、DB URLの無い環境（CIやRenderのビルド）での prisma generate が失敗するため process.env を使う。
    // マイグレーションなどDBに接続するコマンドでは、実行時に DATABASE_URL を渡す。
    url: process.env.DATABASE_URL ?? '',
  },
});
