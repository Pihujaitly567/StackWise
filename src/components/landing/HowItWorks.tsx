"use client";

import { motion } from "framer-motion";
import { Database, Dna, PiggyBank } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    icon: Database,
    title: "Add your AI stack",
    description: "Tell us what tools your team uses, your plan tiers, and seat counts.",
    delay: 0.1,
  },
  {
    icon: Dna,
    title: "Decode your spending DNA",
    description: "Our engine maps your tool usage to identify overlaps, redundant subscriptions, and your team's personality.",
    delay: 0.2,
  },
  {
    icon: PiggyBank,
    title: "Reveal savings opportunities",
    description: "Implement our smart downgrade and consolidation recommendations to cut costs immediately.",
    delay: 0.3,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-muted/30">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">How StackDNA Works</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Three simple steps to decode and optimize your startup&apos;s AI expenditure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10 -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: step.delay }}
            >
              <Card className="border-none shadow-none bg-transparent flex flex-col items-center text-center">
                <div className="h-24 w-24 rounded-3xl bg-white dark:bg-black flex items-center justify-center mb-6 shadow-sm border border-border relative overflow-hidden group">
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                  <step.icon className="h-10 w-10 text-primary relative z-10 group-hover:scale-110 transition-transform" />
                  <div className="absolute top-2 left-2 text-primary/20 font-bold text-lg">{index + 1}</div>
                </div>
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

