"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

export function AISummaryCard() {
  return (
    <div className="w-full max-w-3xl mx-auto py-8">
      <Card className="glass-card border-primary/20 bg-primary/5 shadow-md relative overflow-hidden group hover:shadow-lg transition-all">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors pointer-events-none" />
        <CardContent className="p-8">
          <div className="flex items-center space-x-2 mb-4">
            <Sparkles className="h-5 w-5 text-primary" />
            <h3 className="font-bold uppercase tracking-widest text-primary text-sm">Here&apos;s what StackDNA discovered...</h3>
          </div>
          
          <p className="text-lg text-foreground/90 leading-relaxed">
            Your DevFlow AI team is highly capable and heavily reliant on AI, but your stack is scattered. You are paying a premium for <span className="font-semibold text-rose-500">Cursor Business</span> when Pro would suffice, and maintaining redundant <span className="font-semibold text-rose-500">GitHub Copilot</span> subscriptions alongside it. Additionally, having both <span className="font-semibold text-amber-500">ChatGPT Team</span> and <span className="font-semibold text-amber-500">Claude Pro</span> for 5 users creates significant functional overlap. By pruning these redundancies, you can maintain 100% of your productivity while saving <span className="font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded">$180 every single month</span>.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
