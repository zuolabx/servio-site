export default function MobileAppScreen() {
  const rows = [
    { label: "Table 3", sub: "2x Cappuccino", dot: "bg-amber-400" },
    { label: "Takeaway", sub: "1x Club Sandwich", dot: "bg-emerald-500" },
    { label: "Table 7", sub: "1x Cold Brew", dot: "bg-neutral-400" },
    { label: "Table 1", sub: "3x Croissant", dot: "bg-emerald-500" },
  ];

  return (
    <div className="pt-9 pb-6 px-4">
      <p className="inter text-center text-xs text-neutral-400">9:41</p>
      <div className="mt-4 flex items-center justify-between">
        <p className="instrument text-lg text-neutral-900">Servio</p>
        <span
          className="h-6 w-6 rounded-full"
          style={{ background: "var(--accent)" }}
        />
      </div>
      <div className="mt-4 rounded-xl p-3" style={{ background: "var(--accent)" }}>
        <p className="inter text-[10px] uppercase tracking-wide text-white/70">Today</p>
        <p className="instrument text-xl text-white">₹18,240</p>
      </div>
      <div className="mt-4 space-y-2">
        {rows.map((r) => (
          <div key={r.label} className="flex items-center gap-2 rounded-lg border border-neutral-100 bg-neutral-50 px-2.5 py-2">
            <span className={`h-2 w-2 rounded-full ${r.dot}`} />
            <div>
              <p className="inter text-xs font-medium text-neutral-800">{r.label}</p>
              <p className="inter text-[10px] text-neutral-400">{r.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
