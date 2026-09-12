import { prisma } from '../lib/prisma.js';

export interface NextCardResponse {
  id: string;
  verb: string;
  particle: string;
  meaningJa: string;
  exampleSentence: string;
}

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
    });

    if (verbs.length === 0) {
      verbs = await prisma.phrasalVerb.findMany();
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
      exampleSentence: target.exampleSentence,
    };
  }
}