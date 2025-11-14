import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const ogImage =
  "https://agentic-b43cbf17.vercel.app/api/og"; // Placeholder for dynamic OG endpoint

export const metadata: Metadata = {
  title: "Pai Keys – Unified AI API Platform",
  description:
    "Pai Keys gives builders one API key to access GPT, Claude, Gemini, Mistral, Whisper, Stable Diffusion, and open-source models with intelligent routing.",
  keywords: [
    "Pai Keys",
    "Unified AI API",
    "Intelligent model routing",
    "Open-source AI",
    "AI platform",
    "Multi-model API",
  ],
  openGraph: {
    title: "Pai Keys – Unified AI API Platform",
    description:
      "Route every AI request to the best model automatically. One universal key, no vendor lock-in.",
    url: "https://agentic-b43cbf17.vercel.app",
    siteName: "Pai Keys",
    images: ogImage,
  },
  twitter: {
    card: "summary_large_image",
    title: "Pai Keys – Unified AI API Platform",
    description:
      "Access GPT, Claude, Gemini, Stable Diffusion, Whisper, and OSS models with one key.",
    images: ogImage,
  },
  metadataBase: new URL("https://agentic-b43cbf17.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-950 text-white antialiased`}
      >
        <div className="relative flex min-h-screen flex-col">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-24 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />
            <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] translate-x-1/4 rounded-full bg-purple-500/20 blur-[120px]" />
            <div className="absolute left-0 top-1/3 h-[20rem] w-[20rem] -translate-x-1/3 rounded-full bg-blue-500/15 blur-[120px]" />
          </div>
          <Navigation />
          <main className="flex-1">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-16 md:py-20">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
