import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/prisma/client.js';

// Prisma 6 のURLにだけ意味があったパラメータ。node-postgres は理解しないので接続文字列から取り除く。
const PRISMA_ONLY_PARAMS = ['pgbouncer', 'connection_limit', 'statement_cache_size', 'sslmode', 'schema'];
const LOCAL_HOSTS = new Set(['localhost', '127.0.0.1', '::1', '[::1]']);

export interface NormalizedConnection {
  connectionString: string;
  useSsl: boolean;
  schema?: string;
}

/**
 * 既存のDATABASE_URL（Prisma 6向けのパラメータ付き）をそのまま使えるように、
 * 接続文字列とSSL・スキーマの設定に分解する。環境変数の書き換えを不要にするための処理。
 */
export function normalizeConnectionString(raw: string): NormalizedConnection {
  const url = new URL(raw);
  const sslmode = url.searchParams.get('sslmode');
  const schema = url.searchParams.get('schema') ?? undefined;
  for (const param of PRISMA_ONLY_PARAMS) {
    url.searchParams.delete(param);
  }
  // sslmodeの指定があればそれに従い、無ければローカル以外ではSSLを使う（Supabaseは必須）
  const useSsl = sslmode ? sslmode !== 'disable' : !LOCAL_HOSTS.has(url.hostname);
  return { connectionString: url.toString(), useSsl, schema };
}

export function createPrismaClient(rawConnectionString: string | undefined): PrismaClient {
  if (!rawConnectionString) {
    throw new Error('DATABASE_URL is not set');
  }
  const { connectionString, useSsl, schema } = normalizeConnectionString(rawConnectionString);

  const adapter = new PrismaPg(
    {
      connectionString,
      // Prisma 6の sslmode=require と同じく、証明書の検証はしない（暗号化のみ）
      ssl: useSsl ? { rejectUnauthorized: false } : undefined,
      max: 5,
      idleTimeoutMillis: 10_000,
      connectionTimeoutMillis: 10_000,
    },
    schema ? { schema } : undefined
  );
  return new PrismaClient({ adapter });
}
