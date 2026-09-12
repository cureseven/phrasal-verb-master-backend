// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const phrasalVerbsData = [
  { verb: 'take', particle: 'off', meaningJa: '離陸する、脱ぐ', exampleSentence: 'The plane will take off soon.' },
  { verb: 'take', particle: 'on', meaningJa: '引き受ける、雇う', exampleSentence: 'He decided to take on new tasks.' },
  { verb: 'take', particle: 'up', meaningJa: '始める、占める', exampleSentence: 'She took up yoga last week.' },
  { verb: 'get', particle: 'on', meaningJa: '乗る、仲良くやっていく', exampleSentence: 'Get on the bus before it leaves.' },
  { verb: 'get', particle: 'off', meaningJa: '降車する', exampleSentence: 'We need to get off at the next stop.' },
  { verb: 'get', particle: 'up', meaningJa: '起きる', exampleSentence: 'I get up at 7 AM every morning.' },
  { verb: 'turn', particle: 'on', meaningJa: 'つける、起動する', exampleSentence: 'Please turn on the light.' },
  { verb: 'turn', particle: 'off', meaningJa: '消す、停止する', exampleSentence: 'Don\'t forget to turn off the TV.' },
  { verb: 'give', particle: 'up', meaningJa: '諦める、やめる', exampleSentence: 'Never give up on your dreams.' },
];

async function main() {
  console.log('Seeding phrasal verbs...');
  for (const verb of phrasalVerbsData) {
    await prisma.phrasalVerb.create({
      data: verb,
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