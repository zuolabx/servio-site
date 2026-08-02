import React from "react";
import Navbar from "@/components/nav";
import Link from "next/link";
import ProductMockup from "@/components/product-mockup";
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

export default function ServioLandingV1() {
  return (
    <div className="min-h-screen bg-[#f8f6f2] text-[#171717] antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&display=swap');
        .instrument { font-family: "Instrument Serif", serif; }
        .inter { font-family: "Inter", sans-serif; }
      `}</style>

      <main className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-16 md:px-12">
        <Navbar />

        {/* Hero — now with a product visual, like Petpooja/Toast */}
        <section className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-10">
            <h1 className="instrument max-w-xl text-5xl leading-[0.95] tracking-tight text-neutral-900 md:text-6xl">
              Built by people who love cafés,
              <br />
              for people who run them.
            </h1>

            <p className="inter max-w-md text-lg leading-8 text-neutral-600">
              Minimalist software built for modern cafés.
            </p>

            <div className="flex flex-col items-start gap-3 pt-2">
              <Link
                href="https://cal.com/zuolabs/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inter inline-flex items-center gap-2 rounded-full bg-neutral-900 px-7 py-3 text-sm font-medium text-white transition hover:bg-black"
              >
                Book a Demo
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </Link>
              <p className="inter text-sm text-neutral-500">Free 30-min call. No commitments.</p>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <ProductMockup />
          </div>
        </section>

        {/* Divider */}
        <div className="my-20 h-px w-full bg-neutral-300" />

        {/* Vision */}
        <section className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="instrument text-4xl">One operating system.</h2>
          </div>
          <div className="space-y-5 inter text-neutral-600 leading-7">
            <p>
              Servio is a modern operating system designed for restaurants,
              cafés and specialty coffee shops.
            </p>
            <p>
              Instead of stitching together multiple tools, everything lives in
              one place.
            </p>
          </div>
        </section>

        {/* Features — now cards with icon + description, not just a word list */}
        <section className="mt-20 border-t border-neutral-300 pt-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.key}
                className="rounded-2xl border border-neutral-200 bg-white/60 p-6 transition hover:border-neutral-400 hover:bg-white"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-white">
                  {icons[f.key]}
                </div>
                <h3 className="inter mt-4 font-medium text-neutral-900">{f.title}</h3>
                <p className="inter mt-1.5 text-sm leading-6 text-neutral-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-24 flex flex-col items-start gap-6">
          <Link
            href="https://cal.com/zuolabs/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inter rounded-full bg-neutral-900 px-7 py-3 text-sm font-medium text-white transition hover:bg-black"
          >
            Book a Demo
          </Link>
          <p className="inter text-sm text-neutral-500">
            Launching soon ·{" "}
            <a href="https://instagram.com/zuolabs" className="underline underline-offset-4">
              Follow the journey
            </a>
          </p>
        </section>

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
