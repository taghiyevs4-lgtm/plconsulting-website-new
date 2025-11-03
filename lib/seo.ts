// lib/seo.ts
export const SITE_URL = "https://plconsulting.az";

type L = "az" | "en" | "ru";

const META: Record<L, { title: string; desc: string; keywords: string[]; ogLocale: string }> = {
  az: {
    title: "Prime Legal & Consulting — Hüquq və Biznes Konsaltinqi, Bakı",
    desc:
      "Prime Legal & Consulting: hüquq, maliyyə, HR və korporativ tədbirlər üzrə peşəkar xidmətlər. Baku, Azerbaijan.",
    keywords: [
      "hüquq məsləhəti",
      "konsaltinq",
      "bank hüququ",
      "maliyyə konsaltinqi",
      "HR konsaltinq",
      "Bakı",
      "Azerbaijan"
    ],
    ogLocale: "az_AZ",
  },
  en: {
    title: "Prime Legal & Consulting — Legal & Business Advisory, Baku",
    desc:
      "Prime Legal & Consulting delivers legal, financial, HR and corporate event services. Baku, Azerbaijan.",
    keywords: [
      "legal consulting",
      "corporate law",
      "financial advisory",
      "HR consulting",
      "Baku",
      "Azerbaijan"
    ],
    ogLocale: "en_US",
  },
  ru: {
    title: "Prime Legal & Consulting — Юридический и бизнес-консалтинг, Баку",
    desc:
      "Prime Legal & Consulting: юридические, финансовые, HR-услуги и корпоративные мероприятия. Баку, Азербайджан.",
    keywords: [
      "юридический консалтинг",
      "корпоративное право",
      "финансовый консалтинг",
      "HR консалтинг",
      "Баку",
      "Азербайджан"
    ],
    ogLocale: "ru_RU",
  },
};

export function getSEO(locale: L) {
  return META[locale] ?? META.az;
}

export const hreflangs = {
  "az-AZ": `${SITE_URL}/az`,
  "en-US": `${SITE_URL}/en`,
  "ru-RU": `${SITE_URL}/ru`,
};
