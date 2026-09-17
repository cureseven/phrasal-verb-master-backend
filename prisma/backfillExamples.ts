import { PrismaClient } from '@prisma/client';
import { phrasalVerbsData } from './phrasalVerbsData.js';

const prisma = new PrismaClient();

// 既存のphrasal_verbsテーブルとはverb+particleで突き合わせ、例文が未登録の行にだけ
// PhrasalVerbExampleを追加する（idの変更やデータ削除は行わない、非破壊的なスクリプト）。
async function main() {
  console.log(`Backfilling examples for ${phrasalVerbsData.length} phrasal verbs...`);
  let updated = 0;
  let skippedNoMatch = 0;
  let skippedAlready = 0;

  for (const entry of phrasalVerbsData) {
    const phrasalVerb = await prisma.phrasalVerb.findFirst({
      where: { verb: entry.verb, particle: entry.particle },
      include: { examples: true },
    });

    if (!phrasalVerb) {
      console.warn(`No matching phrasal verb for ${entry.verb} ${entry.particle}, skipping.`);
      skippedNoMatch++;
      continue;
    }

    if (phrasalVerb.examples.length > 0) {
      skippedAlready++;
      continue;
    }

    await prisma.phrasalVerbExample.createMany({
      data: entry.examples.map((ex, i) => ({
        phrasalVerbId: phrasalVerb.id,
        sentenceEn: ex.en,
        sentenceJa: ex.ja,
        order: i + 1,
      })),
    });
    updated++;
  }

  console.log(
    `Done. updated=${updated}, skippedAlready=${skippedAlready}, skippedNoMatch=${skippedNoMatch}`
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
