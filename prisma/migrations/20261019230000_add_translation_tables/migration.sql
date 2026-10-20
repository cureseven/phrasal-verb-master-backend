-- CreateTable
CREATE TABLE "phrasal_verb_translations" (
    "id" TEXT NOT NULL,
    "phrasal_verb_id" TEXT NOT NULL,
    "locale" TEXT NOT NULL,
    "meaning" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "phrasal_verb_translations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "phrasal_verb_example_translations" (
    "id" TEXT NOT NULL,
    "example_id" TEXT NOT NULL,
    "locale" TEXT NOT NULL,
    "sentence" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "phrasal_verb_example_translations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "phrasal_verb_translations_phrasal_verb_id_locale_key" ON "phrasal_verb_translations"("phrasal_verb_id", "locale");

-- CreateIndex
CREATE UNIQUE INDEX "phrasal_verb_example_translations_example_id_locale_key" ON "phrasal_verb_example_translations"("example_id", "locale");

-- AddForeignKey
ALTER TABLE "phrasal_verb_translations" ADD CONSTRAINT "phrasal_verb_translations_phrasal_verb_id_fkey" FOREIGN KEY ("phrasal_verb_id") REFERENCES "phrasal_verbs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "phrasal_verb_example_translations" ADD CONSTRAINT "phrasal_verb_example_translations_example_id_fkey" FOREIGN KEY ("example_id") REFERENCES "phrasal_verb_examples"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- 既存の日本語（meaning_ja / sentence_ja）を翻訳テーブルへコピーする。
-- 旧カラムは移行が落ち着いてから別のマイグレーションで削除する。
INSERT INTO "phrasal_verb_translations" ("id", "phrasal_verb_id", "locale", "meaning")
SELECT gen_random_uuid()::text, "id", 'ja', "meaning_ja" FROM "phrasal_verbs";

INSERT INTO "phrasal_verb_example_translations" ("id", "example_id", "locale", "sentence")
SELECT gen_random_uuid()::text, "id", 'ja', "sentence_ja" FROM "phrasal_verb_examples";
