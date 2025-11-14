import Link from "next/link";

export function Hero() {
  return (
    <section
      id="vision"
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 p-10 shadow-[0_0_50px_-12px_rgba(56,189,248,0.35)] md:p-16"
    >
      <div className="absolute left-1/2 top-4 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/30 blur-3xl" />
      <div className="absolute -left-10 bottom-0 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -right-16 top-8 h-72 w-72 rounded-full bg-purple-500/30 blur-3xl" />

      <div className="relative z-10 flex flex-col gap-8">
        <div className="inline-flex items-center gap-3 self-start rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white/80 md:text-sm">
          Unified AI API Platform
        </div>
        <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
          One key. Every model.{" "}
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text font-bold text-transparent">
            Pai Keys routes the future of AI
          </span>
          .
        </h1>
        <p className="max-w-2xl text-lg text-white/70 md:text-xl">
          Access GPT-4.1, Claude 3.5, Gemini, Mistral, Stable Diffusion, Whisper
          and the best open models through one blazing-fast API. No vendor
          lock-in, no rate caps — just intelligent routing that keeps you ahead.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="#join"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-blue-500/30 transition hover:scale-[1.01] hover:bg-slate-100"
          >
            Request Access
          </Link>
          <Link
            href="#models"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
          >
            Browse Model Fleet
          </Link>
        </div>
        <div className="flex flex-wrap gap-6 pt-6 text-sm text-white/60 md:text-base">
          <div>
            <p className="font-semibold text-white">15+ model families</p>
            <p>GPT, Claude, Gemini, Mistral, Llama, SD, Whisper & more</p>
          </div>
          <div>
            <p className="font-semibold text-white">Intelligent routing</p>
            <p>Optimize for accuracy, latency, or cost with one flag</p>
          </div>
          <div>
            <p className="font-semibold text-white">Enterprise ready</p>
            <p>SOC2, audit logs, usage governance & private deployments</p>
          </div>
        </div>
      </div>
    </section>
  );
}
