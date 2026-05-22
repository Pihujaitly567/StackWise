"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { ToolChip, ToolType } from "@/components/ui/ToolChip";

export function DNAScanner({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(0);

  const phases = [
    "Scanning Stack...",
    "Finding overlaps...",
    "Detecting subscription addiction...",
    "Calculating health score...",
    "Personality identified"
  ];

  useEffect(() => {
    let currentPhase = 0;
    const interval = setInterval(() => {
      currentPhase++;
      if (currentPhase < phases.length) {
        setPhase(currentPhase);
      } else {
        clearInterval(interval);
        
        // Final pulse + confetti
        const duration = 1.5 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

        const confettiInterval: ReturnType<typeof setInterval> = setInterval(function() {
          const timeLeft = animationEnd - Date.now();
          if (timeLeft <= 0) {
            return clearInterval(confettiInterval);
          }
          const particleCount = 50 * (timeLeft / duration);
          confetti({
            ...defaults, particleCount,
            origin: { x: randomInRange(0.1, 0.9), y: Math.random() - 0.2 },
            colors: ['#818cf8', '#c084fc', '#f472b6']
          });
        }, 250);

        setTimeout(() => {
          onComplete();
        }, 2000);
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [onComplete, phases.length]);

  const tools: ToolType[] = ["chatgpt", "cursor", "claude", "copilot", "gemini"];

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/95 backdrop-blur-3xl overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl max-h-2xl bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Giant Animated DNA Helix made from tools */}
      <div className="relative w-full max-w-lg h-96 flex flex-col items-center justify-center mb-16 perspective-[1000px]">
        
        {/* Connection line backdrop */}
        <div className="absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.5)]" />

        {tools.map((tool, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={tool}
              className="relative w-full flex items-center justify-center my-4"
              initial={{ rotateY: 0 }}
              animate={{ rotateY: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: index * 0.5 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Glowing connection line (the rung) */}
              <motion.div 
                className="absolute w-48 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
              />

              {/* Tool Chips at ends of rung */}
              <div 
                className="absolute" 
                style={{ transform: `translateX(${isEven ? '-100px' : '100px'}) rotateY(-${0}deg)` }}
              >
                <ToolChip tool={tool} size="sm" />
              </div>
              <div 
                className="absolute" 
                style={{ transform: `translateX(${isEven ? '100px' : '-100px'}) rotateY(-${0}deg)` }}
              >
                <ToolChip tool={tool === "chatgpt" ? "claude" : "gemini"} size="sm" className="opacity-50 blur-[2px] scale-75" />
              </div>
            </motion.div>
          );
        })}

        {/* Vertical Scan Line */}
        <motion.div 
          animate={{ y: [-200, 200] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_20px_rgba(255,255,255,1)] z-10"
        />

      </div>

      {/* Terminal Text Sequence */}
      <div className="text-center space-y-3 z-10 relative">
        <motion.div
          key={phase}
          initial={{ opacity: 0, y: 15, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -15, scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="font-mono text-2xl md:text-3xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-purple-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
        >
          {phases[phase]}<span className="animate-blink text-white">_</span>
        </motion.div>
        
        {/* Progress Bar */}
        <div className="w-64 h-1 bg-white/10 rounded-full mx-auto overflow-hidden mt-6">
          <motion.div 
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
            initial={{ width: "0%" }}
            animate={{ width: `${((phase + 1) / phases.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </div>
  );
}
