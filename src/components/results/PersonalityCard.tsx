"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ParallaxContainer } from "@/components/ui/ParallaxContainer";

export function PersonalityCard() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto w-full px-4">
      <ParallaxContainer strength={12}>
        <Card className="relative overflow-hidden border-white/20 shadow-2xl bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-950 text-white holographic min-h-[400px] flex items-center">
          {/* Animated background blobs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-float pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 animate-float-delayed pointer-events-none" />
          <div className="absolute inset-0 bg-mesh opacity-30 mix-blend-overlay pointer-events-none" />

          <CardContent className="p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 relative z-10 w-full">
            <motion.div 
              initial={{ scale: 0.8, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
              className="h-40 w-40 shrink-0 rounded-3xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-[0_0_40px_rgba(168,85,247,0.4)] relative"
            >
              <div className="absolute inset-0 rounded-3xl border border-white/40 border-t-white/80 border-l-white/60 pointer-events-none" />
              <Zap className="h-20 w-20 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
            </motion.div>
            
            <div className="text-center md:text-left flex-1">
              <div className="text-sm font-semibold text-purple-300 uppercase tracking-widest mb-3 flex items-center justify-center md:justify-start gap-2">
                <span className="w-8 h-[1px] bg-purple-400"></span>
                Stack Personality
              </div>
              <h3 className="text-5xl md:text-6xl font-black mb-6 tracking-tight drop-shadow-xl text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/60">
                AI Maximalist
              </h3>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light max-w-lg">
                Your team adopted powerful AI tools quickly, but multiple subscriptions overlap and increase costs unnecessarily.
              </p>
            </div>
          </CardContent>
        </Card>
      </ParallaxContainer>

      {/* "Why" Subcard - Shifted to the right for asymmetry */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, type: "spring" }}
        className="ml-auto w-full md:w-[80%]"
      >
        <Card className="glass-card border-l-4 border-l-purple-500 relative bg-white/60 dark:bg-black/60 backdrop-blur-xl">
          <CardContent className="p-6 md:p-8">
            <h4 className="text-sm font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
              Why you got this
            </h4>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
              You use multiple premium tools (<span className="font-semibold">ChatGPT Team + Claude Pro</span>) with overlapping functionality, and your plan choices (<span className="font-semibold text-rose-500">Cursor Business</span>) exceed your 5-person startup scale needs.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
