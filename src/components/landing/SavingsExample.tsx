"use client";

import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function SavingsExample() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-black/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-screen-xl px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Stop throwing money away</h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-lg leading-relaxed">
              Most startups pay for overlapping features across ChatGPT Plus, Claude Pro, and GitHub Copilot. Our audit finds these overlaps so you can cut costs immediately.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-white/10 border-white/20 backdrop-blur-md shadow-2xl text-white">
              <CardContent className="p-8">
                <div className="text-sm font-medium text-white/70 mb-2">Example: 5-person engineering team</div>
                <div className="flex justify-between items-end border-b border-white/20 pb-6 mb-6">
                  <div>
                    <div className="text-white/70 mb-1">Current Spend</div>
                    <div className="text-3xl font-semibold">$500 <span className="text-lg text-white/50 font-normal">/mo</span></div>
                  </div>
                  <div className="text-right">
                    <div className="text-white/70 mb-1">Potential Savings</div>
                    <div className="text-3xl font-bold text-green-400 flex items-center justify-end">
                      $170 <span className="text-lg text-green-400/50 font-normal ml-1">/mo</span>
                      <ArrowDownRight className="ml-2 h-6 w-6" />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span>Cancel 3 redundant ChatGPT Plus seats</span>
                    <span className="text-green-400">+$60/mo</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span>Downgrade to Cursor Pro yearly</span>
                    <span className="text-green-400">+$40/mo</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span>Consolidate API usage to Anthropic</span>
                    <span className="text-green-400">+$70/mo</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
