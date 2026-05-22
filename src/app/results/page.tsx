"use client";

import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { HealthMeter } from "@/components/results/HealthMeter";
import { PersonalityCard } from "@/components/results/PersonalityCard";
import { SavingsAndLeakCards } from "@/components/results/SavingsCard";
import { BeforeAfterComparison } from "@/components/results/BeforeAfterComparison";
import { OptimizationTimeline } from "@/components/results/OptimizationTimeline";
import { AISummaryCard } from "@/components/results/AISummaryCard";
import { SharePreview } from "@/components/results/SharePreview";
import { DNAScanner } from "@/components/results/DNAScanner";
import { FloatingBackground } from "@/components/ui/FloatingBackground";

export default function ResultsPage() {
  const [scanning, setScanning] = useState(true);

  if (scanning) {
    return <DNAScanner onComplete={() => setScanning(false)} />;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariantsLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, type: "spring", bounce: 0.2 } }
  };

  const itemVariantsRight: Variants = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, type: "spring", bounce: 0.2 } }
  };

  const itemVariantsCenter: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, type: "spring", bounce: 0.2 } }
  };

  return (
    <main className="min-h-screen bg-muted/10 py-12 md:py-20 relative overflow-hidden">
      <FloatingBackground />
      
      <div className="container mx-auto max-w-screen-xl px-4 relative z-10">
        
        {/* Storytelling container with broken symmetry */}
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          animate="show"
          className="space-y-32 md:space-y-48"
        >
          
          {/* A) AI Spend Health Score - Centered intro */}
          <motion.section variants={itemVariantsCenter} className="pt-8">
            <HealthMeter 
              score={72} 
              status="Needs Optimization" 
              explanation="Your stack is powerful, but multiple subscriptions overlap and create hidden waste." 
            />
          </motion.section>

          {/* B) Stack Personality & Why - Large holographic centerpiece */}
          <motion.section variants={itemVariantsCenter}>
            <PersonalityCard />
          </motion.section>

          {/* C & D) Potential Savings & Biggest Leak - Staggered layout */}
          <motion.section variants={itemVariantsLeft} className="w-full md:w-3/4">
            <SavingsAndLeakCards />
          </motion.section>

          {/* E) Before vs After Visualization - Right heavy */}
          <motion.section variants={itemVariantsRight} className="w-full md:w-5/6 ml-auto">
            <BeforeAfterComparison />
          </motion.section>

          {/* F) Optimization Timeline - Left heavy */}
          <motion.section variants={itemVariantsLeft} className="w-full md:w-3/4">
            <OptimizationTimeline />
          </motion.section>

          {/* G) AI Summary - Centered */}
          <motion.section variants={itemVariantsCenter}>
            <AISummaryCard />
          </motion.section>

          {/* H) Share Card - Floating at bottom */}
          <motion.section variants={itemVariantsCenter} className="pb-12">
            <SharePreview />
          </motion.section>

        </motion.div>
      </div>
    </main>
  );
}
