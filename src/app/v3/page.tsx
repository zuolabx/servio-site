import React from "react";
import Navbar from "@/components/nav";
import Link from "next/link";
import ProductMockup from "@/components/product-mockup";
import HeroTabs from "@/components/hero-tabs";
import Reveal from "@/components/reveal";
import { icons } from "@/components/feature-icons";

const features = [
  { key: "orders", title: "Order Management", desc: "Take dine-in, takeaway and delivery orders from one screen." },
  { key: "kitchen", title: "Kitchen Operations", desc: "Orders sync straight to the kitchen — no shouting across the counter." },
  { key: "table", title: "Table Management", desc: "See every table's status at a glance and turn tables faster." },
  { key: "menu", title: "Menu Management", desc: "Update prices and items in seconds, everywhere at once." },
  { key: "inventory", title: "Inventory Tracking", desc: "Know what's running low before you run out." },
  { key: "billing", title: "Billing & Invoicing", desc: "GST-ready bills and invoices, generated automatically." },
  { key: "payment", title: "Payment Collection", desc: "Accept cash, cards and UPI without extra hardware." },
  { key: "staff", title: "Staff Roles & Access", desc: "Give each team member exactly the access they need." },
  { key: "analytics", title: "Sales Analytics", desc: "Track sales, best-sellers and peak hours in real time." },
  { key: "mobile", title: "Owner Mobile Dashboard", desc: "Check on your café from anywhere, any time." },
];

const valueProps = [
  { title: "Built for cafés", desc: "Designed around café-speed service, not generic enterprise workflows." },
  { title: "One system", desc: "Orders, kitchen, inventory, billing and staff — together, not stitched." },
  { title: "Live in days", desc: "Menu migration and setup handled for you before launch." },
  { title: "Real support", desc: "A person you can call, not a ticket queue." },
];

const steps = [
  { n: "1", title: "Book a demo", desc: "30 minutes, no commitment." },
  { n: "2", title: "We migrate your data", desc: "Menu, pricing and inventory moved over for you." },
  { n: "3", title: "Team onboarding", desc: "Your staff trained in a single session." },
  { n: "4", title: "Go live", desc: "Start running your café on Servio." },
];

