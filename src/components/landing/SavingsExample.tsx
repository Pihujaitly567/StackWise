"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Users } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const results = [
  {
    team: "5 people",
    stack: "ChatGPT Team + Cursor Business + Claude Pro",
    before: 620,
    after: 410,
    savings: 210,
    delay: 0.1
  },
  {
    team: "12 people",
    stack: "12x ChatGPT Plus + 8x GitHub Copilot + Gemini Adv",
    before: 340,
    after: 200,
    savings: 140,
    delay: 0.2
  },
  {
    team: "3 people (Founders)",
    stack: "Perplexity Pro + ChatGPT Plus + Claude Pro + Cursor Pro",
    before: 260,
    after: 120,
    savings: 140,
    delay: 0.3
  }
];

export function RealResults() {
  return (
    <section className="py-24 bg-white dark:bg-black relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-screen-xl px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Real Results</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See how startups are optimizing their stack and extending their runway.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: result.delay }}
            >
              <Card className="h-full bg-white dark:bg-black/50 border-border/50 hover:border-primary/30 transition-all hover:shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-2 text-sm font-semibold text-muted-foreground bg-muted/50 w-fit px-3 py-1 rounded-full mb-2">
                    <Users className="h-4 w-4" />
                    <span>{result.team}</span>
                  </div>
                  <h3 className="font-medium text-sm leading-tight text-foreground/80 h-10">{result.stack}</h3>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-end border-b border-border/50 pb-4 mb-4">
                    <div>
                      <div className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">Before</div>
                      <div className="text-2xl font-semibold opacity-70">${result.before} <span className="text-sm font-normal">/mo</span></div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">After</div>
                      <div className="text-3xl font-bold">${result.after} <span className="text-sm font-normal">/mo</span></div>
                    </div>
                  </div>
                  
                  <div className="bg-emerald-500/10 rounded-lg p-3 flex justify-between items-center text-emerald-600 dark:text-emerald-400">
                    <span className="text-sm font-bold uppercase tracking-wider">Savings</span>
                    <div className="flex items-center text-lg font-black">
                      ${result.savings}/mo
                      <ArrowDownRight className="ml-1 h-5 w-5" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

