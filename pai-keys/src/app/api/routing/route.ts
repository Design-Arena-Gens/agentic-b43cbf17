import { NextRequest, NextResponse } from "next/server";
import { models } from "@/lib/data";

const keywordMappings: Record<string, string[]> = {
  realtime: ["realtime", "live", "stream", "fast", "latency", "agent"],
  multimodal: ["image", "vision", "video", "picture", "multimodal"],
  research: ["research", "paper", "report", "analysis", "summarize"],
  compliance: ["compliance", "regulated", "hipaa", "finance", "safety"],
  creative: ["creative", "design", "storyboard", "marketing", "copy"],
  speech: ["audio", "transcribe", "speech", "voice"],
  code: ["code", "program", "developer", "bug", "refactor"],
  open: ["open-source", "opensource", "self-host", "on-prem", "control"],
};

function classifyPrompt(prompt: string) {
  const normalized = prompt.toLowerCase();
  const scores: Record<string, number> = {};

  Object.entries(keywordMappings).forEach(([label, keywords]) => {
    scores[label] = keywords.reduce(
      (count, keyword) =>
        count + (normalized.includes(keyword.toLowerCase()) ? 1 : 0),
      0,
    );
  });

  return scores;
}

function pickModel(prompt: string) {
  const scores = classifyPrompt(prompt);
  const lengthScore = prompt.length;

  if (scores.realtime > 0 || scores.compliance > 1) {
    return models.find((model) => model.slug === "claude-3.5-sonnet");
  }

  if (scores.multimodal > 0 && scores.creative > 0) {
    return models.find((model) => model.slug === "gemini-1.5-flash");
  }

  if (scores.speech > 0) {
    return models.find((model) => model.slug === "whisper-large-v3");
  }

  if (scores.creative > 0) {
    return models.find((model) => model.slug === "stable-diffusion-3.5");
  }

  if (scores.open > 0) {
    return models.find((model) => model.slug === "llama-3.1-405b");
  }

  if (scores.code > 0) {
    return models.find((model) => model.slug === "mistral-large");
  }

  if (lengthScore > 600 || scores.research > 1) {
    return models.find((model) => model.slug === "gpt-4.1-turbo");
  }

  return models.find((model) => model.slug === "command-r-plus");
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body.prompt !== "string") {
    return NextResponse.json(
      { error: "A valid prompt is required." },
      { status: 400 },
    );
  }

  const prompt = body.prompt.trim();

  if (!prompt) {
    return NextResponse.json(
      { error: "Prompt cannot be empty." },
      { status: 400 },
    );
  }

  const model = pickModel(prompt);
  const classification = classifyPrompt(prompt);

  if (!model) {
    return NextResponse.json(
      { error: "No suitable model was found." },
      { status: 503 },
    );
  }

  const result = {
    model: model.name,
    provider: model.provider,
    latencyClass:
      model.latency === "ultra-low"
        ? "<120ms"
        : model.latency === "low"
          ? "<180ms"
          : "<250ms",
    cost:
      model.priceHint === "free"
        ? "$0 (OSS)"
        : model.priceHint === "usage-based"
          ? "~$0.002 / 1K tokens"
          : "~$0.03 / 1K tokens",
    rationale: `Detected a ${prompt.length > 400 ? "complex" : "concise"} request with ${
      Object.entries(classification)
        .filter(([, score]) => score > 0)
        .map(([label]) => label)
        .join(", ") || "general"
    } intent. ${model.name} provides the best balance of accuracy and latency for this profile.`,
  };

  return NextResponse.json({ result });
}
