"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Clock, Calendar } from "lucide-react";

export function OptimizationTimeline() {
  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <h3 className="text-2xl font-bold tracking-tight text-center mb-10">Optimization Timeline</h3>
      
      <div className="relative border-l-2 border-primary/20 ml-4 md:ml-1/2 space-y-12">
        
        {/* Immediate */}
        <div className="relative pl-8 md:pl-0">
          <div className="md:w-1/2 md:pr-12 md:text-right relative">
            <div className="absolute left-[-41px] md:left-auto md:right-[-41px] top-0 h-10 w-10 rounded-full bg-emerald-500/20 flex items-center justify-center border-4 border-background z-10">
              <CheckCircle2 className="h-5 w-5 text-emerald-500" />
            </div>
            <h4 className="text-lg font-bold text-emerald-500 mb-2 mt-1">Immediate Fixes</h4>
            <Card className="glass-card border-none shadow-sm md:text-left">
              <CardContent className="p-5">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-emerald-500 font-bold mr-2">✓</span>
                    <span className="text-sm">Switch Cursor Business ($100) to Cursor Pro</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 font-bold mr-2">✓</span>
                    <span className="text-sm">Cancel standalone GitHub Copilot (redundant with Cursor)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 30 Days */}
        <div className="relative pl-8 md:pl-0 flex md:justify-end">
          <div className="md:w-1/2 md:pl-12 relative">
            <div className="absolute left-[-41px] top-0 h-10 w-10 rounded-full bg-amber-500/20 flex items-center justify-center border-4 border-background z-10">
              <Clock className="h-5 w-5 text-amber-500" />
            </div>
            <h4 className="text-lg font-bold text-amber-500 mb-2 mt-1">30-Day Opportunities</h4>
            <Card className="glass-card border-none shadow-sm">
              <CardContent className="p-5">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-amber-500 font-bold mr-2">•</span>
                    <span className="text-sm">Consolidate ChatGPT Team. Share a single Plus account if simultaneous usage is low.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Long Term */}
        <div className="relative pl-8 md:pl-0">
          <div className="md:w-1/2 md:pr-12 md:text-right relative">
            <div className="absolute left-[-41px] md:left-auto md:right-[-41px] top-0 h-10 w-10 rounded-full bg-indigo-500/20 flex items-center justify-center border-4 border-background z-10">
              <Calendar className="h-5 w-5 text-indigo-500" />
            </div>
            <h4 className="text-lg font-bold text-indigo-500 mb-2 mt-1">Long-term Strategy</h4>
            <Card className="glass-card border-none shadow-sm md:text-left">
              <CardContent className="p-5">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-indigo-500 font-bold mr-2">→</span>
                    <span className="text-sm">Evaluate Claude Team API usage vs UI subscription. A unified API gateway might be cheaper.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </div>
  );
}
