"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function BeforeAfterComparison() {
  return (
    <div className="w-full max-w-5xl mx-auto py-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold tracking-tight">Stack Transformation</h3>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
        {/* Before */}
        <motion.div className="flex-1 w-full" whileHover={{ scale: 1.02 }}>
          <Card className="glass-card border-rose-500/20 bg-rose-500/5">
            <CardContent className="p-6">
              <div className="text-xs font-bold uppercase tracking-widest text-rose-500 mb-4 text-center">Current Stack</div>
              <ul className="space-y-3 mb-6">
                <li className="flex justify-between items-center text-sm font-medium"><span>ChatGPT Team (5 seats)</span><span className="text-muted-foreground">$150/mo</span></li>
                <li className="flex justify-between items-center text-sm font-medium"><span>Cursor Business (5 seats)</span><span className="text-muted-foreground">$100/mo</span></li>
                <li className="flex justify-between items-center text-sm font-medium"><span>Claude Pro (5 seats)</span><span className="text-muted-foreground">$100/mo</span></li>
                <li className="flex justify-between items-center text-sm font-medium"><span>GitHub Copilot (5 seats)</span><span className="text-muted-foreground">$50/mo</span></li>
              </ul>
              <div className="pt-4 border-t border-rose-500/20 flex justify-between items-center">
                <span className="font-bold text-muted-foreground">Total</span>
                <span className="text-2xl font-black text-foreground">$400<span className="text-sm font-medium">/mo</span></span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Animated Arrow */}
        <div className="flex-shrink-0 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="h-16 w-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg text-white md:rotate-0"
          >
            <ArrowRight className="hidden md:block h-8 w-8" />
            <ArrowDown className="md:hidden h-8 w-8" />
          </motion.div>
        </div>

        {/* After */}
        <motion.div className="flex-1 w-full" whileHover={{ scale: 1.02 }}>
          <Card className="glass-card border-emerald-500/30 bg-emerald-500/5 shadow-emerald-500/10 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400/20 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
            <CardContent className="p-6 relative z-10">
              <div className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-4 text-center">Optimized Stack</div>
              <ul className="space-y-3 mb-6">
                <li className="flex justify-between items-center text-sm font-medium"><span>ChatGPT Plus (Shared/Rotated)</span><span className="text-muted-foreground">$40/mo</span></li>
                <li className="flex justify-between items-center text-sm font-medium"><span>Cursor Pro (5 seats)</span><span className="text-muted-foreground">$100/mo</span></li>
                <li className="flex justify-between items-center text-sm font-medium"><span>Claude Team (Optional)</span><span className="text-muted-foreground">$80/mo</span></li>
                <li className="flex justify-between items-center text-sm font-medium text-rose-400 line-through"><span>GitHub Copilot</span><span className="text-muted-foreground">$0/mo</span></li>
              </ul>
              <div className="pt-4 border-t border-emerald-500/20 flex justify-between items-center">
                <span className="font-bold text-muted-foreground">Total</span>
                <span className="text-3xl font-black text-emerald-500">$220<span className="text-base font-medium">/mo</span></span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-8 text-center"
      >
        <div className="inline-flex items-center px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-bold text-lg">
          Savings: $180 / month
        </div>
      </motion.div>
    </div>
  );
}
