export const locales = ["az", "en", "ru"] as const;
export type Locale = (typeof locales)[number];

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
