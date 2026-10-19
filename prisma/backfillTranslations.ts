import { PrismaClient } from '@prisma/client';
import { phrasalVerbsZhData } from './phrasalVerbsZhData.js';

const prisma = new PrismaClient();

const LOCALE = 'zh';

// 既存のphrasal_verbsとはverb+particleで、例文とはorder（1〜3）で突き合わせ、
// 中国語の訳が未登録のものにだけ追加する（既存の訳の上書きやデータ削除は行わない、非破壊的なスクリプト）。
// 何度実行しても結果は同じになる。
async function main() {
  console.log(`Backfilling ${LOCALE} translations for ${phrasalVerbsZhData.length} phrasal verbs...`);
  let meaningsAdded = 0;
  let examplesAdded = 0;
  let skippedNoMatch = 0;
  let skippedExampleMismatch = 0;

  for (const entry of phrasalVerbsZhData) {
    const phrasalVerb = await prisma.phrasalVerb.findFirst({
      where: { verb: entry.verb, particle: entry.particle },
      include: { examples: { orderBy: { order: 'asc' } } },
    });

    if (!phrasalVerb) {
      console.warn(`No matching phrasal verb for ${entry.verb} ${entry.particle}, skipping.`);
      skippedNoMatch++;
      continue;
    }

    const meaningResult = await prisma.phrasalVerbTranslation.createMany({
      data: [{ phrasalVerbId: phrasalVerb.id, locale: LOCALE, meaning: entry.meaning }],
      skipDuplicates: true,
    });
    meaningsAdded += meaningResult.count;

    if (phrasalVerb.examples.length !== entry.examples.length) {
      console.warn(
        `Example count mismatch for ${entry.verb} ${entry.particle} ` +
          `(db=${phrasalVerb.examples.length}, data=${entry.examples.length}), skipping examples.`
      );
      skippedExampleMismatch++;
      continue;
    }

    const exampleResult = await prisma.phrasalVerbExampleTranslation.createMany({
      data: phrasalVerb.examples.map((ex, i) => ({
        exampleId: ex.id,
        locale: LOCALE,
        sentence: entry.examples[i],
      })),
      skipDuplicates: true,
    });
    examplesAdded += exampleResult.count;
  }

  console.log(
    `Done. meaningsAdded=${meaningsAdded}, examplesAdded=${examplesAdded}, ` +
      `skippedNoMatch=${skippedNoMatch}, skippedExampleMismatch=${skippedExampleMismatch}`
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
