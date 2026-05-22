"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ToolChip } from "@/components/ui/ToolChip";
import { ParallaxContainer } from "@/components/ui/ParallaxContainer";

/* ─── The Meaningful Background (Neural Stack Core) ─── */
function NeuralStackCore() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 mix-blend-multiply dark:mix-blend-screen overflow-hidden">
      
      {/* Sweeping Scanner Beam */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute w-[150vw] h-[150vw] max-w-[2000px] max-h-[2000px] origin-center"
      >
        <div className="absolute top-1/2 right-1/2 w-[50%] h-[2px] bg-gradient-to-l from-indigo-500 to-transparent blur-[2px] shadow-[0_0_30px_rgba(99,102,241,0.8)]" />
        <div className="absolute top-1/2 right-1/2 w-[50%] h-[100px] bg-gradient-to-b from-indigo-500/10 to-transparent -translate-y-1/2" style={{ clipPath: 'polygon(100% 50%, 0 0, 0 100%)' }} />
      </motion.div>

      <ParallaxContainer strength={40} className="relative w-[800px] h-[800px] flex items-center justify-center">
        
        {/* Core Hub */}
        <div className="absolute w-32 h-32 rounded-full border border-indigo-500/30 bg-indigo-500/5 backdrop-blur-md flex items-center justify-center z-10 shadow-[0_0_50px_rgba(99,102,241,0.2)]">
          <div className="w-16 h-16 rounded-full border-2 border-indigo-400/50 border-dashed animate-spin-slow" />
          <div className="absolute w-8 h-8 rounded-full bg-indigo-500/20 blur-md animate-pulse" />
        </div>

        {/* SVG Connection Data Lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 800">
          <defs>
            <linearGradient id="cleanData" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#818cf8" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#c084fc" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="wasteData" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.4" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Clean connections */}
          <path d="M 400 400 L 200 200" stroke="url(#cleanData)" strokeWidth="2" fill="none" className="animate-pulse" />
          <path d="M 400 400 L 600 600" stroke="url(#cleanData)" strokeWidth="2" fill="none" className="animate-pulse" />
          <path d="M 400 400 L 150 500" stroke="url(#cleanData)" strokeWidth="2" fill="none" className="animate-pulse" />

          {/* Waste / Overlap connections (Red tangled lines) */}
          <path d="M 400 400 Q 600 200 500 150 T 650 250" stroke="url(#wasteData)" strokeWidth="3" fill="none" filter="url(#glow)" />
          <path d="M 400 400 Q 550 250 650 250" stroke="url(#wasteData)" strokeWidth="3" fill="none" strokeDasharray="5,5" className="animate-pulse" />
        </svg>

        {/* Orbiting Tool Nodes */}
        {/* Cursor: Clean Connection */}
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="absolute w-full h-full">
          <div className="absolute top-[180px] left-[180px] -rotate-45 scale-125">
            <ToolChip tool="cursor" size="lg" />
          </div>
        </motion.div>

        {/* GitHub Copilot: Clean Connection */}
        <motion.div animate={{ rotate: -360 }} transition={{ duration: 80, repeat: Infinity, ease: "linear" }} className="absolute w-full h-full">
          <div className="absolute bottom-[180px] right-[180px] rotate-45 scale-110">
            <ToolChip tool="copilot" size="md" />
          </div>
        </motion.div>
        
        {/* Gemini: Clean Connection */}
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 90, repeat: Infinity, ease: "linear" }} className="absolute w-full h-full">
          <div className="absolute top-[480px] left-[130px] rotate-12 scale-100">
            <ToolChip tool="gemini" size="md" />
          </div>
        </motion.div>

        {/* ChatGPT & Claude: The Overlap Area (Static, Tangled) */}
        <div className="absolute top-[120px] right-[150px] scale-150 z-20">
          <div className="relative">
            {/* Warning Glow */}
            <div className="absolute -inset-10 bg-rose-500/20 blur-3xl rounded-full animate-pulse" />
            <div className="absolute -left-12 top-4">
              <ToolChip tool="chatgpt" size="md" />
            </div>
            <div className="absolute left-4 -top-8">
              <ToolChip tool="claude" size="md" />
            </div>
            <div className="absolute left-8 top-12 bg-rose-500/90 text-white text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full border border-rose-400 shadow-xl">
              Overlap Detected
            </div>
          </div>
        </div>

      </ParallaxContainer>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] dark:bg-black min-h-screen flex flex-col justify-center items-center pt-20 pb-32">
      
      {/* Sleek, minimal background mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-[800px] bg-gradient-to-bl from-indigo-100/50 via-purple-50/30 to-transparent dark:from-indigo-900/20 dark:via-purple-900/10" />
      </div>

      {/* Meaningful Immersive Network */}
      <NeuralStackCore />

      {/* Floating Typography Over the Interactive Network */}
      <div className="container mx-auto max-w-screen-xl px-4 relative z-10 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex flex-col items-center gap-3"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-foreground/60 uppercase">
            StackDNA Intelligence
          </span>
          <div className="h-8 w-[1px] bg-foreground/20" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="font-black tracking-tighter text-7xl md:text-8xl lg:text-[140px] mb-8 leading-[0.9] text-foreground mix-blend-overlay dark:mix-blend-normal"
        >
          Decode your <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 drop-shadow-sm">
            AI Stack.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-lg md:text-2xl text-foreground/70 leading-relaxed max-w-2xl mb-12 font-light drop-shadow-sm bg-background/30 backdrop-blur-md py-4 px-8 rounded-3xl border border-white/20"
        >
          A profound analysis of your team&apos;s artificial intelligence subscriptions. Discover hidden redundancies, identify your behavioral stack personality, and reveal true financial optimization.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-8"
        >
          <Link href="/audit">
            <Button size="lg" className="rounded-full h-16 px-10 text-lg font-semibold bg-foreground text-background hover:scale-105 transition-transform duration-300 shadow-2xl">
              Begin Analysis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/results?demo=true" className="group flex items-center text-sm font-semibold tracking-[0.2em] uppercase text-foreground/70 hover:text-foreground transition-colors bg-background/50 backdrop-blur-md px-6 py-4 rounded-full border border-white/20">
            View Demo Report
          </Link>
        </motion.div>
      </div>
      
    </section>
  );
}
