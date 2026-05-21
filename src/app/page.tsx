import { Hero } from "@/components/landing/Hero";
import { Personalities } from "@/components/landing/Personalities";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { RealResults } from "@/components/landing/SavingsExample";
import { Testimonials } from "@/components/landing/Testimonials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Personalities />
      <HowItWorks />
      <RealResults />
      <Testimonials />
    </main>
  );
}

