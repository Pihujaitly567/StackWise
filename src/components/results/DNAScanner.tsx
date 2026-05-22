"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function DNAScanner({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(0);

  const phases = [
    "Scanning stack topology...",
    "Finding functional overlaps...",
    "Analyzing spending behavior...",
    "Personality detected."
  ];

  useEffect(() => {
    let currentPhase = 0;
    const interval = setInterval(() => {
      currentPhase++;
      if (currentPhase < phases.length) {
        setPhase(currentPhase);
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 800);
      }
    }, 1200);

    return () => clearInterval(interval);
  }, [onComplete, phases.length]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
      {/* Animated Glowing DNA core */}
      <div className="relative w-64 h-64 flex items-center justify-center mb-12">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border border-primary/20 border-t-primary/80 border-b-primary/80"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-4 rounded-full border border-purple-500/20 border-l-purple-500/80 border-r-purple-500/80"
        />
        
        {/* Core glowing orb */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-16 h-16 bg-primary rounded-full blur-xl"
        />
        
        {/* Scanning line */}
        <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-80 animate-scan drop-shadow-[0_0_10px_rgba(255,255,255,1)]" />
        </div>
      </div>

      {/* Terminal text */}
      <div className="text-center space-y-2">
        <motion.div
          key={phase}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="font-mono text-xl md:text-2xl font-bold tracking-tight text-primary"
        >
          {phases[phase]}<span className="animate-blink">_</span>
        </motion.div>
        <div className="text-xs text-muted-foreground font-mono uppercase tracking-widest mt-4">
          StackDNA Neural Audit Engine
        </div>
      </div>
    </div>
  );
}
