// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale, isLocale } from "./lib/i18n";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Statik fayllar və ya API üçün toxunmuruq
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return;
  }

  // Artıq /az, /en, /ru ilə başlayırsa, keç
  const first = pathname.split("/")[1];
  if (isLocale(first)) return;

  // Əks halda default dilə yönləndir
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}

// Bu yollar üçün middleware işləsin
export const config = {
  matcher: ["/((?!_next|.*\\..*|api).*)"],
};
