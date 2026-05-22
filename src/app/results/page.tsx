"use client";

import { motion } from "framer-motion";
import { HealthMeter } from "@/components/results/HealthMeter";
import { PersonalityCard } from "@/components/results/PersonalityCard";
import { SavingsAndLeakCards } from "@/components/results/SavingsCard";
import { AISummaryCard } from "@/components/results/AISummaryCard";
import { SharePreview } from "@/components/results/SharePreview";
import { ToolChip } from "@/components/ui/ToolChip";

// Reusable elegant fade-in wrapper
function FadeInSection({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

// Elegant static representation of stack overlap instead of bouncing icons
function ElegantStackTransformation() {
  return (
    <div className="w-full max-w-5xl mx-auto py-24 relative flex flex-col items-center">
      <div className="text-center mb-16">
        <h3 className="text-3xl font-black tracking-tight text-foreground">
          Stack Redundancy Map
        </h3>
        <p className="text-muted-foreground mt-2 font-light text-lg max-w-xl mx-auto">
          We mapped the functional overlap across your subscriptions to isolate waste and identify pure optimization.
        </p>
      </div>

      <div className="relative w-full max-w-3xl h-[400px] flex items-center justify-center">
        {/* Venn Diagram / Overlap Visualization */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {/* ChatGPT Circle */}
          <div className="absolute w-72 h-72 rounded-full border border-indigo-500/20 bg-indigo-500/5 backdrop-blur-sm -translate-x-20 flex flex-col items-center justify-start pt-8">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-500/70 mb-2">Language Models</span>
            <ToolChip tool="chatgpt" size="sm" />
          </div>
          
          {/* Claude Circle (Overlapping) */}
          <div className="absolute w-72 h-72 rounded-full border border-rose-500/20 bg-rose-500/5 backdrop-blur-sm translate-x-20 flex flex-col items-center justify-start pt-8">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-500/70 mb-2">Advanced Context</span>
            <ToolChip tool="claude" size="sm" />
          </div>

          {/* Cursor Circle (Bottom) */}
          <div className="absolute w-72 h-72 rounded-full border border-slate-500/20 bg-slate-500/5 backdrop-blur-sm translate-y-32 flex flex-col items-center justify-end pb-8">
            <ToolChip tool="cursor" size="sm" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500/70 mt-2">Code Generation</span>
          </div>

          {/* Overlap Highlights (The "Waste") */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute z-10 -translate-y-8 flex flex-col items-center"
          >
            <div className="w-32 h-48 bg-gradient-to-b from-rose-500/20 to-indigo-500/20 rounded-[100%] blur-xl" />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-bold uppercase tracking-widest text-foreground bg-background/80 backdrop-blur-md px-3 py-1 rounded-full border border-border">
              70% Overlap
            </span>
          </motion.div>

          {/* The Optimization Result */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute -bottom-20 right-0 glass-card bg-emerald-500/5 border-emerald-500/20 p-6 rounded-2xl flex items-center gap-4 shadow-2xl"
          >
            <div className="flex flex-col">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-1">Optimized Stack</span>
              <div className="flex gap-2">
                <ToolChip tool="chatgpt" size="sm" />
                <ToolChip tool="cursor" size="sm" />
              </div>
            </div>
            <div className="w-[1px] h-10 bg-emerald-500/20 mx-2" />
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-1">Savings</span>
              <div className="text-3xl font-black text-emerald-500">$180<span className="text-lg opacity-60">/mo</span></div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-black relative overflow-hidden py-24 selection:bg-indigo-500/30">
      
      {/* Vexel-style continuous soft mesh background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-br from-indigo-50/50 via-purple-50/20 to-transparent dark:from-indigo-900/10 dark:via-purple-900/5" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-pink-50/30 dark:bg-pink-900/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-screen-xl px-4 relative z-10 flex flex-col gap-32">
        
        {/* Intro Section */}
        <section className="pt-12">
          <FadeInSection>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">Analysis Complete</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
                StackDNA Decode Results
              </h2>
            </div>
            <HealthMeter 
              score={72} 
              status="Needs Optimization" 
              explanation="Your stack is powerful, but multiple subscriptions overlap and create hidden waste." 
            />
          </FadeInSection>
        </section>

        {/* Personality Section */}
        <section>
          <FadeInSection>
            <PersonalityCard />
          </FadeInSection>
        </section>

        {/* Stack Transformation (Restrained Venn Diagram) */}
        <section>
          <FadeInSection>
            <ElegantStackTransformation />
          </FadeInSection>
        </section>

        {/* Financial Metrics */}
        <section>
          <FadeInSection>
            <SavingsAndLeakCards />
          </FadeInSection>
        </section>

        {/* Executive Summary */}
        <section>
          <FadeInSection>
            <AISummaryCard />
          </FadeInSection>
        </section>

        {/* Share Section */}
        <section className="pb-24">
          <FadeInSection>
            <SharePreview />
          </FadeInSection>
        </section>

      </div>
    </div>
  );
}