export default function ServioLandingV3() {
  return (
    <div
      className="min-h-screen bg-[#f8f6f2] text-[#171717] antialiased"
      style={{ ["--accent" as string]: "#C1622D" } as React.CSSProperties}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&display=swap');
        .instrument { font-family: "Instrument Serif", serif; }
        .inter { font-family: "Inter", sans-serif; }
      `}</style>

      <main className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-10 md:px-12">
        <Navbar />

        {/* HERO — dark full-bleed panel, ADKO-style weight */}
        <Reveal>
          <section className="relative overflow-hidden rounded-3xl bg-neutral-950 px-6 py-14 text-white md:px-14 md:py-20">
            <div
              className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full blur-3xl"
              style={{ background: "var(--accent)", opacity: 0.25 }}
            />
            <div className="relative grid items-start gap-14 md:grid-cols-2">
              <div className="space-y-8">
                <p className="inter text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
                  Café operating system
                </p>
                <h1 className="instrument max-w-xl text-5xl leading-[0.97] tracking-tight md:text-6xl">
                  Built by people who love{" "}
                  <span style={{ color: "var(--accent)" }}>cafés</span>, for
                  people who run them.
                </h1>
                <p className="inter max-w-md text-lg leading-8 text-neutral-400">
                  Minimalist software built for modern cafés — orders,
                  kitchen, inventory and billing, in one place.
                </p>
                <div className="flex flex-col items-start gap-3 pt-2">
                  <Link
                    href="https://cal.com/zuolabs/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inter inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium text-white transition hover:opacity-90"
                    style={{ background: "var(--accent)" }}
                  >
                    Book a Demo
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </Link>
                  <p className="inter text-sm text-neutral-500">Free 30-min call. No commitments.</p>
                </div>
              </div>

              {/* Tab switcher — click to swap the mockup, Petpooja pattern */}
              <HeroTabs />
            </div>
          </section>
        </Reveal>

        {/* Momentum bar */}
        <Reveal delay={100}>
          <section className="mt-10 grid grid-cols-1 gap-6 rounded-2xl border border-neutral-300 bg-white px-8 py-8 sm:grid-cols-3">
            <div>
              <p className="instrument text-4xl" style={{ color: "var(--accent)" }}>2026</p>
              <p className="inter mt-1 text-sm text-neutral-500">Launching this year</p>
            </div>
            <div>
              <p className="instrument text-4xl" style={{ color: "var(--accent)" }}>10+</p>
              <p className="inter mt-1 text-sm text-neutral-500">Core modules, one platform</p>
            </div>
            <div>
              <p className="instrument text-4xl" style={{ color: "var(--accent)" }}>Cafés</p>
              <p className="inter mt-1 text-sm text-neutral-500">Built for cafés, not chains</p>
            </div>
          </section>
        </Reveal>

        {/* Vision */}
        <Reveal delay={100}>
          <section className="mt-24 grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="instrument text-4xl">One operating system.</h2>
            </div>
            <div className="space-y-5 inter text-neutral-600 leading-7">
              <p>Servio is a modern operating system designed for restaurants, cafés and specialty coffee shops.</p>
              <p>Instead of stitching together multiple tools, everything lives in one place.</p>
            </div>
          </section>
        </Reveal>

        {/* Feature grid — accent icon circles, hover lift */}
        <section className="mt-20 border-t border-neutral-300 pt-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.key} delay={(i % 3) * 80}>
                <div className="h-full rounded-2xl border border-neutral-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full text-white"
                    style={{ background: "var(--accent)" }}
                  >
                    {icons[f.key]}
                  </div>
                  <h3 className="inter mt-4 font-medium text-neutral-900">{f.title}</h3>
                  <p className="inter mt-1.5 text-sm leading-6 text-neutral-500">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Flagship rows */}
        <section className="mt-24 space-y-20">
          <Reveal>
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <p className="inter text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--accent)" }}>
                  Front of house
                </p>
                <h3 className="instrument mt-3 text-3xl text-neutral-900">Orders and tables, in sync.</h3>
                <p className="inter mt-4 max-w-md leading-7 text-neutral-600">
                  Every order — dine-in, takeaway or delivery — lands in one
                  queue. Table status updates the moment a bill is settled.
                </p>
              </div>
              <div className="flex justify-center">
                <ProductMockup variant="kitchen" />
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div className="order-2 md:order-1 flex justify-center">
                <ProductMockup variant="inventory" />
              </div>
              <div className="order-1 md:order-2">
                <p className="inter text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--accent)" }}>
                  Back of house
                </p>
                <h3 className="instrument mt-3 text-3xl text-neutral-900">Inventory that watches itself.</h3>
                <p className="inter mt-4 max-w-md leading-7 text-neutral-600">
                  Stock levels update as orders go out, so you know what&apos;s
                  running low before it becomes tomorrow&apos;s problem.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Why cafés choose Servio */}
        <Reveal>
          <section className="mt-24 border-t border-neutral-300 pt-14">
            <h2 className="instrument text-4xl text-neutral-900">Why cafés choose Servio.</h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {valueProps.map((v, i) => (
                <div key={v.title}>
                  <span
                    className="instrument text-2xl"
                    style={{ color: "var(--accent)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="inter mt-2 font-medium text-neutral-900">{v.title}</h4>
                  <p className="inter mt-1.5 text-sm leading-6 text-neutral-500">{v.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* How it works */}
        <Reveal>
          <section className="mt-24 border-t border-neutral-300 pt-14">
            <h2 className="instrument text-4xl text-neutral-900">How it works.</h2>
            <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s) => (
                <div key={s.n}>
                  <span className="instrument text-2xl text-neutral-300">{s.n}</span>
                  <h4 className="inter mt-2 font-medium text-neutral-900">{s.title}</h4>
                  <p className="inter mt-1.5 text-sm leading-6 text-neutral-500">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* Closing CTA band */}
        <Reveal>
          <section className="mt-24 rounded-2xl bg-neutral-950 px-8 py-12 text-white md:px-14">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <h2 className="instrument text-4xl">
                  Let&apos;s get your café running on Servio.
                </h2>
                <p className="inter mt-4 text-neutral-400">
                  30-minute call. See the product, ask questions, no commitment.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 md:items-end">
                <Link
                  href="https://cal.com/zuolabs/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inter rounded-full px-7 py-3 text-sm font-medium text-white transition hover:opacity-90"
                  style={{ background: "var(--accent)" }}
                >
                  Book a Demo
                </Link>
                <a
                  href="https://instagram.com/zuolabs"
                  className="inter text-sm text-neutral-400 underline underline-offset-4"
                >
                  Follow the journey
                </a>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Footer */}
        <footer className="mt-24 flex items-center justify-between border-t border-neutral-300 pt-8 inter text-sm text-neutral-500">
          <p>© 2026 Servio</p>
          <p>
            Designed for modern cafés by{" "}
            <a href="https://zuolabs.com" target="_blank" rel="noopener noreferrer" className="underline">
              zuolabs
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
}
