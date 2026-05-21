"use client";

import { motion, Variants } from "framer-motion";
import { HealthMeter } from "@/components/results/HealthMeter";
import { PersonalityCard } from "@/components/results/PersonalityCard";
import { SavingsAndLeakCards } from "@/components/results/SavingsCard";
import { BeforeAfterComparison } from "@/components/results/BeforeAfterComparison";
import { OptimizationTimeline } from "@/components/results/OptimizationTimeline";
import { AISummaryCard } from "@/components/results/AISummaryCard";
import { SharePreview } from "@/components/results/SharePreview";

export default function ResultsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", bounce: 0.2 } }
  };

  return (
    <main className="min-h-screen bg-muted/10 py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto max-w-screen-xl px-4">
        
        {/* Storytelling container */}
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          animate="show"
          className="space-y-24 md:space-y-32"
        >
          
          {/* A) AI Spend Health Score */}
          <motion.section variants={itemVariants} className="pt-8">
            <HealthMeter 
              score={72} 
              status="Needs Optimization" 
              explanation="Your stack is powerful, but multiple subscriptions overlap and create hidden waste." 
            />
          </motion.section>

          {/* B) Stack Personality & Why */}
          <motion.section variants={itemVariants}>
            <PersonalityCard />
          </motion.section>

          {/* C & D) Potential Savings & Biggest Leak */}
          <motion.section variants={itemVariants}>
            <SavingsAndLeakCards />
          </motion.section>

          {/* E) Before vs After Visualization */}
          <motion.section variants={itemVariants}>
            <BeforeAfterComparison />
          </motion.section>

          {/* F) Optimization Timeline */}
          <motion.section variants={itemVariants}>
            <OptimizationTimeline />
          </motion.section>

          {/* G) AI Summary */}
          <motion.section variants={itemVariants}>
            <AISummaryCard />
          </motion.section>

          {/* H) Share Card */}
          <motion.section variants={itemVariants} className="pb-12">
            <SharePreview />
          </motion.section>

        </motion.div>
      </div>
    </main>
  );
}
