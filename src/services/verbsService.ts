import { LearningStatus, Prisma } from '@prisma/client';
import { prisma } from '../lib/prisma.js';
import { DEFAULT_LOCALE, Locale, SUPPORTED_LOCALES } from '../lib/locale.js';

const STATUS_MAP: Record<string, LearningStatus> = {
  memorized: LearningStatus.MEMORIZED,
  review_needed: LearningStatus.REVIEW_NEEDED,
};

const VERB_INCLUDE = {
  translations: true,
  examples: { orderBy: { order: 'asc' }, include: { translations: true } },
} satisfies Prisma.PhrasalVerbInclude;

type VerbWithRelations = Prisma.PhrasalVerbGetPayload<{ include: typeof VERB_INCLUDE }>;

export type LocalizedText = Record<Locale, string>;

/** 一般向けAPIのレスポンス。指定した1言語の意味・訳だけを返す。 */
export interface PublicPhrasalVerb {
  id: string;
  verb: string;
  particle: string;
  meaning: string;
  /** @deprecated 移行期間中の互換用。フロントが meaning に移行したら削除する */
  meaningJa: string;
  examples: {
    sentenceEn: string;
    translation: string;
    /** @deprecated 移行期間中の互換用。フロントが translation に移行したら削除する */
    sentenceJa: string;
  }[];
}

/** 管理画面向けAPIのレスポンス。全言語の意味・訳をまとめて返す。 */
export interface AdminPhrasalVerb {
  id: string;
  verb: string;
  particle: string;
  meanings: LocalizedText;
  examples: { sentenceEn: string; translations: LocalizedText }[];
}

export interface ExampleInput {
  sentenceEn: string;
  translations: LocalizedText;
}

export interface ListVerbsParams {
  verb?: string;
  particle?: string;
  status?: string;
  userId?: string;
  locale: Locale;
}

// 指定言語の翻訳が無い場合（バックフィル前など）は既定の言語にフォールバックする
function pickTranslation<T extends { locale: string }>(
  translations: T[],
  locale: Locale,
  text: (t: T) => string
): string | undefined {
  const found =
    translations.find((t) => t.locale === locale) ??
    translations.find((t) => t.locale === DEFAULT_LOCALE);
  return found ? text(found) : undefined;
}

// 管理画面の編集フォーム用。未登録の言語は空文字にする。
function toLocalizedText<T extends { locale: string }>(
  translations: T[],
  text: (t: T) => string
): LocalizedText {
  return Object.fromEntries(
    SUPPORTED_LOCALES.map((locale) => {
      const found = translations.find((t) => t.locale === locale);
      return [locale, found ? text(found) : ''];
    })
  ) as LocalizedText;
}

export function toPublicVerb(verb: VerbWithRelations, locale: Locale): PublicPhrasalVerb {
  return {
    id: verb.id,
    verb: verb.verb,
    particle: verb.particle,
    meaning: pickTranslation(verb.translations, locale, (t) => t.meaning) ?? verb.meaningJa,
    meaningJa: verb.meaningJa,
    examples: verb.examples.map((ex) => ({
      sentenceEn: ex.sentenceEn,
      translation: pickTranslation(ex.translations, locale, (t) => t.sentence) ?? ex.sentenceJa,
      sentenceJa: ex.sentenceJa,
    })),
  };
}

function toAdminVerb(verb: VerbWithRelations): AdminPhrasalVerb {
  return {
    id: verb.id,
    verb: verb.verb,
    particle: verb.particle,
    meanings: toLocalizedText(verb.translations, (t) => t.meaning),
    examples: verb.examples.map((ex) => ({
      sentenceEn: ex.sentenceEn,
      translations: toLocalizedText(ex.translations, (t) => t.sentence),
    })),
  };
}

function exampleCreateData(examples: ExampleInput[]) {
  return examples.map((ex, i) => ({
    sentenceEn: ex.sentenceEn,
    // 旧カラムは削除するまでNOT NULLなので日本語を入れておく
    sentenceJa: ex.translations.ja,
    order: i + 1,
    translations: {
      create: SUPPORTED_LOCALES.map((locale) => ({ locale, sentence: ex.translations[locale] })),
    },
  }));
}

export class VerbsService {
  async list({ verb, particle, status, userId, locale }: ListVerbsParams) {
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

    const verbs = await prisma.phrasalVerb.findMany({
      where,
      orderBy: [{ verb: 'asc' }, { particle: 'asc' }],
      include: VERB_INCLUDE,
    });
    return verbs.map((v) => toPublicVerb(v, locale));
  }

  async getById(id: string, locale: Locale) {
    const verb = await prisma.phrasalVerb.findUnique({ where: { id }, include: VERB_INCLUDE });
    return verb ? toPublicVerb(verb, locale) : null;
  }

  async getByIdForAdmin(id: string) {
    const verb = await prisma.phrasalVerb.findUnique({ where: { id }, include: VERB_INCLUDE });
    return verb ? toAdminVerb(verb) : null;
  }

  async exists(id: string) {
    const count = await prisma.phrasalVerb.count({ where: { id } });
    return count > 0;
  }

  async create(data: {
    verb: string;
    particle: string;
    meanings: LocalizedText;
    examples: ExampleInput[];
  }) {
    const created = await prisma.phrasalVerb.create({
      data: {
        verb: data.verb,
        particle: data.particle,
        // 旧カラムは削除するまでNOT NULLなので日本語を入れておく
        meaningJa: data.meanings.ja,
        translations: {
          create: SUPPORTED_LOCALES.map((locale) => ({ locale, meaning: data.meanings[locale] })),
        },
        examples: { create: exampleCreateData(data.examples) },
      },
      include: VERB_INCLUDE,
    });
    return toAdminVerb(created);
  }

  async update(id: string, data: { meanings: LocalizedText; examples: ExampleInput[] }) {
    const updated = await prisma.$transaction(async (tx) => {
      // 例文の訳は例文に連鎖削除されるので、例文ごと作り直す
      await tx.phrasalVerbExample.deleteMany({ where: { phrasalVerbId: id } });
      await tx.phrasalVerbTranslation.deleteMany({ where: { phrasalVerbId: id } });
      return tx.phrasalVerb.update({
        where: { id },
        data: {
          meaningJa: data.meanings.ja,
          translations: {
            create: SUPPORTED_LOCALES.map((locale) => ({ locale, meaning: data.meanings[locale] })),
          },
          examples: { create: exampleCreateData(data.examples) },
        },
        include: VERB_INCLUDE,
      });
    });
    return toAdminVerb(updated);
  }

  async delete(id: string) {
    return prisma.phrasalVerb.delete({ where: { id } });
  }

  async getRelated(type: 'verb' | 'particle', value: string, locale: Locale) {
    const verbs = await prisma.phrasalVerb.findMany({
      where: type === 'verb' ? { verb: value } : { particle: value },
      orderBy: [{ verb: 'asc' }, { particle: 'asc' }],
      include: VERB_INCLUDE,
    });
    return verbs.map((v) => toPublicVerb(v, locale));
  }

  /** クイズ用。条件に合う句動詞を全件返す（ランダムに1件選ぶのは呼び出し側） */
  async findForQuiz(where: Prisma.PhrasalVerbWhereInput) {
    return prisma.phrasalVerb.findMany({ where, include: VERB_INCLUDE });
  }
}
