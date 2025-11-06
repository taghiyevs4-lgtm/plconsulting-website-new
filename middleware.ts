// middleware.ts — self-contained (heç nədən import etmir)
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Dil siyahısı və köməkçi funksiyalar
const locales = ["az", "en", "ru"] as const;
type Locale = (typeof locales)[number];
const defaultLocale: Locale = "az";
function isLocale(value?: string): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Statik faylları və API-ni burax
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return;
  }

  // Əgər yol artıq /az, /en, /ru ilə başlayırsa — keç
  const first = pathname.split("/")[1];
  if (isLocale(first)) return;

  // Əks halda default dilə yönləndir (məs: / → /az)
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|.*\\..*|api).*)"],
};
