"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { ToolChip, ToolType } from "@/components/ui/ToolChip";

export function BeforeAfterComparison() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [phase, setPhase] = useState<"chaos" | "vortex" | "optimized">("chaos");
  const [savingsCount, setSavingsCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer1 = setTimeout(() => setPhase("vortex"), 2500);
      const timer2 = setTimeout(() => setPhase("optimized"), 4500);
      return () => { clearTimeout(timer1); clearTimeout(timer2); };
    }
  }, [isInView]);

  useEffect(() => {
    if (phase === "optimized") {
      let current = 0;
      const target = 180;
      const step = target / 30; // 30 steps
      const interval = setInterval(() => {
        current += step;
        if (current >= target) {
          setSavingsCount(target);
          clearInterval(interval);
        } else {
          setSavingsCount(Math.floor(current));
        }
      }, 30);
      return () => clearInterval(interval);
    }
  }, [phase]);

  // Tools in chaotic phase
  const chaoticTools: { type: ToolType; label: string; startPos: { x: number; y: number } }[] = [
    { type: "chatgpt", label: "Team Plan", startPos: { x: -150, y: -80 } },
    { type: "claude", label: "Duplicate", startPos: { x: 120, y: -100 } },
    { type: "cursor", label: "$100/mo (Business)", startPos: { x: 160, y: 60 } },
    { type: "copilot", label: "Unused", startPos: { x: -120, y: 90 } },
    { type: "gemini", label: "Trial Expiring", startPos: { x: 0, y: 120 } }
  ];

  // Tools in optimized phase
  const optimizedTools: ToolType[] = ["chatgpt", "cursor", "claude"];

  return (
    <div ref={containerRef} className="w-full max-w-5xl mx-auto py-16 relative">
      <div className="text-center mb-16">
        <h3 className="text-3xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
          Stack Transformation
        </h3>
        <p className="text-muted-foreground mt-2">Watch the waste disappear.</p>
      </div>

      <div className="relative h-[400px] w-full flex items-center justify-center">
        
        {/* Phase 1: Chaos */}
        <AnimatePresence>
          {phase === "chaos" && (
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              exit={{ opacity: 0, scale: 0.5, filter: "blur(10px)" }}
              transition={{ duration: 1 }}
            >
              {chaoticTools.map((tool, i) => (
                <motion.div
                  key={i}
                  initial={{ x: 0, y: 0, opacity: 0 }}
                  animate={{ 
                    x: tool.startPos.x + (i % 2 === 0 ? 10 : -10), 
                    y: tool.startPos.y + (i % 3 === 0 ? -10 : 10),
                    opacity: 1
                  }}
                  transition={{ 
                    x: { duration: 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: i * 0.1 },
                    y: { duration: 2.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: i * 0.1 },
                    opacity: { duration: 0.5 }
                  }}
                  className="absolute"
                >
                  <ToolChip tool={tool.type} size="md" />
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-rose-500/20 border border-rose-500/50 text-rose-300 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider backdrop-blur-md">
                    {tool.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Phase 2: Vortex */}
        <AnimatePresence>
          {phase === "vortex" && (
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 2 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0, filter: "blur(20px)" }}
              transition={{ duration: 1.5 }}
            >
              <div className="w-64 h-64 rounded-full bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-600 blur-2xl animate-spin" style={{ animationDuration: '2s' }} />
              <div className="absolute w-32 h-32 rounded-full bg-white blur-xl animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Phase 3: Optimized Clean Formation */}
        <AnimatePresence>
          {phase === "optimized" && (
            <motion.div 
              className="absolute inset-0 flex flex-col items-center justify-center gap-10"
              initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            >
              <div className="flex items-center gap-6 md:gap-12 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl relative">
                {/* Glowing backdrop for the platform */}
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-emerald-500/20 blur-xl rounded-3xl -z-10" />

                {optimizedTools.map((tool, i) => (
                  <motion.div 
                    key={tool}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 + 0.5 }}
                  >
                    <ToolChip tool={tool} size="lg" />
                  </motion.div>
                ))}
              </div>

              {/* Savings Counter */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="text-center"
              >
                <div className="text-sm font-bold uppercase tracking-widest text-emerald-400 mb-2">Monthly Savings</div>
                <div className="flex items-baseline justify-center text-emerald-400">
                  <span className="text-5xl md:text-7xl font-black drop-shadow-[0_0_20px_rgba(52,211,153,0.5)]">
                    ${savingsCount}
                  </span>
                  <span className="text-xl font-medium opacity-70 ml-1">/mo</span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
