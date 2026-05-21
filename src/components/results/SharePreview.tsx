"use client";

import { motion } from "framer-motion";
import { Share2, BarChart3, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SharePreview() {
  return (
    <div className="w-full max-w-md mx-auto py-12 flex flex-col items-center">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold tracking-tight mb-2">Share your Stack Personality</h3>
        <p className="text-sm text-muted-foreground">Show your team (or Twitter) how efficient you are.</p>
      </div>

      {/* The Share Card (Spotify Wrapped Style) */}
      <motion.div 
        whileHover={{ scale: 1.02, rotate: 1 }}
        className="w-full aspect-[3/4] rounded-3xl p-8 flex flex-col justify-between text-white shadow-2xl relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700"
      >
        {/* Decorative background shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        <div className="absolute inset-0 bg-mesh opacity-20 mix-blend-overlay" />

        <div className="relative z-10 flex justify-between items-start">
          <div className="flex items-center space-x-2 bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
            <BarChart3 className="h-4 w-4" />
            <span className="font-bold tracking-tight text-sm">StackDNA</span>
          </div>
          <div className="text-xs font-semibold tracking-widest uppercase opacity-70">
            {new Date().getFullYear()}
          </div>
        </div>

        <div className="relative z-10 my-auto text-center">
          <div className="text-sm font-semibold uppercase tracking-widest opacity-80 mb-3">My Stack Personality</div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight drop-shadow-lg">
            AI <br/> Maximalist
          </h2>
          
          <div className="inline-block bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-4 w-full text-left">
            <div className="flex justify-between items-center mb-3 pb-3 border-b border-white/10">
              <span className="text-sm opacity-80">Health Score</span>
              <span className="text-xl font-bold">72<span className="text-sm opacity-50">/100</span></span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm opacity-80">Potential Savings</span>
              <span className="text-xl font-black text-emerald-400">$180<span className="text-sm opacity-50 font-normal">/mo</span></span>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-center opacity-60 text-xs font-medium">
          stackdna.app
        </div>
      </motion.div>

      <div className="flex gap-4 mt-8 w-full justify-center">
        <Button className="rounded-full shadow-lg gap-2 bg-indigo-500 hover:bg-indigo-600 text-white">
          <Share2 className="h-4 w-4" />
          Share to Twitter
        </Button>
        <Button variant="outline" className="rounded-full shadow-sm gap-2">
          <Download className="h-4 w-4" />
          Save Image
        </Button>
      </div>
    </div>
  );
}
