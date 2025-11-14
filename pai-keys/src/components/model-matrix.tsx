"use client";

import { useEffect, useState } from "react";
import type { ModelDescriptor } from "@/lib/data";

interface ApiResponse {
  models: ModelDescriptor[];
}

const capabilityColors: Record<string, string> = {
  "Text Generation": "bg-cyan-400/20 text-cyan-200",
  Code: "bg-blue-400/20 text-blue-200",
  Reasoning: "bg-violet-400/20 text-violet-200",
  Vision: "bg-emerald-400/20 text-emerald-200",
  Speech: "bg-amber-400/20 text-amber-200",
  Embeddings: "bg-rose-400/20 text-rose-200",
  "Tool Use": "bg-lime-400/20 text-lime-100",
};

export function ModelMatrix() {
  const [models, setModels] = useState<ModelDescriptor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const fetchModels = async () => {
      try {
        const response = await fetch("/api/models");
        if (!response.ok) {
          throw new Error("Failed to fetch models");
        }
        const payload: ApiResponse = await response.json();
        if (mounted) {
          setModels(payload.models);
        }
      } catch (error) {
        console.error(error);
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchModels();
    const interval = setInterval(fetchModels, 60_000);

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      id="models"
      className="rounded-3xl border border-white/10 bg-slate-950/60 p-10 md:p-16"
    >
      <div className="flex flex-col gap-4 pb-10 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-300">
            Model Matrix
          </span>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            One contract, full coverage of the frontier and open model
            ecosystem.
          </h2>
          <p className="text-white/60">
            Pai Keys continuously benchmarks every supported model for accuracy,
            latency, cost, and resilience so we can promise the best model for
            every task. The table updates in real time with our recommended
            lineup.
          </p>
        </div>
        <a
          href="/models"
          className="self-start rounded-full border border-white/30 px-5 py-2 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
        >
          View detailed catalog
        </a>
      </div>

      {loading ? (
        <div className="grid place-items-center rounded-2xl border border-white/10 bg-white/5 p-12 text-white/60">
          Loading model intelligence…
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-white/10">
          <table className="min-w-full divide-y divide-white/5 text-left text-sm text-white/80">
            <thead className="bg-white/5 text-xs uppercase tracking-[0.2em] text-white/60">
              <tr>
                <th className="px-5 py-4">Model</th>
                <th className="px-5 py-4">Provider</th>
                <th className="px-5 py-4">Tier</th>
                <th className="px-5 py-4">Capabilities</th>
                <th className="px-5 py-4">Latency</th>
                <th className="px-5 py-4">Best For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 bg-slate-900/40">
              {models.map((model) => (
                <tr key={model.slug} className="hover:bg-white/5">
                  <td className="px-5 py-4 text-white font-semibold">
                    {model.name}
                  </td>
                  <td className="px-5 py-4">{model.provider}</td>
                  <td className="px-5 py-4 capitalize">{model.tier}</td>
                  <td className="px-5 py-4">
                    <div className="flex flex-wrap gap-2">
                      {model.capabilities.map((capability) => (
                        <span
                          key={capability}
                          className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${capabilityColors[capability] ?? "bg-white/10 text-white"}`}
                        >
                          {capability}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-5 py-4 capitalize">{model.latency}</td>
                  <td className="px-5 py-4">{model.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
