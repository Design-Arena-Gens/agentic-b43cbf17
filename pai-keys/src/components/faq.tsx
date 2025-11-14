import { faqItems } from "@/lib/data";

export function FAQ() {
  return (
    <section
      id="faq"
      className="rounded-3xl border border-white/10 bg-slate-950/60 p-10 md:p-16"
    >
      <div className="grid gap-12 md:grid-cols-[0.75fr_1fr]">
        <div className="space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-200">
            Questions
          </span>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Everything you need to know about Pai Keys.
          </h2>
          <p className="text-white/60">
            We designed Pai Keys to make switching between top-tier models feel
            effortless. Here are the answers to common questions we receive from
            product teams, researchers, and founders.
          </p>
        </div>
        <dl className="space-y-6">
          {faqItems.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <dt className="text-base font-semibold text-white">
                {item.question}
              </dt>
              <dd className="mt-3 text-sm text-white/70">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
