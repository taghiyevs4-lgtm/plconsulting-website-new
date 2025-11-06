// lib/i18n.ts
export const locales = ["az", "en", "ru"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "az";

export function isLocale(value?: string): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

// <<< MÜTLƏQ: getDictionary export-u >>>
export async function getDictionary(locale: Locale) {
  switch (locale) {
    case "en":
      return (await import("../dictionaries/en")).default;
    case "ru":
      return (await import("../dictionaries/ru")).default;
    default:
      return (await import("../dictionaries/az")).default;
  }
}
