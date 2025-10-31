// @ts-nocheck
'use client';
import React, { useState } from "react";

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

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "team", label: "Team" },
  { id: "contact", label: "Contact" },
];

export default function Page() {
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
              <div className="text-xs text-white/60">Trusted Partner in Legal & Business Growth</div>
            </div>
          </div>
          <nav className="hidden gap-6 md:flex">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => setPage(link.id)}
                className={`text-sm uppercase tracking-wide transition hover:text-white ${page === link.id ? "text-[#CBA135]" : "text-white/70"}`}
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="md:hidden">
            <select
              value={page}
              onChange={(e) => setPage(e.target.value)}
              className="rounded-md border border-white/10 bg-black/60 px-3 py-2 text-sm"
            >
              {NAV_LINKS.map((l) => (
                <option key={l.id} value={l.id}>
                  {l.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </header>

      {/* Page Body */}
      <main>
        {page === "home" && <Home onGetInTouch={() => setPage("contact")} />}
        {page === "about" && <About />}
        {page === "services" && <Services />}
        {page === "team" && <Team />}
        {page === "contact" && <Contact />}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/70">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-3 flex items-center gap-3">
              <LogoMark className="h-7 w-7" />
              <span className="text-sm font-semibold tracking-wide">Prime Legal & Consulting</span>
            </div>
            <p className="max-w-md text-sm text-white/70">
              Based in Baku. We provide legal, financial, HR and corporate advisory services to help businesses achieve
              compliance, stability and sustainable growth.
            </p>
          </div>
          <div>
            <div className="mb-2 text-sm font-semibold text-[#CBA135]">Quick Links</div>
            <ul className="space-y-1 text-sm text-white/70">
              {NAV_LINKS.map((l) => (
                <li key={`f-${l.id}`}>
                  <button onClick={() => setPage(l.id)} className="transition hover:text-white">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mb-2 text-sm font-semibold text-[#CBA135]">Contact</div>
            <ul className="space-y-1 text-sm text-white/70">
              <li>Email: info@plconsulting.az</li>
              <li>Location: Baku, Azerbaijan</li>
              <li>LinkedIn / Instagram: @plconsulting</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">© {new Date().getFullYear()} Prime Legal & Consulting — All Rights Reserved.</div>
      </footer>
    </div>
  );
}

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

function Home({ onGetInTouch }) {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#151515] to-[#0c0c0c]" />
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-20 md:grid-cols-2">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[#CBA135]">Prime Legal & Consulting</div>
            <h1 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">
              Trusted Partner in <span className="text-[#CBA135]">Legal</span> & Business Growth
            </h1>
            <p className="mt-4 max-w-xl text-white/70">
              We help organizations navigate law, finance, HR and corporate operations with clarity and confidence —
              combining rigorous expertise with modern execution.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={onGetInTouch} className="rounded-2xl border border-[#CBA135] px-5 py-3 text-sm font-semibold tracking-wide text-[#CBA135] transition hover:bg-[#CBA135] hover:text-black">
                Get in touch
              </button>
              <a href="#services" onClick={(e)=>{e.preventDefault();}}
                 className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold tracking-wide text-white/80 transition hover:border-white/30 hover:text-white">
                Our Services
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl border border-[#CBA135]/30" />
            <div className="relative rounded-3xl bg-[#0f0f0f] p-8 shadow-2xl ring-1 ring-white/10">
              <div className="mb-4 flex items-center gap-3">
                <LogoMark className="h-10 w-10" />
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
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {[
            { t: "Partner-Led", s: "Senior experts on every engagement" },
            { t: "Integrated", s: "Law, finance, HR & corporate under one roof" },
            { t: "Outcome-Focused", s: "Clear deliverables, measurable value" },
          ].map((f) => (
            <div key={f.t} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-semibold text-[#CBA135]">{f.t}</div>
              <div className="mt-2 text-white/80">{f.s}</div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

function About() {
  return (
    <div>
      <Section eyebrow="About" title="About Prime Legal & Consulting" subtitle="We align rigorous legal thinking with modern consulting execution to help clients grow with confidence.">
        <div className="prose prose-invert max-w-3xl">
          <p>
            Prime Legal & Consulting is a Baku-based advisory firm delivering integrated legal, financial, HR and corporate
            solutions. Our mission is to provide clients with reliable, transparent and practical support that enables
            sustainable growth. Our vision is to be the first-choice consulting partner that creates real impact in every
            client engagement.
          </p>
          <h3>Values</h3>
          <ul>
            <li><strong>Reliability:</strong> transparent and well-grounded decisions.</li>
            <li><strong>Professionalism:</strong> experience-driven, pragmatic advice.</li>
            <li><strong>Client Focus:</strong> solutions tailored to real needs.</li>
            <li><strong>Innovation:</strong> agile and modern delivery.</li>
            <li><strong>Partnership:</strong> we work as your trusted ally.</li>
          </ul>
        </div>
      </Section>
    </div>
  );
}

function ServiceCard({ title, points }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-0.5 hover:bg-white/10">
      <div className="text-lg font-semibold text-white">{title}</div>
      <ul className="mt-3 space-y-2 text-sm text-white/70">
        {points.map((p) => (
          <li key={p}>• {p}</li>
        ))}
      </ul>
      <div className="mt-5 text-right">
        <button className="rounded-xl border border-[#CBA135] px-4 py-2 text-xs font-semibold tracking-wide text-[#CBA135] transition hover:bg-[#CBA135] hover:text-black">
          Request proposal
        </button>
      </div>
    </div>
  );
}

function Services() {
  return (
    <div>
      <Section eyebrow="Services" title="Integrated Legal & Business Advisory" subtitle="Four practice areas delivering end-to-end value.">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <ServiceCard
            title="Legal Advisory"
            points={[
              "Corporate & Contracts",
              "Compliance & Regulatory",
              "Employment & Policies",
              "Disputes & Arbitration support",
            ]}
          />
          <ServiceCard
            title="Financial & Tax"
            points={[
              "Tax Planning & Audit",
              "Budgeting & Reporting",
              "Structuring & Controls",
              "Transaction support",
            ]}
          />
          <ServiceCard
            title="HR Consulting"
            points={[
              "Recruitment & Assessment",
              "Policies & Handbooks",
              "Performance & Rewards",
              "Training programs",
            ]}
          />
          <ServiceCard
            title="Corporate Events"
            points={[
              "Trainings & Workshops",
              "Seminars & Conferences",
              "PR & Brand support",
              "Turn-key event management",
            ]}
          />
        </div>
      </Section>

      <Section eyebrow="Engagement" title="How we work" subtitle="Clear stages, transparent pricing, measurable outcomes.">
        <ol className="grid list-decimal grid-cols-1 gap-4 pl-6 text-white/80 md:grid-cols-3">
          {[
            { t: "Discovery", s: "Understand your goals, assess context" },
            { t: "Proposal", s: "Scope, timeline, fees & deliverables" },
            { t: "Delivery", s: "Partner-led execution and handover" },
          ].map((s, i) => (
            <li key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm font-semibold text-[#CBA135]">{s.t}</div>
              <div className="mt-1 text-sm text-white/70">{s.s}</div>
            </li>
          ))}
        </ol>
      </Section>
    </div>
  );
}

function Team() {
  return (
    <div>
      <Section eyebrow="Team" title="Leadership" subtitle="Senior experts with banking, corporate and regulatory background.">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { n: "Founder / Managing Partner", b: "Strategy, Legal, Compliance", k: "Former Head of Legal (Banking)" },
            { n: "Partner — Finance", b: "Tax, Audit, Financial Control", k: "Ex-Big4 / Corporate Finance" },
            { n: "Partner — HR", b: "Policies, Talent, Performance", k: "HR Ops & Change Mgmt" },
          ].map((m) => (
            <div key={m.n} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="h-14 w-14 rounded-xl bg-white/5 ring-1 ring-white/10" />
              <div className="mt-4 text-base font-semibold text-white">{m.n}</div>
              <div className="text-sm text-[#CBA135]">{m.b}</div>
              <div className="mt-2 text-sm text-white/70">{m.k}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Advisory Board" title="Advisors" subtitle="We collaborate with sector specialists for complex mandates.">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {["Banking Regulation", "Litigation & Arbitration", "Corporate Communications"].map((s) => (
            <div key={s} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80">
              <div className="text-sm font-semibold text-[#CBA135]">{s}</div>
              <p className="mt-2 text-sm text-white/70">Available on engagement basis.</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <Section eyebrow="Contact" title="Get in touch" subtitle="Tell us about your needs. We'll respond within one business day.">
        <form className="mx-auto max-w-2xl space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="text-xs text-white/70">Full Name</label>
              <input className="mt-1 w-full rounded-xl border border-white/15 bg-black/50 px-3 py-2 text-sm outline-none ring-0 placeholder:text-white/40 focus:border-[#CBA135]" placeholder="Your name" />
            </div>
            <div>
              <label className="text-xs text-white/70">Company</label>
              <input className="mt-1 w-full rounded-xl border border-white/15 bg-black/50 px-3 py-2 text-sm outline-none ring-0 placeholder:text-white/40 focus:border-[#CBA135]" placeholder="Company name" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="text-xs text-white/70">Email</label>
              <input type="email" className="mt-1 w-full rounded-xl border border-white/15 bg-black/50 px-3 py-2 text-sm outline-none ring-0 placeholder:text-white/40 focus:border-[#CBA135]" placeholder="name@company.com" />
            </div>
            <div>
              <label className="text-xs text-white/70">Phone</label>
              <input className="mt-1 w-full rounded-xl border border-white/15 bg-black/50 px-3 py-2 text-sm outline-none ring-0 placeholder:text-white/40 focus:border-[#CBA135]" placeholder="+994 …" />
            </div>
          </div>
          <div>
            <label className="text-xs text-white/70">How can we help?</label>
            <textarea rows={5} className="mt-1 w-full rounded-xl border border-white/15 bg-black/50 px-3 py-2 text-sm outline-none ring-0 placeholder:text-white/40 focus:border-[#CBA135]" placeholder="Briefly describe your request" />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xs text-white/50">By submitting, you agree to our privacy policy.</p>
            <button type="button" className="rounded-2xl border border-[#CBA135] px-6 py-2.5 text-sm font-semibold tracking-wide text-[#CBA135] transition hover:bg-[#CBA135] hover:text-black">
              Send request
            </button>
          </div>
        </form>
      </Section>

      <Section>
        <div className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div>
              <div className="text-sm font-semibold text-[#CBA135]">Email</div>
              <div className="text-sm text-white/70">info@plconsulting.az</div>
            </div>
            <div>
              <div className="text-sm font-semibold text-[#CBA135]">Office</div>
              <div className="text-sm text-white/70">Baku, Azerbaijan</div>
            </div>
            <div>
              <div className="text-sm font-semibold text-[#CBA135]">Social</div>
              <div className="text-sm text-white/70">LinkedIn · Instagram @plconsulting</div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
