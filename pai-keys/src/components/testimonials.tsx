const testimonials = [
  {
    name: "Linh Tran",
    role: "CTO, NovaLabs",
    quote:
      "With Pai Keys we shipped a multi-model agent in 6 days. The routing engine cut our OpenAI bill by 39% while keeping response times <120ms.",
  },
  {
    name: "Caleb Ortiz",
    role: "Founder, DraftPilot",
    quote:
      "We swapped from a single vendor to Pai Keys and never looked back. Their open-source cluster outperforms paid APIs for our use case.",
  },
  {
    name: "Dr. Ayesha Khan",
    role: "Director of AI, Mediform",
    quote:
      "Compliance was a deal breaker. Pai Keys gave us audit logs, data residency, and dedicated regions in under a week.",
  },
];

export function Testimonials() {
  return (
    <section className="grid gap-6 md:grid-cols-3">
      {testimonials.map((testimonial) => (
        <article
          key={testimonial.name}
          className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-slate-950/60 p-6 text-white/70 transition hover:border-cyan-200/60 hover:text-white"
        >
          <p className="text-sm leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
          <div>
            <p className="text-sm font-semibold text-white">
              {testimonial.name}
            </p>
            <p className="text-xs uppercase tracking-[0.35em] text-white/40">
              {testimonial.role}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
}
