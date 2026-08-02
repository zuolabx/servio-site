import React from "react";
import Navbar from "@/components/nav";
import Link from "next/link";
export default function ServioLanding() {
  return (
    <div className="min-h-screen bg-[#f8f6f2] text-[#171717] antialiased">
      {/* Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&display=swap');

        .instrument {
          font-family: "Instrument Serif", serif;
        }

        .inter {
          font-family: "Inter", sans-serif;
        }
      `}</style>

      <main className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-16 md:px-12">
        {/* Logo */}
        <Navbar />
        {/* Hero */}
        <section className="space-y-10">
          <h1 className="instrument max-w-4xl text-5xl leading-[0.95] tracking-tight text-neutral-900 md:text-7xl">
            Built by people who love cafés
            <br />
            love cafés for people
            <br />
            who run them.
          </h1>

          <div className="max-w-2xl space-y-6">
            <p className="inter text-lg leading-8 text-neutral-600">
              minimalist software built for modern cafes
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 pt-2">
            <Link
              href="https://cal.com/zuolabs/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inter inline-flex items-center gap-2 rounded-full bg-neutral-900 px-7 py-3 text-sm font-medium text-white transition hover:bg-black"
            >
              Book a Demo
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </Link>
            <p className="inter text-sm text-neutral-500">
              Free 30-min call. No commitments.
            </p>
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

        {/* Features */}
        <section className="mt-20 grid gap-y-5 border-t border-neutral-300 pt-10 md:grid-cols-2">
          {[
            "Order Management",
            "Kitchen Operations",
            "Table Management",
            "Menu Management",
            "Inventory Tracking",
            "Billing & Invoicing",
            "Payment Collection",
            "Staff Roles & Access",
            "Sales Analytics",
            "Owner Mobile Dashboard",
          ].map((item) => (
            <div key={item} className="border-b border-neutral-200 py-4">
              <span className="inter text-neutral-800">{item}</span>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className="mt-24 flex flex-col items-start gap-6">
          <button className="inter rounded-full bg-neutral-900 px-7 py-3 text-sm font-medium text-white transition hover:bg-black">
            <a href="https://instagram.com/zuolabs">Follow the journey</a>
          </button>

          <p className="inter text-sm text-neutral-500">Launching soon.</p>
        </section>

        {/* Footer */}
        <footer className="mt-24 flex items-center justify-between border-t border-neutral-300 pt-8 inter text-sm text-neutral-500">
          <p>© 2026 Servio</p>
          <p>
            Designed for modern cafés by{" "}
            <a
              href="https://zuolabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              zuolabs
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
}
