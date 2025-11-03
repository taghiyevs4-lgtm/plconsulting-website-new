// app/[locale]/layout.tsx
import "../globals.css";
import type { ReactNode } from "react";
import { getSEO, SITE_URL, hreflangs } from "@/lib/seo";

export async function generateStaticParams() {
  return [{ locale: "az" }, { locale: "en" }, { locale: "ru" }];
}
export const dynamicParams = false;

export function generateMetadata({ params }: { params: { locale: "az" | "en" | "ru" } }) {
  const seo = getSEO(params.locale);
  const localePath = `/${params.locale}`;

  return {
    title: { default: seo.title, template: "%s | Prime Legal & Consulting" },
    description: seo.desc,
    keywords: seo.keywords,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: `${SITE_URL}${localePath}`,
      languages: hreflangs,
    },
    openGraph: {
      title: seo.title,
      description: seo.desc,
      url: `${SITE_URL}${localePath}`,
      siteName: "Prime Legal & Consulting",
      type: "website",
      locale: seo.ogLocale,
      images: ["/opengraph-image.png"], // faylı aşağıda əlavə edəcəksən
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.desc,
      images: ["/opengraph-image.png"],
    },
    icons: {
      icon: "/icon.png", // favicon
    },
  };
}

export default function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: "az" | "en" | "ru" };
}) {
  const locale = params.locale ?? "az";

  // JSON-LD (Organization)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Prime Legal & Consulting",
    url: SITE_URL,
    logo: `${SITE_URL}/opengraph-image.png`,
    email: "info@plconsulting.az",
    address: { "@type": "PostalAddress", addressLocality: "Baku", addressCountry: "AZ" },
    sameAs: [
      "https://www.linkedin.com/company/plconsulting", // əsl linklərinlə əvəz et
      "https://www.instagram.com/plconsulting"
    ],
  };

  return (
    <html lang={locale}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
