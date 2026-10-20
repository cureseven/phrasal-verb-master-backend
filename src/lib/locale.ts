// 対応言語。zh は簡体字中国語。言語を増やすときはここに足し、翻訳データをバックフィルする。
export const SUPPORTED_LOCALES = ['ja', 'zh'] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'ja';

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (SUPPORTED_LOCALES as readonly string[]).includes(value);
}

/** クエリパラメータ等から言語を決める。未指定・未対応の値は既定の言語にする。 */
export function parseLocale(value: unknown): Locale {
  return isLocale(value) ? value : DEFAULT_LOCALE;
}
