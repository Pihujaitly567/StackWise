"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function PersonalityCard() {
  return (
    <div className="space-y-6 max-w-3xl mx-auto w-full">
      {/* Spotify Wrapped Style Personality Card */}
      <motion.div
        whileHover={{ y: -5, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Card className="relative overflow-hidden border-none shadow-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white">
          {/* Animated background blobs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-float pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 animate-float-delayed pointer-events-none" />

          <CardContent className="p-10 flex flex-col md:flex-row items-center gap-8 relative z-10">
            <div className="h-32 w-32 shrink-0 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-inner">
              <Zap className="h-16 w-16 text-white" />
            </div>
            
            <div className="text-center md:text-left flex-1">
              <div className="text-sm font-semibold text-white/80 uppercase tracking-widest mb-2">Stack Personality</div>
              <h3 className="text-4xl md:text-5xl font-black mb-4 tracking-tight drop-shadow-md">AI Maximalist</h3>
              <p className="text-lg text-white/90 leading-relaxed font-medium">
                Your team adopted powerful AI tools quickly, but multiple subscriptions overlap and increase costs.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* "Why" Subcard */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="ml-auto w-[90%]"
      >
        <Card className="glass-card border-l-4 border-l-purple-500 relative before:content-[''] before:absolute before:-top-4 before:-left-6 before:w-6 before:h-8 before:border-l-2 before:border-b-2 before:border-purple-500/30 before:rounded-bl-xl">
          <CardContent className="p-5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-2">Why you got this personality</h4>
            <p className="text-sm text-foreground/80 leading-relaxed">
              You use multiple premium tools (ChatGPT Team + Claude Pro) with overlapping functionality, and your plan choices (Cursor Business) exceed your 5-person startup scale needs.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
