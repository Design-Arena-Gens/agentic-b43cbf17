"use client";

import { useState } from "react";

interface RoutingResult {
  model: string;
  provider: string;
  rationale: string;
  latencyClass: string;
  cost: string;
}

const presets: { label: string; prompt: string }[] = [
  {
    label: "Realtime agent with tool calling",
    prompt:
      "You are building a customer support copilot that needs fast responses, tool use, and safe handling of sensitive data.",
  },
  {
    label: "Long-form research assistant",
    prompt:
      "Summarize 12 PDF research papers into a structured report with citations and bullet insights.",
  },
  {
    label: "Creative marketing imagery",
    prompt:
      "Generate a cinematic storyboard with visual references for a new wearable technology product launch.",
  },
];

export function RoutingDemo() {
  const [prompt, setPrompt] = useState(presets[0].prompt);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<RoutingResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const runRouting = async (input?: string) => {
    const value = input ?? prompt;
    if (!value.trim()) {
      setError("Add a prompt so Pai Keys can route it.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/routing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: value }),
      });
      if (!response.ok) {
        throw new Error("Request failed");
      }
      const data = (await response.json()) as { result: RoutingResult };
      setResult(data.result);
    } catch (err) {
      console.error(err);
      setError("Routing engine is busy. Try again in a few seconds.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="routing"
      className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-10 md:p-16"
    >
      <div className="flex flex-col gap-4">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
          Routing Engine
        </span>
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          Watch the routing intelligence pick the perfect model.
        </h2>
        <p className="max-w-2xl text-white/60">
          Drop in a task and Pai Keys evaluates complexity, modality,
          compliance, and cost sensitivity in real time. The engine then
          dispatches the request to the best model and region available.
        </p>
      </div>

      <div
        id="demo"
        className="mt-10 grid gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 md:grid-cols-[1fr_1fr]"
      >
        <div className="flex flex-col gap-3">
          <label className="text-sm font-semibold text-white/70">
            Describe your task
          </label>
          <textarea
            className="h-40 rounded-2xl border border-white/20 bg-slate-950/80 p-4 text-sm text-white outline-none transition focus:border-cyan-300/80 focus:shadow-[0_0_0_2px_rgba(34,211,238,0.35)]"
            value={prompt}
            onChange={(event) => setPrompt(event.target.value)}
            placeholder="Ask Pai Keys to recommend the best model…"
          />
          <div className="flex flex-wrap gap-3">
            {presets.map((preset) => (
              <button
                key={preset.label}
                type="button"
                onClick={() => {
                  setPrompt(preset.prompt);
                  runRouting(preset.prompt);
                }}
                className="rounded-full border border-white/20 px-4 py-1.5 text-xs font-semibold text-white/80 transition hover:border-white hover:text-white"
              >
                {preset.label}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => runRouting()}
            disabled={loading}
            className="mt-4 inline-flex w-fit items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-blue-500/30 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Evaluating…" : "Route this request"}
          </button>
          {error && <p className="text-sm text-rose-300">{error}</p>}
        </div>

        <div className="flex flex-col justify-between gap-4 rounded-2xl border border-white/10 bg-slate-950/60 p-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
              Recommended Model
            </p>
            {result ? (
              <>
                <h3 className="mt-4 text-2xl font-semibold text-white">
                  {result.model}
                </h3>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/40">
                  {result.provider}
                </p>
                <p className="mt-4 text-sm text-white/70">{result.rationale}</p>
              </>
            ) : (
              <p className="mt-4 text-sm text-white/60">
                Run the demo to see how Pai Keys balances speed, accuracy, and
                cost.
              </p>
            )}
          </div>
          {result && (
            <div className="grid gap-3 text-sm text-white/70">
              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-2">
                <span className="text-white/50">Latency class</span>
                <span className="font-semibold text-white">
                  {result.latencyClass}
                </span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-2">
                <span className="text-white/50">Estimated cost</span>
                <span className="font-semibold text-emerald-200">
                  {result.cost}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
