import { PrismaClient } from '@prisma/client';
import { phrasalVerbsData } from './phrasalVerbsData.js';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding phrasal verbs...');

  // 既存データを一度すべてクリアして入れ直す場合
  await prisma.phrasalVerb.deleteMany();

  for (const item of phrasalVerbsData) {
    await prisma.phrasalVerb.create({
      data: {
        verb: item.verb,
        particle: item.particle,
        meaningJa: item.meaningJa,
        examples: {
          create: item.examples.map((ex, i) => ({
            sentenceEn: ex.en,
            sentenceJa: ex.ja,
            order: i + 1,
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
