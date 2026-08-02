import React from "react";
import Nav from "@/components/nav";
import Link from "next/link";
export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#f8f6f2] text-[#171717] antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&display=swap');
        .instrument { font-family: "Instrument Serif", serif; }
        .inter { font-family: "Inter", sans-serif; }
      `}</style>

      <main className="mx-auto max-w-5xl px-6 py-16 md:px-12">
        <Nav page="pricing" />

        <section className="grid gap-6 md:grid-cols-2 max-w-2xl mx-auto w-full">
          {/* Launch */}
          <div className="rounded-2xl border border-neutral-300 bg-white p-6">
            <p className="inter text-xs uppercase tracking-[0.2em] text-neutral-500">
              Launch
            </p>

            <h3 className="instrument mt-3 text-4xl text-neutral-900">
              ₹11,000
            </h3>

            <p className="inter mt-1 text-sm text-neutral-500">
              per café / year
            </p>

            <div className="my-5 h-px bg-neutral-200" />

            <ul className="space-y-2.5 inter text-sm text-neutral-700">
              <li>POS &amp; Billing</li>
              <li>Order Management</li>
              <li>Inventory Tracking</li>
              <li>Recipe Costing</li>
              <li>Menu Management</li>
              <li>Sales Analytics</li>
              <li>Unlimited Staff</li>
              <li>Free Migration</li>
              <li>WhatsApp Support</li>
              <li>Regular Updates</li>
            </ul>
            <Link href="https://cal.com/zuolabs/30min">
              <button className="mt-7 w-full rounded-full border border-neutral-900 py-2.5 inter text-sm transition text-neutral-900 hover:bg-neutral-900 hover:text-white">
                Get Started
              </button>
            </Link>
          </div>

          {/* Scale */}
          <div className="relative rounded-2xl bg-neutral-900 p-6 text-white">
            <span className="absolute right-6 top-6 rounded-full bg-white px-3 py-1 inter text-xs text-neutral-900">
              Recommended
            </span>

            <p className="inter text-xs uppercase tracking-[0.2em] text-neutral-400">
              Scale
            </p>

            <h3 className="instrument mt-3 text-4xl">₹15,000</h3>

            <p className="inter mt-1 text-sm text-neutral-400">
              per café / year
            </p>

            <div className="my-5 h-px bg-neutral-700" />

            <ul className="space-y-2.5 inter text-sm text-neutral-200">
              <li>Everything in Launch</li>
              <li>Kitchen Display System</li>
              <li>Customer Loyalty</li>
              <li>CRM</li>
              <li>Advanced Reports</li>
              <li>Staff Performance</li>
              <li>Priority Support</li>
              <li>Early Access to New Features</li>
            </ul>
            <Link href="https://cal.com/zuolabs/30min">
              <button className="mt-7 w-full rounded-full bg-white py-2.5 inter text-sm text-neutral-900 transition hover:bg-neutral-100">
                Book a Demo
              </button>
            </Link>
          </div>
        </section>

        <div className="mt-12 text-center">
          <p className="inter text-neutral-500">
            Need Servio for multiple cafés?
            <a
              href="https://cal.com/zuolabs/30min"
              className="ml-2 underline underline-offset-4 text-neutral-900"
            >
              Contact us for custom pricing.
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
