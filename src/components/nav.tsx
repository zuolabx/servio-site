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
      </div>
    </nav>
  );
}