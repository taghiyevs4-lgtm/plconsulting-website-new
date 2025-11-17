import Image from "next/image";
import { getDictionary } from "@/lib/i18n";

type PageProps = {
  params: { locale: "az" | "en" | "ru" };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default async function HomePage({ params: { locale }, searchParams }: PageProps) {
  const dict = await getDictionary(locale);

  const rawSection = searchParams?.section;
  const sectionParam = Array.isArray(rawSection) ? rawSection[0] : rawSection;
  const section: "home" | "about" | "services" | "team" | "contact" =
    sectionParam === "about" ||
    sectionParam === "services" ||
    sectionParam === "team" ||
    sectionParam === "contact"
      ? sectionParam
      : "home";

  const hero: any = (dict as any).hero || {};
  const heroShort: string | undefined = typeof hero.short === "string" ? hero.short : undefined;
  const heroCtas: string[] = Array.isArray(hero.ctas)
    ? hero.ctas
    : typeof hero.button === "string"
    ? [hero.button]
    : [];

  return (
    <main className="bg-[#0d0d0d] text-white min-h-screen">
      <Header locale={locale} dict={dict} section={section} />

      {section === "home" && (
        <HeroSection hero={hero} heroShort={heroShort} heroCtas={heroCtas} />
      )}

      {section === "about" && <AboutSection dict={dict} />}

      {section === "services" && <ServicesSection dict={dict} />}

      {section === "team" && <TeamSection dict={dict} />}

      {section === "contact" && <ContactSection dict={dict} />}

      <footer className="py-8 text-center text-white/50 border-t border-white/10 mt-12">
        © {new Date().getFullYear()} Prime Legal & Consulting
      </footer>
    </main>
  );
}

/* ---------------- HEADER ---------------- */

function Header({
  locale,
  dict,
  section,
}: {
  locale: "az" | "en" | "ru";
  dict: any;
  section: "home" | "about" | "services" | "team" | "contact";
}) {
  const navItems: { id: typeof section; label: string }[] = [
    { id: "home", label: dict.nav.home },
    { id: "about", label: dict.nav.about },
    { id: "services", label: dict.nav.services },
    { id: "team", label: dict.nav.team },
    { id: "contact", label: dict.nav.contact },
  ];

  const linkFor = (localeCode: string, targetSection: typeof section) => {
    const base = `/${localeCode}`;
    if (targetSection === "home") return base;
    return `${base}?section=${targetSection}`;
  };

  return (
    <header className="sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 relative">
            <svg viewBox="0 0 64 64" className="h-full w-full">
              <rect
                x="2"
                y="2"
                width="60"
                height="60"
                rx="10"
                className="fill-transparent"
                style={{ stroke: "#CBA135", strokeWidth: 1.5 }}
              />
              <path
                d="M16 46 V18 h12 c7 0 12 4 12 10 s-5 10-12 10 h-8"
                className="fill-none"
                style={{ stroke: "#CBA135", strokeWidth: 3, strokeLinecap: "round" }}
              />
              <path
                d="M42 20 v24 h10"
                className="fill-none"
                style={{ stroke: "#CBA135", strokeWidth: 3, strokeLinecap: "round" }}
              />
            </svg>
          </div>
          <div className="leading-tight">
            <div className="font-semibold">Prime Legal & Consulting</div>
            <div className="text-xs text-white/60">Baku, Azerbaijan</div>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={linkFor(locale, item.id)}
                className={
                  "uppercase tracking-wide " +
                  (section === item.id
                    ? "text-[#c7a249] font-semibold"
                    : "text-white/70 hover:text-white")
                }
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Dil dəyişdirici */}
          <div className="flex items-center gap-2">
            {["az", "en", "ru"].map((code) => (
              <a
                key={code}
                href={linkFor(code, section)}
                className={
                  "px-2 py-1 text-xs rounded border " +
                  (locale === code
                    ? "border-[#c7a249] text-[#c7a249]"
                    : "border-white/15 text-white/70 hover:text-white hover:border-white/30")
                }
              >
                {code.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

/* ---------------- SECTIONS ---------------- */

function HeroSection({
  hero,
  heroShort,
  heroCtas,
}: {
  hero: any;
  heroShort?: string;
  heroCtas: string[];
}) {
  return (
    <section className="relative h-[88vh] flex items-center justify-center" id="home">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Prime Legal & Consulting"
          fill
          priority
          className="object-cover opacity-50"
        />
      </div>
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[#c7a249]">
          {hero.title}
        </h1>
        <p className="text-lg md:text-2xl text-white/90">{hero.subtitle}</p>
        {heroShort && <p className="mt-6 text-white/80">{heroShort}</p>}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {heroCtas.map((c, i) => (
            <a
              key={i}
              href="/az?section=contact"
              className="px-6 py-3 bg-[#c7a249] text-black font-semibold rounded-lg hover:bg-yellow-500 transition"
            >
              {c}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection({ dict }: { dict: any }) {
  const about: any = dict.about || {};
  return (
    <section className="py-16" id="about">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#c7a249]">
          {about.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-start mt-8">
          <div className="space-y-4 text-white/80">
            {about.premiumIntro1 && <p>{about.premiumIntro1}</p>}
            {about.premiumIntro2 && <p>{about.premiumIntro2}</p>}
            {about.premiumIntro3 && <p>{about.premiumIntro3}</p>}
            {Array.isArray(about.bullets) && (
              <ul className="list-disc ml-5 mt-4">
                {about.bullets.map((b: string) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="relative h-80 rounded-xl overflow-hidden ring-1 ring-white/10">
            <Image src="/images/legal.jpg" alt="About" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection({ dict }: { dict: any }) {
  const services: any = dict.services || {};
  const details: any[] = Array.isArray(services.details) ? services.details : [];

  return (
    <section className="py-16" id="services">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#c7a249]">
          {services.title}
        </h2>

        {details.length > 0 ? (
          <div className="mt-10 space-y-12">
            {details.map((s) => (
              <div key={s.title} className="grid md:grid-cols-2 gap-8 items-start">
                <div className="space-y-3">
                  <div className="text-2xl font-semibold text-[#c7a249]">
                    {s.icon} {s.title}
                  </div>
                  {s.intro && <p className="text-white/80">{s.intro}</p>}
                  {Array.isArray(s.points) && (
                    <ul className="list-disc ml-5 text-white/80">
                      {s.points.map((p: string) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  )}
                  {s.closing && (
                    <p className="text-white/80 mt-2">{s.closing}</p>
                  )}
                </div>
                <div className="relative h-64 rounded-xl overflow-hidden ring-1 ring-white/10">
                  <Image
                    src={s.image ?? "/images/hero.jpg"}
                    alt={s.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {services.items?.map((card: any) => (
              <div
                key={card.title}
                className="bg-[#141414] rounded-xl overflow-hidden ring-1 ring-white/10 hover:scale-[1.02] transition"
              >
                <div className="relative h-56">
                  <Image
                    src={`/images/${
                      card.title === "Hüquq"
                        ? "legal"
                        : card.title === "Maliyyə"
                        ? "finance"
                        : card.title === "HR"
                        ? "hr"
                        : "event"
                    }.jpg`}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="text-xl font-semibold text-[#c7a249]">
                    {card.title}
                  </div>
                  <p className="mt-2 text-sm text-white/70">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function TeamSection({ dict }: { dict: any }) {
  return (
    <section className="py-16" id="team">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#c7a249]">
          {dict.nav.team}
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {["Founder / Legal Lead", "Finance Advisor", "HR Partner"].map(
            (role, i) => (
              <div
                key={i}
                className="bg-[#141414] rounded-xl p-6 ring-1 ring-white/10"
              >
                <div className="h-40 relative rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/images/hr.jpg"
                    alt="Team"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="font-semibold">Mütəxəssis {i + 1}</div>
                <div className="text-sm text-white/60">{role}</div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

function ContactSection({ dict }: { dict: any }) {
  const contact: any = dict.contact || {};
  return (
    <section className="py-16" id="contact">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#c7a249]">
          {contact.title}
        </h2>
        {contact.cta && (
          <p className="text-white/80 mt-3">{contact.cta}</p>
        )}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <form
            action="https://formspree.io/f/xbldzxyz"
            method="POST"
            className="bg-[#141414] rounded-xl p-6 ring-1 ring-white/10 space-y-4"
          >
            <input
              name="name"
              placeholder="Ad, Soyad"
              className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="E-poçt"
              className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Mesajınız"
              className="w-full h-28 rounded-lg bg-black/40 border border-white/10 px-4 py-3 outline-none"
              required
            />
            <button className="px-6 py-3 bg-[#c7a249] text-black font-semibold rounded-lg hover:bg-yellow-500 transition">
              {dict.nav.contact}
            </button>
          </form>
          <div className="bg-[#141414] rounded-xl p-6 ring-1 ring-white/10 space-y-3 text-white/80">
            <div>
              <span className="text-white/60">{contact.email}:</span>{" "}
              info@plconsulting.az
            </div>
            <div>
              <span className="text-white/60">{contact.address}:</span>{" "}
              Baku, Azerbaijan
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="/images/event.jpg"
                alt="Office"
                fill
                className="object-cover opacity-70"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
