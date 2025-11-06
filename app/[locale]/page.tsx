import Image from "next/image";
import { getDictionary } from "@/lib/i18n";

export default async function HomePage({ params: { locale } }: { params: { locale: "az"|"en"|"ru" } }) {
  const dict = await getDictionary(locale);

  return (
    <main className="bg-[#0d0d0d] text-white">
      {/* NAV */}
      <header className="sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 relative">
              <svg viewBox="0 0 64 64" className="h-full w-full">
                <rect x="2" y="2" width="60" height="60" rx="10" className="fill-transparent" style={{stroke:"#CBA135",strokeWidth:1.5}}/>
                <path d="M16 46 V18 h12 c7 0 12 4 12 10 s-5 10-12 10 h-8" className="fill-none" style={{stroke:"#CBA135",strokeWidth:3,strokeLinecap:"round"}}/>
                <path d="M42 20 v24 h10" className="fill-none" style={{stroke:"#CBA135",strokeWidth:3,strokeLinecap:"round"}}/>
              </svg>
            </div>
            <div className="leading-tight">
              <div className="font-semibold">Prime Legal & Consulting</div>
              <div className="text-xs text-white/60">Baku, Azerbaijan</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#home" className="uppercase tracking-wide text-white/70 hover:text-white">{dict.nav.home}</a>
            <a href="#about" className="uppercase tracking-wide text-white/70 hover:text-white">{dict.nav.about}</a>
            <a href="#services" className="uppercase tracking-wide text-white/70 hover:text-white">{dict.nav.services}</a>
            <a href="#team" className="uppercase tracking-wide text-white/70 hover:text-white">{dict.nav.team}</a>
            <a href="#contact" className="uppercase tracking-wide text-white/70 hover:text-white">{dict.nav.contact}</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative h-[88vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="Prime Legal & Consulting"
            fill
            priority
            className="object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[#c7a249]">
            {dict.hero.title}
          </h1>
          <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto">
            {dict.hero.subtitle}
          </p>
          <a
            href="#services"
            className="mt-8 inline-block px-8 py-3 bg-[#c7a249] text-black font-semibold rounded-lg hover:bg-yellow-500 transition"
          >
            {dict.hero.button}
          </a>
        </div>
      </section>

      {/* HAQQIMIZDA */}
      <section id="about" className="py-16 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#c7a249]">{dict.about.title}</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mt-8">
            <div className="relative h-80 rounded-xl overflow-hidden ring-1 ring-white/10">
              <Image src="/images/legal.jpg" alt="About" fill className="object-cover"/>
            </div>
            <div className="space-y-3 text-white/80">
              <p>{dict.about.text1}</p>
              <p>{dict.about.text2}</p>
              <ul className="list-disc ml-5">
                <li>Strategiya + icra</li>
                <li>Şəffaf qiymət və SLA</li>
                <li>Diskretlik və təhlükəsizlik</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* XİDMƏTLƏR */}
      <section id="services" className="py-16 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#c7a249]">{dict.services.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {[
              {src:"/images/legal.jpg",   ...dict.services.items[0]},
              {src:"/images/finance.jpg", ...dict.services.items[1]},
              {src:"/images/hr.jpg",      ...dict.services.items[2]},
              {src:"/images/event.jpg",   ...dict.services.items[3]},
            ].map((card)=>(
              <div key={card.title} className="bg-[#141414] rounded-xl overflow-hidden ring-1 ring-white/10 hover:scale-[1.02] transition">
                <div className="relative h-56">
                  <Image src={card.src} alt={card.title} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <div className="text-xl font-semibold text-[#c7a249]">{card.title}</div>
                  <p className="mt-2 text-sm text-white/70">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KOMANDA */}
      <section id="team" className="py-16 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#c7a249]">{dict.nav.team}</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {["Founder / Legal Lead", "Finance Advisor", "HR Partner"].map((role, i)=>(
              <div key={i} className="bg-[#141414] rounded-xl p-6 ring-1 ring-white/10">
                <div className="h-40 relative rounded-lg overflow-hidden mb-4">
                  <Image src="/images/hr.jpg" alt="Team" fill className="object-cover"/>
                </div>
                <div className="font-semibold">Mütəxəssis {i+1}</div>
                <div className="text-sm text-white/60">{role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ƏLAQƏ */}
      <section id="contact" className="py-16 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#c7a249]">{dict.contact.title}</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <form
              action="https://formspree.io/f/xbldzxyz" /* öz Formspree ID-ni qoy */
              method="POST"
              className="bg-[#141414] rounded-xl p-6 ring-1 ring-white/10 space-y-4"
            >
              <input name="name" placeholder="Ad, Soyad" className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 outline-none" required />
              <input type="email" name="email" placeholder="E-poçt" className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 outline-none" required />
              <textarea name="message" placeholder="Mesajınız" className="w-full h-28 rounded-lg bg-black/40 border border-white/10 px-4 py-3 outline-none" required />
              <button className="px-6 py-3 bg-[#c7a249] text-black font-semibold rounded-lg hover:bg-yellow-500 transition">{dict.nav.contact}</button>
            </form>
            <div className="bg-[#141414] rounded-xl p-6 ring-1 ring-white/10 space-y-3 text-white/80">
              <div><span className="text-white/60">{dict.contact.email}:</span> info@plconsulting.az</div>
              <div><span className="text-white/60">{dict.contact.address}:</span> Baku, Azerbaijan</div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image src="/images/event.jpg" alt="Office" fill className="object-cover opacity-70" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-white/50 border-t border-white/10">
        © {new Date().getFullYear()} Prime Legal & Consulting
      </footer>
    </main>
  );
}
