"use client";

import { useState } from "react";

interface FormState {
  name: string;
  email: string;
  company: string;
  useCase: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  useCase: "",
};

export function CTA() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedback(null);

    if (!formState.email) {
      setFeedback("Drop in a work email so we can reach you.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setFormState(initialState);
      setFeedback("Request received! A founder will reach out within 24 hours.");
    } catch (error) {
      console.error(error);
      setFeedback("We hit a snag. Please retry in a moment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="join"
      className="rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 p-10 md:p-16"
    >
      <div className="grid gap-12 md:grid-cols-[0.75fr_1fr] md:items-center">
        <div className="space-y-4 text-white">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">
            Request Access
          </span>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Launch your unified AI stack in under an hour.
          </h2>
          <p className="text-white/70">
            Tell us about your product and we&apos;ll configure a tailored routing
            policy, connect your preferred providers, and ship a sandbox key to
            your inbox within 24 hours.
          </p>
          <ul className="space-y-2 text-sm text-white/60">
            <li>• Zero-cost Launch tier with unlimited open-source usage</li>
            <li>• Priority onboarding for teams migrating off single vendors</li>
            <li>• Bring-your-own-credential mode for consolidated billing</li>
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-2xl border border-white/10 bg-slate-950/70 p-6"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm text-white/70">
              Name
              <input
                type="text"
                required
                name="name"
                value={formState.name}
                onChange={handleChange}
                className="rounded-xl border border-white/20 bg-slate-900/80 px-3 py-2 text-white outline-none transition focus:border-cyan-300/80 focus:ring-2 focus:ring-cyan-300/30"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-white/70">
              Work email
              <input
                type="email"
                required
                name="email"
                value={formState.email}
                onChange={handleChange}
                className="rounded-xl border border-white/20 bg-slate-900/80 px-3 py-2 text-white outline-none transition focus:border-cyan-300/80 focus:ring-2 focus:ring-cyan-300/30"
              />
            </label>
          </div>
          <label className="flex flex-col gap-2 text-sm text-white/70">
            Company or project
            <input
              type="text"
              name="company"
              value={formState.company}
              onChange={handleChange}
              placeholder="Optional"
              className="rounded-xl border border-white/20 bg-slate-900/80 px-3 py-2 text-white outline-none transition focus:border-cyan-300/80 focus:ring-2 focus:ring-cyan-300/30"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-white/70">
            What will you build with Pai Keys?
            <textarea
              name="useCase"
              value={formState.useCase}
              onChange={handleChange}
              rows={4}
              className="rounded-xl border border-white/20 bg-slate-900/80 px-3 py-2 text-white outline-none transition focus:border-cyan-300/80 focus:ring-2 focus:ring-cyan-300/30"
              placeholder="Describe your dream AI experience…"
            />
          </label>
          <button
            type="submit"
            disabled={loading}
            className="inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Submitting…" : "Join the waitlist"}
          </button>
          {feedback && (
            <p className="text-sm text-white/70">
              {feedback}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
