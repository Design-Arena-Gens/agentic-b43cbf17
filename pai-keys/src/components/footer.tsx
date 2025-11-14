export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold text-white">Pai Keys</p>
          <p className="text-sm text-white/60">
            Unified AI API platform — access every frontier model with one key.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-5 text-sm text-white/50">
          <a href="#vision" className="transition hover:text-white">
            Vision
          </a>
          <a href="#models" className="transition hover:text-white">
            Model Matrix
          </a>
          <a href="#routing" className="transition hover:text-white">
            Routing Engine
          </a>
          <a href="#join" className="transition hover:text-white">
            Request Access
          </a>
        </div>
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} Pai Keys. No vendor lock-in. No limits.
        </p>
      </div>
    </footer>
  );
}
