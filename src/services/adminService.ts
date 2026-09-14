import { LearningStatus } from '@prisma/client';
import { prisma } from '../lib/prisma.js';

export interface AdminStats {
  totalUsers: number;
  readOnlyUsers: number;
  totalPhrasalVerbs: number;
  totalMemorized: number;
  totalReviewNeeded: number;
}

export interface AdminUserRow {
  id: string;
  email: string;
  createdAt: Date;
  isReadOnly: boolean;
  memorizedCount: number;
  reviewNeededCount: number;
}

export class AdminService {
  async getStats(): Promise<AdminStats> {
    const [totalUsers, readOnlyUsers, totalPhrasalVerbs, totalMemorized, totalReviewNeeded] =
      await Promise.all([
        prisma.user.count(),
        prisma.userAccountStatus.count({ where: { isReadOnly: true } }),
        prisma.phrasalVerb.count(),
        prisma.userPhraseStatus.count({ where: { status: LearningStatus.MEMORIZED } }),
        prisma.userPhraseStatus.count({ where: { status: LearningStatus.REVIEW_NEEDED } }),
      ]);

    return { totalUsers, readOnlyUsers, totalPhrasalVerbs, totalMemorized, totalReviewNeeded };
  }

  async listUsers(): Promise<AdminUserRow[]> {
    const [users, statusCounts, accountStatuses] = await Promise.all([
      prisma.user.findMany({ orderBy: { createdAt: 'desc' } }),
      prisma.userPhraseStatus.groupBy({
        by: ['userId', 'status'],
        _count: true,
      }),
      prisma.userAccountStatus.findMany({ where: { isReadOnly: true } }),
    ]);

    const readOnlyUserIds = new Set(accountStatuses.map((s) => s.userId));
    const countsByUser = new Map<string, { memorized: number; reviewNeeded: number }>();
    for (const row of statusCounts) {
      const current = countsByUser.get(row.userId) ?? { memorized: 0, reviewNeeded: 0 };
      if (row.status === LearningStatus.MEMORIZED) {
        current.memorized = row._count;
      } else {
        current.reviewNeeded = row._count;
      }
      countsByUser.set(row.userId, current);
    }

    return users.map((user) => {
      const counts = countsByUser.get(user.id) ?? { memorized: 0, reviewNeeded: 0 };
      return {
        id: user.id,
        email: user.email,
        createdAt: user.createdAt,
        isReadOnly: readOnlyUserIds.has(user.id),
        memorizedCount: counts.memorized,
        reviewNeededCount: counts.reviewNeeded,
      };
    });
  }

  async setReadOnly(userId: string, isReadOnly: boolean): Promise<void> {
    if (isReadOnly) {
      await prisma.userAccountStatus.upsert({
        where: { userId },
        create: { userId, isReadOnly: true },
        update: { isReadOnly: true },
      });
    } else {
      await prisma.userAccountStatus.deleteMany({ where: { userId } });
    }
  }
}
