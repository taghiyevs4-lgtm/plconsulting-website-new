// app/[locale]/layout.tsx
import "../globals.css";
import type { ReactNode } from "react";
import { isLocale, Locale } from "@/lib/i18n";

export async function generateStaticParams() {
  return [{ locale: "az" }, { locale: "en" }, { locale: "ru" }];
}

export const dynamicParams = false;

export default function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const locale = isLocale(params.locale) ? (params.locale as Locale) : "az";
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
