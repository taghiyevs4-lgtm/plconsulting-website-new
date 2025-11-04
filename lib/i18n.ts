// lib/i18n.ts
export const locales = ["az", "en", "ru"] as const;
export type Locale = (typeof locales)[number];

// Default dil
export const defaultLocale: Locale = "az";

// URL-dəki ilk seqmentin dil olub-olmadığını yoxlayır
export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

// Lüğətləri yükləyən helper
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
