import { Prisma } from '@prisma/client';
import { Locale } from '../lib/locale.js';
import { PublicPhrasalVerb, toPublicVerb, VerbsService } from './verbsService.js';

const verbsService = new VerbsService();

export class QuizService {
  async getNextCard(locale: Locale, mode?: string, word?: string): Promise<PublicPhrasalVerb> {
    let whereClause: Prisma.PhrasalVerbWhereInput = {};

    if (mode && word) {
      if (mode === 'verb_fixed') {
        whereClause = { verb: word };
      } else if (mode === 'particle_fixed') {
        whereClause = { particle: word };
      }
    }

    let verbs = await verbsService.findForQuiz(whereClause);

    if (verbs.length === 0) {
      verbs = await verbsService.findForQuiz({});
    }

    if (verbs.length === 0) {
      throw new Error('No phrasal verbs found in database.');
    }

    const target = verbs[Math.floor(Math.random() * verbs.length)];
    return toPublicVerb(target, locale);
  }
}
