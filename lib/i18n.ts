// lib/i18n.ts
export const locales = ["az", "en", "ru"] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = "az";

export function isLocale(v: string | undefined): v is Locale {
  return !!v && locales.includes(v as Locale);
}
