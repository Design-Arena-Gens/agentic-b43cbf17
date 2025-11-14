import { pricingPlans } from "@/lib/data";

export function Pricing() {
  return (
    <section
      id="pricing"
      className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-10 md:p-16"
    >
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
          Pricing
        </span>
        <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
          Start for free, scale without limits.
        </h2>
        <p className="mt-4 text-white/60">
          Ship your MVP on open-source models, then unlock premium routes,
          governance, and private deployments as your traffic scales.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {pricingPlans.map((plan) => (
          <article
            key={plan.name}
            className={`flex h-full flex-col rounded-2xl border border-white/10 p-8 text-white shadow-[0_0_35px_-20px_rgba(96,165,250,0.65)] transition hover:border-cyan-200/70 ${
              plan.highlight
                ? "bg-white/10 shadow-[0_20px_60px_-25px_rgba(56,189,248,0.65)] backdrop-blur"
                : "bg-slate-950/50"
            }`}
          >
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/50">
                {plan.name}
              </p>
              <p className="text-4xl font-semibold">{plan.price}</p>
              <p className="text-sm text-white/60">{plan.description}</p>
            </div>
            <ul className="mt-6 flex-1 space-y-3 text-sm text-white/70">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2"
                >
                  <span className="text-cyan-300">◆</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-2 text-sm font-semibold transition ${
                plan.highlight
                  ? "bg-white text-slate-900 hover:bg-slate-100"
                  : "border border-white/30 text-white hover:border-white hover:bg-white/10"
              }`}
            >
              {plan.highlight ? "Talk to Sales" : "Get started"}
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
