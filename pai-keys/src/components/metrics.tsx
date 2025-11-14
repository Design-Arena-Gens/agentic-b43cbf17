import { flagshipHighlights } from "@/lib/data";

export function Metrics() {
  return (
    <section className="grid gap-6 md:grid-cols-3">
      {flagshipHighlights.map((item) => (
        <article
          key={item.title}
          className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 shadow-[0_0_40px_-20px_rgba(56,189,248,0.45)] transition hover:border-cyan-300/40 hover:shadow-[0_0_60px_-15px_rgba(99,102,241,0.55)]"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
            {item.stat}
          </p>
          <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
          <p className="mt-3 text-sm text-white/60">{item.description}</p>
        </article>
      ))}
    </section>
  );
}
