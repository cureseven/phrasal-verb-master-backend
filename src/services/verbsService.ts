import { LearningStatus, Prisma } from '@prisma/client';
import { prisma } from '../lib/prisma.js';

const STATUS_MAP: Record<string, LearningStatus> = {
  memorized: LearningStatus.MEMORIZED,
  review_needed: LearningStatus.REVIEW_NEEDED,
};

const EXAMPLES_INCLUDE = { examples: { orderBy: { order: 'asc' as const } } };

export interface ListVerbsParams {
  verb?: string;
  particle?: string;
  status?: string;
  userId?: string;
}

export interface ExampleInput {
  sentenceEn: string;
  sentenceJa: string;
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
      include: EXAMPLES_INCLUDE,
    });
  }

  async getById(id: string) {
    return prisma.phrasalVerb.findUnique({ where: { id }, include: EXAMPLES_INCLUDE });
  }

  async create(data: {
    verb: string;
    particle: string;
    meaningJa: string;
    examples: ExampleInput[];
  }) {
    const { examples, ...rest } = data;
    return prisma.phrasalVerb.create({
      data: {
        ...rest,
        examples: {
          create: examples.map((ex, i) => ({
            sentenceEn: ex.sentenceEn,
            sentenceJa: ex.sentenceJa,
            order: i + 1,
          })),
        },
      },
      include: EXAMPLES_INCLUDE,
    });
  }

  async update(id: string, data: { meaningJa: string; examples: ExampleInput[] }) {
    return prisma.$transaction(async (tx) => {
      await tx.phrasalVerbExample.deleteMany({ where: { phrasalVerbId: id } });
      return tx.phrasalVerb.update({
        where: { id },
        data: {
          meaningJa: data.meaningJa,
          examples: {
            create: data.examples.map((ex, i) => ({
              sentenceEn: ex.sentenceEn,
              sentenceJa: ex.sentenceJa,
              order: i + 1,
            })),
          },
        },
        include: EXAMPLES_INCLUDE,
      });
    });
  }

  async delete(id: string) {
    return prisma.phrasalVerb.delete({ where: { id } });
  }

  async getRelated(type: 'verb' | 'particle', value: string) {
    return prisma.phrasalVerb.findMany({
      where: type === 'verb' ? { verb: value } : { particle: value },
      orderBy: [{ verb: 'asc' }, { particle: 'asc' }],
      include: EXAMPLES_INCLUDE,
    });
  }
}
