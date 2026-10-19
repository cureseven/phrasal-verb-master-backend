// 一般ユーザー向けAPIのエラーコード。フロントはこのコードを見て表示言語のメッセージに変換する。
// レスポンスの error（日本語）はログ・互換用として残している。管理画面向けAPIは日本語のみのためコードを付けない。
export type ErrorCode =
  | 'AUTH_REQUIRED'
  | 'SESSION_EXPIRED'
  | 'INVALID_EMAIL'
  | 'PASSWORD_TOO_SHORT'
  | 'PASSWORD_REQUIRED'
  | 'EMAIL_TAKEN'
  | 'INVALID_CREDENTIALS'
  | 'WRONG_PASSWORD'
  | 'USERNAME_REQUIRED'
  | 'USERNAME_TOO_LONG'
  | 'READ_ONLY_ACCOUNT'
  | 'NOT_FOUND'
  | 'BAD_REQUEST'
  | 'SERVER_ERROR';
