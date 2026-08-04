import Link from "next/link";

interface NavProps {
  page?: "home" | "pricing";
}

export default function Nav({ page }: NavProps) {
  return (
    <nav className="mb-16 flex items-center justify-between">
      <Link
        href="/"
        className="instrument text-3xl tracking-tight text-neutral-900"
      >
        servio.
      </Link>

      <div className="flex items-center gap-8 inter text-sm">
        <Link
          href="/"
          className={`transition ${
            page === "home"
              ? "text-neutral-900"
              : "text-neutral-500 hover:text-neutral-900"
          }`}
        >
          Home
        </Link>

        <Link
          href="/pricing"
          className={`transition ${
            page === "pricing"
              ? "text-neutral-900"
              : "text-neutral-500 hover:text-neutral-900"
          }`}
        >
          Pricing
        </Link>

        <Link
          href="https://cal.com/zuolabs/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium text-white transition hover:opacity-90"
          style={{ background: "var(--accent)" }}
        >
          Book a Demo
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </Link>
      </div>
    </nav>
  );
}