-- CreateEnum
CREATE TYPE "LearningStatus" AS ENUM ('memorized', 'review_needed');

-- CreateTable
CREATE TABLE "phrasal_verbs" (
    "id" TEXT NOT NULL,
    "verb" TEXT NOT NULL,
    "particle" TEXT NOT NULL,
    "meaning_ja" TEXT NOT NULL,
    "example_sentence" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "phrasal_verbs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_phrasal_verb_statuses" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "phrasal_verb_id" TEXT NOT NULL,
    "status" "LearningStatus" NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_phrasal_verb_statuses_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_phrasal_verb_statuses_user_id_phrasal_verb_id_key" ON "user_phrasal_verb_statuses"("user_id", "phrasal_verb_id");

-- AddForeignKey
ALTER TABLE "user_phrasal_verb_statuses" ADD CONSTRAINT "user_phrasal_verb_statuses_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_phrasal_verb_statuses" ADD CONSTRAINT "user_phrasal_verb_statuses_phrasal_verb_id_fkey" FOREIGN KEY ("phrasal_verb_id") REFERENCES "phrasal_verbs"("id") ON DELETE CASCADE ON UPDATE CASCADE;
