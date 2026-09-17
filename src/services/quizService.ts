import { prisma } from '../lib/prisma.js';

export interface NextCardResponse {
  id: string;
  verb: string;
  particle: string;
  meaningJa: string;
  examples: { sentenceEn: string; sentenceJa: string }[];
}

const EXAMPLES_INCLUDE = { examples: { orderBy: { order: 'asc' as const } } };

export class QuizService {
  async getNextCard(mode?: string, word?: string): Promise<NextCardResponse> {
    let whereClause = {};

    if (mode && word) {
      if (mode === 'verb_fixed') {
        whereClause = { verb: word };
      } else if (mode === 'particle_fixed') {
        whereClause = { particle: word };
      }
    }

    let verbs = await prisma.phrasalVerb.findMany({
      where: whereClause,
      include: EXAMPLES_INCLUDE,
    });

    if (verbs.length === 0) {
      verbs = await prisma.phrasalVerb.findMany({ include: EXAMPLES_INCLUDE });
    }

    if (verbs.length === 0) {
      throw new Error('No phrasal verbs found in database.');
    }

    const target = verbs[Math.floor(Math.random() * verbs.length)];

    return {
      id: target.id,
      verb: target.verb,
      particle: target.particle,
      meaningJa: target.meaningJa,
      examples: target.examples.map((ex) => ({
        sentenceEn: ex.sentenceEn,
        sentenceJa: ex.sentenceJa,
      })),
    };
  }
}
