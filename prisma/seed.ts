import { PrismaClient } from '@prisma/client';
import { phrasalVerbsData } from './phrasalVerbsData.js';
import { phrasalVerbsZhData } from './phrasalVerbsZhData.js';

const prisma = new PrismaClient();

const zhByKey = new Map(phrasalVerbsZhData.map((d) => [`${d.verb} ${d.particle}`, d]));

async function main() {
  console.log('Seeding phrasal verbs...');

  // 既存データを一度すべてクリアして入れ直す場合
  await prisma.phrasalVerb.deleteMany();

  for (const item of phrasalVerbsData) {
    const zh = zhByKey.get(`${item.verb} ${item.particle}`);
    await prisma.phrasalVerb.create({
      data: {
        verb: item.verb,
        particle: item.particle,
        meaningJa: item.meaningJa,
        translations: {
          create: [
            { locale: 'ja', meaning: item.meaningJa },
            ...(zh ? [{ locale: 'zh', meaning: zh.meaning }] : []),
          ],
        },
        examples: {
          create: item.examples.map((ex, i) => ({
            sentenceEn: ex.en,
            sentenceJa: ex.ja,
            order: i + 1,
            translations: {
              create: [
                { locale: 'ja', sentence: ex.ja },
                ...(zh?.examples[i] ? [{ locale: 'zh', sentence: zh.examples[i] }] : []),
              ],
            },
          })),
        },
      },
    });
  }
  console.log('Seeding completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
