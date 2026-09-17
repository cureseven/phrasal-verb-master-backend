-- CreateTable
CREATE TABLE "phrasal_verb_examples" (
    "id" TEXT NOT NULL,
    "phrasal_verb_id" TEXT NOT NULL,
    "sentence_en" TEXT NOT NULL,
    "sentence_ja" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "phrasal_verb_examples_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "phrasal_verb_examples_phrasal_verb_id_order_key" ON "phrasal_verb_examples"("phrasal_verb_id", "order");

-- AddForeignKey
ALTER TABLE "phrasal_verb_examples" ADD CONSTRAINT "phrasal_verb_examples_phrasal_verb_id_fkey" FOREIGN KEY ("phrasal_verb_id") REFERENCES "phrasal_verbs"("id") ON DELETE CASCADE ON UPDATE CASCADE;
