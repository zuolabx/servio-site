"use client";
import React, { useState } from "react";
import ProductMockup from "@/components/product-mockup";

const tabs = [
  { key: "orders", label: "Orders", copy: "Every order, one queue." },
  { key: "kitchen", label: "Kitchen", copy: "Tickets fire the instant an order's placed." },
  { key: "inventory", label: "Inventory", copy: "Know what's running low, before you do." },
  { key: "analytics", label: "Analytics", copy: "Your busiest hours, best sellers, in real time." },
] as const;

export default function HeroTabs() {
  const [active, setActive] = useState<(typeof tabs)[number]["key"]>("orders");
  const activeTab = tabs.find((t) => t.key === active)!;

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={`inter rounded-full px-4 py-2 text-sm transition ${
              active === t.key
                ? "bg-[var(--accent)] text-white"
                : "bg-white/10 text-neutral-300 hover:bg-white/20"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <p className="inter mt-4 text-sm text-neutral-400">{activeTab.copy}</p>
      <div className="mt-6 flex justify-center md:justify-start">
        <ProductMockup variant={active} />
      </div>
    </div>
  );
}
