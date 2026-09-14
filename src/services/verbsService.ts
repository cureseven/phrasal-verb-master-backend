import { LearningStatus, Prisma } from '@prisma/client';
import { prisma } from '../lib/prisma.js';

const STATUS_MAP: Record<string, LearningStatus> = {
  memorized: LearningStatus.MEMORIZED,
  review_needed: LearningStatus.REVIEW_NEEDED,
};

export interface ListVerbsParams {
  verb?: string;
  particle?: string;
  status?: string;
  userId?: string;
}

export class VerbsService {
  async list({ verb, particle, status, userId }: ListVerbsParams) {
    const where: Prisma.PhrasalVerbWhereInput = {};

    if (verb) {
      where.verb = verb;
    }
    if (particle) {
      where.particle = particle;
    }

    // ステータスフィルターはログインユーザーのみ有効。未ログインなら無視する。
    const learningStatus = status ? STATUS_MAP[status] : undefined;
    if (learningStatus && userId) {
      where.userPhraseStatuses = {
        some: { userId, status: learningStatus },
      };
    }

    return prisma.phrasalVerb.findMany({
      where,
      orderBy: [{ verb: 'asc' }, { particle: 'asc' }],
    });
  }

  async getById(id: string) {
    return prisma.phrasalVerb.findUnique({ where: { id } });
  }

  async create(data: {
    verb: string;
    particle: string;
    meaningJa: string;
    exampleSentence: string;
  }) {
    return prisma.phrasalVerb.create({ data });
  }

  async update(id: string, data: { meaningJa: string; exampleSentence: string }) {
    return prisma.phrasalVerb.update({ where: { id }, data });
  }

  async delete(id: string) {
    return prisma.phrasalVerb.delete({ where: { id } });
  }

  async getRelated(type: 'verb' | 'particle', value: string) {
    return prisma.phrasalVerb.findMany({
      where: type === 'verb' ? { verb: value } : { particle: value },
      orderBy: [{ verb: 'asc' }, { particle: 'asc' }],
    });
  }
}
