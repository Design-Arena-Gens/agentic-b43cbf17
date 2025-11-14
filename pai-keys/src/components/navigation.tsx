import Link from "next/link";

const navItems = [
  { href: "#vision", label: "Vision" },
  { href: "#models", label: "Model Fleet" },
  { href: "#routing", label: "Routing Engine" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function Navigation() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold text-white"
          aria-label="Pai Keys"
        >
          <span className="grid size-9 place-items-center rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 text-sm font-bold text-white shadow-lg shadow-blue-500/30">
            🧠
          </span>
          Pai Keys
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-white/70 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#join"
            className="hidden rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white/80 transition hover:border-white/50 hover:text-white md:inline-flex"
          >
            Join Waitlist
          </a>
          <a
            href="#demo"
            className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            Run Demo
          </a>
        </div>
      </div>
    </header>
  );
}
