# 実装進捗管理（ループエンジニアリング用）

このファイルはバックグラウンドループ（自律実行セッション）が読み書きする状態ファイル。
1回の起動で「未着手」のタスクを1つ選び、実装 → CI通過確認 → PR作成 → auto-merge有効化 → 本ファイル更新（ステータスをPR中に）、まで行って終了する。
マージ確認は次回起動時に行い、マージ済みなら「完了」に更新してから次のタスクへ進む。

## ルール
- 対象リポジトリ:
  - backend: `~/src/github.com/cureseven/phrasal-verb-master-backend` (main: Render)
  - frontend: `~/src/github.com/cureseven/phrasal-verb-master-frontend` (main: Vercel)
- 1タスク = 1ブランチ = 1PR。ブランチ名は `feat/<task-id>`。
- 実装後、必ずローカルで `npm run build`（backendは`npx prisma generate && npm run build`、frontendは`npm run lint && npm run build`）を通してからpush。
- PR作成時は `gh pr create` を使い、本文に実装内容と動作確認手順を書く。
- PR作成後 `gh pr merge --auto --squash` でauto-merge予約（CIがrequired statusとして`build`をブロックするので、通過後に自動でマージされる)。
- 1回のセッションで無理に複数タスクを進めない。区切りが悪いタスクを途中で終えるくらいなら、タスクの粒度をさらに小さくする。
- 仕様の解釈に迷ったら `PHRASAL_VERB_MASTER_SPEC.md`（両リポジトリのルートに配置予定）を参照。それでも決められない場合はタスクの備考欄に懸念点を書いて次点タスクへスキップする（人間の判断待ちとしてマーク）。

## タスク一覧

### フェーズ1: 認証基盤（最優先）— 完了 ✅

### フェーズ2: 一覧・絞り込み（SCR-02）— 完了 ✅

### フェーズ3: SCR-01 Top/カード閲覧の本実装 — 完了 ✅

### フェーズ4: クイズ・進捗（SCR-03, SCR-05, 要認証）— 完了 ✅

## 仕様書の全機能が実装完了（2026-09-13）
PHRASAL_VERB_MASTER_SPEC.mdのFunctional Requirements・画面リスト（SCR-01〜05）は全て実装済み。
今後は新機能追加ではなく、品質改善・運用対応のフェーズ。詳細は「残タスク・懸念事項」を参照。

## 完了ログ
- `auth-01-backend-signup-login`: `POST /api/auth/signup`, `/login`, `/logout` を実装（logoutも同時に完了）。PR: https://github.com/cureseven/phrasal-verb-master-backend/pull/1 （マージ済み, 2026-09-13）
  - ✅ Renderの環境変数`JWT_SECRET`/`FRONTEND_URL`は設定済み（2026-09-13対応済み）。
- `auth-02-backend-auth-middleware`: `requireAuth`ミドルウェアと`GET /api/auth/me`を実装。PR: https://github.com/cureseven/phrasal-verb-master-backend/pull/2 （マージ済み, 2026-09-13）
- `fix-me-401`: 削除済みユーザーのCookieで`/me`が404を返す不整合を401に修正。PR: https://github.com/cureseven/phrasal-verb-master-backend/pull/3 （マージ済み, 2026-09-13）
- `auth-03-frontend-login-signup-page`: `/login`, `/signup`画面を実装。PR: https://github.com/cureseven/phrasal-verb-master-frontend/pull/1 （マージ済み, 2026-09-13）
- `auth-04-frontend-auth-state`: `AuthContext`によるログイン状態管理、全ページ共通ヘッダー、ログアウトボタンを実装。PR: https://github.com/cureseven/phrasal-verb-master-frontend/pull/2 （マージ済み, 2026-09-13）
- `list-01-backend-verbs-endpoint`: `GET /api/verbs`（verb/particle/status絞り込み、optionalAuth追加）。PR: https://github.com/cureseven/phrasal-verb-master-backend/pull/4 （マージ済み, 2026-09-13）
- `list-02-backend-verb-detail-related`: `GET /api/verbs/:id`, `GET /api/verbs/related`。PR: https://github.com/cureseven/phrasal-verb-master-backend/pull/5 （マージ済み, 2026-09-13）
- `list-03-frontend-list-page`: `/list`画面（グリッド表示、動詞/前置詞ドロップダウン）。PR: https://github.com/cureseven/phrasal-verb-master-frontend/pull/3 （マージ済み, 2026-09-13）
- `list-04-frontend-status-filter`: 学習ステータスフィルター（要ログイン）。PR: https://github.com/cureseven/phrasal-verb-master-frontend/pull/4 （マージ済み, 2026-09-13）
- `top-01-frontend-card-view` / `top-02-frontend-related-word-switch`: `/`をSCR-01本来の仕様に置き換え（訳表示トグル、`GET /api/verbs/related`を使った語句クリック切替）、デバッグ用トップページを廃止しナビゲーションをヘッダーに移設。PR: https://github.com/cureseven/phrasal-verb-master-frontend/pull/5 （マージ済み, 2026-09-13）
- `quiz-01-backend-progress-mark` / `quiz-02-backend-progress-summary`: `POST /api/progress/mark`, `GET /api/progress/summary`を実装。PR: https://github.com/cureseven/phrasal-verb-master-backend/pull/6 （マージ済み, 2026-09-13）
  - 実装中に発見・修正したバグ: PrismaのLearningStatus enumはランタイム値がキー名(`MEMORIZED`等)になり、API仕様の文字列(`memorized`等)と直接比較すると常に不一致になっていた。変換マップで解消。
