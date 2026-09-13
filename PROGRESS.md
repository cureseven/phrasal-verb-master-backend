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

### フェーズ1: 認証基盤（最優先）
- [ ] `auth-03-frontend-login-signup-page`: frontend — SCR-04 ログイン/サインアップ画面（`/login`, `/signup`）とAPI連携（実装中）
- [ ] `auth-04-frontend-auth-state`: frontend — ログイン状態のグローバル管理（Context or SWR）、ログアウトボタン、未ログイン時のリダイレクト方針

### フェーズ2: 一覧・絞り込み（SCR-02）
- [ ] `list-01-backend-verbs-endpoint`: backend — `GET /api/verbs`（verb/particle/statusクエリでの絞り込み）
- [ ] `list-02-backend-verb-detail-related`: backend — `GET /api/verbs/:id`, `GET /api/verbs/related`
- [ ] `list-03-frontend-list-page`: frontend — SCR-02 句動詞一覧画面（グリッド表示、動詞/前置詞ドロップダウン検索）
- [ ] `list-04-frontend-status-filter`: frontend — 学習ステータスフィルター（要ログイン時のみ表示）

### フェーズ3: SCR-01 Top/カード閲覧の本実装
- [ ] `top-01-frontend-card-view`: frontend — `/`にSCR-01本来の仕様（訳の表示/非表示トグル、語句クリックでの切替）を実装。現状の`/quiz`とデバッグ用トップページを整理統合
- [ ] `top-02-frontend-related-word-switch`: frontend — カード上の動詞/副詞・前置詞クリックで`GET /api/verbs/related`を使った切替に対応（現状の`/quiz`はマルコフ連鎖のランダム出題のみ）

### フェーズ4: クイズ・進捗（SCR-03, SCR-05, 要認証）
- [ ] `quiz-01-backend-progress-mark`: backend — `POST /api/progress/mark`（要認証）
- [ ] `quiz-02-backend-progress-summary`: backend — `GET /api/progress/summary`（要認証）
- [ ] `quiz-03-frontend-quiz-auth-gate`: frontend — SCR-03を要ログインにし、「覚えた/覚えてない」ボタンから`/api/progress/mark`を呼ぶ
- [ ] `quiz-04-frontend-mypage`: frontend — SCR-05 マイページ（進捗率、覚えてない句動詞の再テスト導線）

## 完了ログ
- `auth-01-backend-signup-login`: `POST /api/auth/signup`, `/login`, `/logout` を実装（logoutも同時に完了）。PR: https://github.com/cureseven/phrasal-verb-master-backend/pull/1 （マージ済み, 2026-09-13）
  - ⚠️ 人間の作業待ち: Renderの環境変数に `JWT_SECRET`（ランダムな長い文字列）と `FRONTEND_URL=https://phrasal-verb-master-frontend.vercel.app` の設定が必要。未設定だとlogin時に500エラーになる。
- `auth-02-backend-auth-middleware`: `requireAuth`ミドルウェアと`GET /api/auth/me`を実装。PR: https://github.com/cureseven/phrasal-verb-master-backend/pull/2 （マージ済み, 2026-09-13）
