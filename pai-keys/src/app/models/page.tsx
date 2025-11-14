import { models } from "@/lib/data";

const tierCopy: Record<string, string> = {
  enterprise: "Enterprise",
  open: "Open Source",
  specialized: "Specialized",
};

export default function ModelsPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <h1 className="text-4xl font-semibold text-white">
          Model Intelligence Catalog
        </h1>
        <p className="max-w-2xl text-sm text-white/60">
          A living registry of the models Pai Keys routes across. We continuously
          benchmark latency, accuracy, pricing, and safety posture to ensure the
          optimal model is always selected for your workloads.
        </p>
      </header>

      <div className="grid gap-5 md:grid-cols-2">
        {models.map((model) => (
          <article
            key={model.slug}
            className="space-y-3 rounded-3xl border border-white/10 bg-slate-950/70 p-6 text-white/80"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <h2 className="text-xl font-semibold text-white">
                  {model.name}
                </h2>
                <p className="text-xs uppercase tracking-[0.35em] text-white/40">
                  {model.provider}
                </p>
              </div>
              <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold text-white/60">
                {tierCopy[model.tier]}
              </span>
            </div>
            <p className="text-sm text-white/60">{model.bestFor}</p>
            <div className="flex flex-wrap gap-2 text-[11px] font-semibold">
              {model.capabilities.map((capability) => (
                <span
                  key={capability}
                  className="rounded-full bg-white/10 px-2.5 py-1 text-white/70"
                >
                  {capability}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 text-[11px] text-white/50">
              {model.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-white/5 px-2 py-1">
                  #{tag.replace(/\s+/g, "-")}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between text-xs text-white/50">
              <span className="capitalize">Latency: {model.latency}</span>
              <span className="capitalize">
                Pricing: {model.priceHint === "usage-based" ? "Usage based" : model.priceHint}
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
