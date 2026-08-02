type Variant = "orders" | "kitchen" | "inventory" | "analytics";

const content: Record<
  Variant,
  { label: string; stat: string; statLabel: string; rows: { left: string; right: string; dot: string }[] }
> = {
  orders: {
    label: "servio · orders",
    stat: "₹18,240",
    statLabel: "Today's sales",
    rows: [
      { left: "#104 · Table 3", right: "Preparing", dot: "bg-amber-400" },
      { left: "#105 · Takeaway", right: "Ready", dot: "bg-emerald-500" },
      { left: "#106 · Table 7", right: "New", dot: "bg-neutral-400" },
    ],
  },
  kitchen: {
    label: "servio · kitchen",
    stat: "6 min",
    statLabel: "Avg. ticket time",
    rows: [
      { left: "Cappuccino x2", right: "Firing", dot: "bg-amber-400" },
      { left: "Club Sandwich", right: "Plating", dot: "bg-emerald-500" },
      { left: "Cold Brew", right: "Queued", dot: "bg-neutral-400" },
    ],
  },
  inventory: {
    label: "servio · inventory",
    stat: "4 items",
    statLabel: "Running low",
    rows: [
      { left: "Oat milk", right: "Low", dot: "bg-red-400" },
      { left: "Espresso beans", right: "OK", dot: "bg-emerald-500" },
      { left: "Croissants", right: "Low", dot: "bg-red-400" },
    ],
  },
  analytics: {
    label: "servio · analytics",
    stat: "+12%",
    statLabel: "vs. last week",
    rows: [
      { left: "Peak hour", right: "8–9 AM", dot: "bg-[var(--accent)]" },
      { left: "Best seller", right: "Flat White", dot: "bg-[var(--accent)]" },
      { left: "Repeat guests", right: "34%", dot: "bg-[var(--accent)]" },
    ],
  },
};

export default function ProductMockup({ variant = "orders" }: { variant?: Variant }) {
  const c = content[variant];
  const bars = [40, 70, 55, 90, 65, 100, 50];

  return (
    <div className="relative w-full max-w-md">
      <div className="absolute -inset-6 -z-10 rounded-3xl bg-[var(--accent)]/20 blur-3xl" />

      <div className="rounded-2xl border border-neutral-200 bg-white shadow-xl overflow-hidden">
        <div className="flex items-center gap-1.5 border-b border-neutral-200 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
          <span className="inter ml-3 text-xs text-neutral-400">{c.label}</span>
        </div>

        <div className="p-5 space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="inter text-xs uppercase tracking-wide text-neutral-400">{c.statLabel}</p>
              <p className="instrument text-2xl text-neutral-900">{c.stat}</p>
            </div>
            <span className="inter rounded-full bg-[var(--accent)]/10 px-2.5 py-1 text-xs text-[var(--accent)]">
              live
            </span>
          </div>

          <div className="flex items-end gap-1.5 h-16">
            {bars.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm"
                style={{
                  height: `${h}%`,
                  background: "var(--accent)",
                  opacity: i === bars.length - 1 ? 1 : 0.25,
                }}
              />
            ))}
          </div>

          <div className="space-y-2 pt-1">
            {c.rows.map((r) => (
              <div
                key={r.left}
                className="flex items-center justify-between rounded-lg border border-neutral-200 px-3 py-2"
              >
                <div className="flex items-center gap-2.5">
                  <span className={`h-2 w-2 rounded-full ${r.dot}`} />
                  <span className="inter text-sm text-neutral-800">{r.left}</span>
                </div>
                <span className="inter text-xs text-neutral-400">{r.right}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
