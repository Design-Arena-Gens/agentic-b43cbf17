import { CTA } from "@/components/cta";
import { FAQ } from "@/components/faq";
import { FeatureGrid } from "@/components/feature-grid";
import { Hero } from "@/components/hero";
import { Metrics } from "@/components/metrics";
import { ModelMatrix } from "@/components/model-matrix";
import { Pricing } from "@/components/pricing";
import { RoutingDemo } from "@/components/routing-demo";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Metrics />
      <FeatureGrid />
      <ModelMatrix />
      <RoutingDemo />
      <Testimonials />
      <Pricing />
      <CTA />
      <FAQ />
    </>
  );
}
