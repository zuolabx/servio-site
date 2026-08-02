const chips = [
  { label: "Orders", stat: "₹18,240" },
  { label: "Kitchen", stat: "6 min" },
  { label: "Inventory", stat: "4 low" },
  { label: "Analytics", stat: "+12%" },
  { label: "Billing", stat: "GST-ready" },
  { label: "Staff", stat: "5 roles" },
];

function Chip({ label, stat }: { label: string; stat: string }) {
  return (
    <div className="mx-3 flex w-40 flex-shrink-0 flex-col justify-between rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
      <p className="inter text-xs uppercase tracking-wide text-neutral-400">{label}</p>
      <p className="instrument mt-2 text-xl text-neutral-900">{stat}</p>
      <div className="mt-3 flex items-end gap-1 h-6">
        {[40, 70, 55, 90, 60].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm"
            style={{ height: `${h}%`, background: "var(--accent)", opacity: 0.5 + i * 0.1 }}
          />
        ))}
      </div>
    </div>
  );
}

export default function ScreenMarquee() {
  const row = [...chips, ...chips];
  return (
    <div className="overflow-hidden">
      <style>{`
        @keyframes servio-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .servio-marquee-track {
          animation: servio-marquee 22s linear infinite;
        }
      `}</style>
      <div className="flex w-max servio-marquee-track py-2">
        {row.map((c, i) => (
          <Chip key={i} label={c.label} stat={c.stat} />
        ))}
      </div>
    </div>
  );
}