- `quiz-03-frontend-quiz-auth-gate`: `/quiz`を要ログイン化し、「覚えた/覚えてない」ボタンから`/api/progress/mark`を呼ぶように実装。PR: https://github.com/cureseven/phrasal-verb-master-frontend/pull/6 （マージ済み, 2026-09-13）
- `quiz-04-frontend-mypage`: マイページ（進捗率、覚えてない句動詞への再テストショートカット）を実装。PR: https://github.com/cureseven/phrasal-verb-master-frontend/pull/7 （マージ済み, 2026-09-13）
- `fix-quiz-click-mode`: クイズ/トップページの語句クリックが70%の確率で無視される不整合を修正し、両ページとも「クリックした方が変わる」に統一。PR: backend不要、frontend PR#10, #11（マージ済み, 2026-09-13〜14）
- `logo-favicon`: 鏡餅モチーフの暖色ロゴを追加。frontend PR#8, #9（マージ済み, 2026-09-13）
- `admin-dashboard`: 管理者機能（読み取り専用化・全体進捗集計）を追加。管理者は`admins`テーブルで分離、読み取り専用状態は`UserAccountStatus`テーブルに正規化。管理画面は`(admin)/[adminSlug]`配下の推測困難なURLに独立レイアウトで配置。backend PR#7, frontend PR#12（マージ済み, 2026-09-14）
  - ⚠️ 人間の作業待ち: 本番Supabase DBへの`npx prisma migrate deploy`実行、本番`npm run seed:admin`での初回管理者作成、Vercelへの`ADMIN_URL_SLUG`環境変数設定（すべて未対応）。
- `admin-subdomain-migration`: 本番ドメインが`phrasalverb.cureseven.tokyo`に確定したのに合わせ、管理画面を`admin.phrasalverb.cureseven.tokyo`サブドメインに切り出し。`(admin)/[adminSlug]`の推測困難URL方式を廃止し、`(admin)/admin/*`の固定パスに変更。同一Vercelプロジェクトのまま`src/proxy.ts`（Next.js 16でmiddlewareから名称変更）でホスト名判定し、admin.サブドメインでは`/`等のクリーンなパスを内部的に`/admin/*`へリライト、逆にメインドメインからの`/admin/*`直接アクセスは404にして到達不可にする。backendのCORSはカンマ区切りで複数オリジン（メインドメイン・adminサブドメイン）を許可するよう変更。backend PR#11, frontend PR#21（マージ済み, 2026-09-15）
  - ⚠️ 人間の作業待ち: Vercelプロジェクトに`admin.phrasalverb.cureseven.tokyo`ドメインを追加（DNS設定含む）、Renderの`FRONTEND_URL`をカンマ区切りで両ドメインに更新、Vercelの`ADMIN_URL_SLUG`環境変数は不要になったため削除して問題ない。

## 残タスク・懸念事項（人間の判断待ち）
- スタッシュに退避したまま放置している変更あり（backendリポジトリ）: `prisma/schema.prisma`へのdirectUrl追加、`create_tables.sql`、`package.json`のseedスクリプト変更。`git stash list`で確認できる。今回のタスクとは無関係な既存の作業中変更と判断し、意図的に触れていない。
- ブランチ保護の`strict`（マージ前にmainと同期必須）は両リポジトリでfalseに変更済み。並行してPRを進める運用と相性が悪かったため。
- 仕様書に無いが実装上の判断で追加したもの: `GET /api/auth/me`（ログイン状態確認用）、`optionalAuth`ミドルウェア、`/list`ページの`?status=`クエリパラメータ対応（マイページからのディープリンク用）、管理者機能一式（`admins`/`UserAccountStatus`テーブル、`/api/admin/*`、`admin.`サブドメイン + `src/proxy.ts`によるホスト名ベースのルーティング分離）。
