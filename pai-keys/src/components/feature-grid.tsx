const features = [
  {
    title: "Universal API schema",
    description:
      "Ship once with a simple /completions schema. Pai Keys adapts payloads per-provider, including tool-calling, JSON mode, and multimodal attachments.",
  },
  {
    title: "Policy-aware guardrails",
    description:
      "Bring your own safety policies or adopt industry templates. Responses are screened and redirected in-flight to keep every conversation compliant.",
  },
  {
    title: "Observability built-in",
    description:
      "Latency heatmaps, token usage, retention, and streaming quality exposed via dashboards, webhooks, and our Typesafe analytics SDK.",
  },
  {
    title: "Open-source first",
    description:
      "We operate a dedicated inference fleet for Llama, Hermes, Phi, and Mixtral with vector-aware caching. Pay nothing until you exceed 30M tokens.",
  },
  {
    title: "Edge acceleration",
    description:
      "Traffic is routed to the closest GPU region, leveraging caching and speculative decoding for sub-150ms responses at p95.",
  },
  {
    title: "Developer experience",
    description:
      "TypeScript SDK, OpenAPI schema, Postman collection, and drop-in framework adapters for Next.js, FastAPI, Vercel Edge, and Cloudflare Workers.",
  },
];

export function FeatureGrid() {
  return (
    <section className="rounded-3xl border border-white/10 bg-slate-950/60 p-10 md:p-16">
      <div className="flex flex-col gap-4 text-center md:text-left">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
          Why Pai Keys
        </span>
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          Forget vendor lock-in. Ship on the{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-white bg-clip-text font-bold text-transparent">
            fastest, cheapest
          </span>{" "}
          model automatically.
        </h2>
        <p className="max-w-2xl text-white/60">
          We benchmark every request and predict the right blend of latency,
          accuracy, and spend. Toggle strategies per endpoint or per user, and
          Pai Keys handles the rest.
        </p>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="rounded-2xl border border-white/5 bg-white/5 p-6 text-left text-white/70 shadow-[0_0_30px_-15px_rgba(59,130,246,0.55)] transition hover:border-cyan-200/60 hover:text-white"
          >
            <h3 className="text-lg font-semibold text-white">
              {feature.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed">
              {feature.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
