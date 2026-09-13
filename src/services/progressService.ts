import { LearningStatus } from '@prisma/client';
import { prisma } from '../lib/prisma.js';

export class ProgressError extends Error {
  constructor(
    message: string,
    public status: number
  ) {
    super(message);
  }
}

// PrismaのenumはDBの@mapではなくキー名(MEMORIZED等)がランタイム値になるため、
// API上の文字列(memorized等)との変換が必要。
const STATUS_MAP: Record<string, LearningStatus> = {
  memorized: LearningStatus.MEMORIZED,
  review_needed: LearningStatus.REVIEW_NEEDED,
};

const STATUS_API_LABEL: Record<LearningStatus, string> = {
  [LearningStatus.MEMORIZED]: 'memorized',
  [LearningStatus.REVIEW_NEEDED]: 'review_needed',
};

export class ProgressService {
  async mark(userId: string, phrasalVerbId: string, status: string) {
    const learningStatus = STATUS_MAP[status];
    if (!learningStatus) {
      throw new ProgressError('statusは"memorized"か"review_needed"を指定してください。', 400);
    }

    const verb = await prisma.phrasalVerb.findUnique({ where: { id: phrasalVerbId } });
    if (!verb) {
      throw new ProgressError('句動詞が見つかりません。', 404);
    }

    const result = await prisma.userPhraseStatus.upsert({
      where: { userId_phrasalVerbId: { userId, phrasalVerbId } },
      create: { userId, phrasalVerbId, status: learningStatus },
      update: { status: learningStatus },
    });

    return { ...result, status: STATUS_API_LABEL[result.status] };
  }

  async summary(userId: string) {
    const totalCount = await prisma.phrasalVerb.count();
    const memorizedCount = await prisma.userPhraseStatus.count({
      where: { userId, status: LearningStatus.MEMORIZED },
    });
    const reviewNeededCount = await prisma.userPhraseStatus.count({
      where: { userId, status: LearningStatus.REVIEW_NEEDED },
    });

    return { totalCount, memorizedCount, reviewNeededCount };
  }
}
