import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { FeatureCards } from "@/components/landing/FeatureCards";
import { SavingsExample } from "@/components/landing/SavingsExample";
import { Testimonials } from "@/components/landing/Testimonials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <HowItWorks />
      <FeatureCards />
      <SavingsExample />
      <Testimonials />
    </main>
  );
}
