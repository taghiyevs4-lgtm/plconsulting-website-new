// app/[locale]/page.tsx
// @ts-nocheck
"use client";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { locales, Locale, isLocale } from "@/lib/i18n";
import az from "@/dictionaries/az";
import en from "@/dictionaries/en";
import ru from "@/dictionaries/ru";

function getDict(loc: Locale) {
  return loc === "az" ? az : loc === "ru" ? ru : en;
}

function LogoMark({ className = "h-8 w-8" }) {
  return (
    <div className={`relative ${className}`} aria-label="PL monogram">
      <svg viewBox="0 0 64 64" className="h-full w-full">
        <rect x="2" y="2" width="60" height="60" rx="10" className="fill-transparent" style={{ stroke: "#CBA135", strokeWidth: 1.5 }} />
        <path d="M16 46 V18 h12 c7 0 12 4 12 10 s-5 10-12 10 h-8" className="fill-none" style={{ stroke: "#CBA135", strokeWidth: 3, strokeLinecap: "round" }} />
        <path d="M42 20 v24 h10" className="fill-none" style={{ stroke: "#CBA135", strokeWidth: 3, strokeLinecap: "round" }} />
      </svg>
    </div>
  );
}

// Sadə dil dəyişdirici
function LanguageSwitcher({ locale }: { locale: Locale }) {
  const router = useRouter();
  const pathname = usePathname(); // /az, /en, /ru ilə başlayır
  const rest = pathname?.split("/").slice(2).join("/") || "";
  function goTo(l: Locale) {
    router.push(`/${l}/${rest}`);
  }
  return (
    <div className="flex items-center gap-2 text-xs">
      {locales.map((l) => (
        <button
          key={l}
          onClick={() => goTo(l)}
          className={`rounded-md px-2 py-1 uppercase tracking-wide ${l === locale ? "border border-[#CBA135] text-[#CBA135]" : "text-white/70 hover:text-white"}`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

const NAV_LINKS = (t: any) => [
  { id: "home", label: t.nav.home },
  { id: "about", label: t.nav.about },
  { id: "services", label: t.nav.services },
  { id: "team", label: t.nav.team },
  { id: "contact", label: t.nav.contact },
];

export default function Page({ params }: { params: { locale: string } }) {
  const loc = isLocale(params.locale) ? (params.locale as Locale) : "az";
  const t = getDict(loc);
  const [page, setPage] = useState("home");

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <LogoMark />
            <div className="leading-tight">
              <div className="text-lg font-semibold tracking-wide">Prime Legal & Consulting</div>
              <div className="text-xs text-white/60">{t.tagline}</div>
            </div>
          </div>

          {/* Dil seçimi */}
          <div className="hidden md:block">
            <LanguageSwitcher locale={loc} />
          </div>
        </div>

        {/* Nav ikinci cərgə (istəsən tək cərgəyə də sala bilərik) */}
        <div className="mx-auto hidden max-w-7xl items-center justify-between px-4 py-2 md:flex">
          <nav className="flex gap-6">
            {NAV_LINKS(t).map((link) => (
              <button
                key={link.id}
                onClick={() => setPage(link.id)}
                className={`text-sm uppercase tracking-wide transition hover:text-white ${
                  page === link.id ? "text-[#CBA135]" : "text-white/70"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile nav + dil */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 md:hidden">
        <select
          value={page}
          onChange={(e) => setPage(e.target.value)}
          className="rounded-md border border-white/10 bg-black/60 px-3 py-2 text-sm"
        >
          {NAV_LINKS(t).map((l) => (
            <option key={l.id} value={l.id}>{l.label}</option>
          ))}
        </select>
        <LanguageSwitcher locale={loc} />
      </div>

      <main>
        {page === "home" && <Home t={t} onGetInTouch={() => setPage("contact")} />}
        {page === "about" && <About t={t} />}
        {page === "services" && <Services t={t} />}
        {page === "team" && <Team t={t} />}
        {page === "contact" && <Contact t={t} />}
      </main>

      <footer className="border-t border-white/10 bg-black/70">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-3 flex items-center gap-3">
              <LogoMark className="h-7 w-7" />
              <span className="text-sm font-semibold tracking-wide">Prime Legal & Consulting</span>
            </div>
            <p className="max-w-md text-sm text-white/70">
              Baku • Legal, Financial, HR & Corporate advisory
            </p>
          </div>
          <div>
            <div className="mb-2 text-sm font-semibold text-[#CBA135]">{t.footer.quickLinks}</div>
            <ul className="space-y-1 text-sm text-white/70">
              {NAV_LINKS(t).map((l) => (
                <li key={`f-${l.id}`}>
                  <button onClick={() => setPage(l.id)} className="transition hover:text-white">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mb-2 text-sm font-semibold text-[#CBA135]">{t.footer.contact}</div>
            <ul className="space-y-1 text-sm text-white/70">
              <li>Email: info@plconsulting.az</li>
              <li>Location: Baku, Azerbaijan</li>
              <li>LinkedIn / Instagram: @plconsulting</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Prime Legal & Consulting — All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

/* ====== Bölmələr: sadəcə nümunə (mətnlər t-dən gəlir) ====== */
function Section({ eyebrow, title, subtitle, children }) {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="mb-8">
          {eyebrow && <div className="text-xs uppercase tracking-[0.2em] text-[#CBA135]">{eyebrow}</div>}
          {title && <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-2 max-w-2xl text-white/70">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

function Home({ t, onGetInTouch }) {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#151515] to-[#0c0c0c]" />
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-20 md:grid-cols-2">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[#CBA135]">Prime Legal & Consulting</div>
            <h1 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">
              {t.tagline}
            </h1>
            <p className="mt-4 max-w-xl text-white/70">
              We help organizations navigate law, finance, HR and corporate operations with clarity and confidence —
              combining rigorous expertise with modern execution.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={onGetInTouch} className="rounded-2xl border border-[#CBA135] px-5 py-3 text-sm font-semibold tracking-wide text-[#CBA135] transition hover:bg-[#CBA135] hover:text-black">
                {t.cta.getInTouch}
              </button>
              <a href="#services" onClick={(e)=>{e.preventDefault();}}
                 className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold tracking-wide text-white/80 transition hover:border-white/30 hover:text-white">
                {t.cta.ourServices}
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl border border-[#CBA135]/30" />
            <div className="relative rounded-3xl bg-[#0f0f0f] p-8 shadow-2xl ring-1 ring-white/10">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-10 w-10">
                  {/* LogoMark */}
                  <svg viewBox="0 0 64 64" className="h-full w-full">
                    <rect x="2" y="2" width="60" height="60" rx="10" className="fill-transparent" style={{ stroke: "#CBA135", strokeWidth: 1.5 }} />
                    <path d="M16 46 V18 h12 c7 0 12 4 12 10 s-5 10-12 10 h-8" className="fill-none" style={{ stroke: "#CBA135", strokeWidth: 3, strokeLinecap: "round" }} />
                    <path d="M42 20 v24 h10" className="fill-none" style={{ stroke: "#CBA135", strokeWidth: 3, strokeLinecap: "round" }} />
                  </svg>
                </div>
                <div>
                  <div className="text-lg font-semibold">Prime Legal & Consulting</div>
                  <div className="text-xs text-white/60">Baku, Azerbaijan</div>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-white/70">
                <li>• Legal Advisory (Corporate, Contracts, Compliance, Dispute Support)</li>
                <li>• Financial & Tax (Planning, Audit, Reporting, Structuring)</li>
                <li>• HR Consulting (Policies, Hiring, Performance & Rewards)</li>
                <li>• Corporate Events (Trainings, Seminars, PR Support)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="Why Prime" title="Strength. Trust. Distinction." subtitle="A boutique, partner-led approach combining legal depth with business pragmatism.">
        {/* … qalan bölmələr eyni qalır; lazım mətnləri sonra lüğətə daşıyacağıq */}
      </Section>
    </div>
  );
}

function About() { return <Section title="About" subtitle="...">...</Section>; }
function Services() { return <Section title="Services" subtitle="...">...</Section>; }
function Team() { return <Section title="Team" subtitle="...">...</Section>; }
function Contact() { return <Section title="Contact" subtitle="...">...</Section>; }
