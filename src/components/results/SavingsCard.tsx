"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDownRight, AlertTriangle } from "lucide-react";

export function SavingsAndLeakCards() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 180, { duration: 2, ease: "easeOut" });
    return animation.stop;
  }, [count]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
      {/* Savings Card */}
      <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
        <Card className="h-full glass-card border-emerald-500/30 overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <CardContent className="p-8 relative z-10 flex flex-col justify-center h-full">
            <div className="text-sm font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2">Potential Savings</div>
            <div className="flex items-baseline text-emerald-500">
              <span className="text-4xl md:text-5xl font-black">$</span>
              <motion.span className="text-6xl md:text-7xl font-black tracking-tighter">{rounded}</motion.span>
              <span className="text-xl font-medium text-emerald-500/70 ml-1">/mo</span>
            </div>
            
            <div className="mt-6 flex items-center justify-between pt-4 border-t border-emerald-500/20">
              <div className="text-sm text-muted-foreground font-medium">Annual Impact</div>
              <div className="flex items-center text-lg font-bold text-foreground">
                $2160/year
                <ArrowDownRight className="ml-1 h-5 w-5 text-emerald-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Biggest Leak Card */}
      <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
        <Card className="h-full glass-card border-rose-500/30 overflow-hidden relative group">
          <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
            <AlertTriangle className="h-24 w-24 text-rose-500 -translate-y-1/4 translate-x-1/4" />
          </div>
          <CardContent className="p-8 relative z-10 flex flex-col justify-center h-full">
            <div className="flex items-center space-x-2 mb-4">
              <AlertTriangle className="h-5 w-5 text-rose-500" />
              <div className="text-sm font-bold uppercase tracking-widest text-rose-500">Biggest Leak</div>
            </div>
            
            <div className="text-3xl font-black text-foreground mb-4 drop-shadow-sm">
              Cursor Business
            </div>
            
            <p className="text-lg text-muted-foreground font-medium leading-relaxed bg-white/50 dark:bg-black/50 p-4 rounded-xl border border-rose-500/10">
              Business plan is unnecessary for a 5-person startup team.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
