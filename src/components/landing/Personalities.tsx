"use client";

import { motion } from "framer-motion";
import { Zap, Briefcase, Ghost, Layers } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const personalities = [
  {
    icon: Zap,
    title: "The AI Maximalist",
    description: "You adopt every new AI tool immediately. Fast, powerful, but you're definitely paying for overlapping features.",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    border: "group-hover:border-amber-500/50"
  },
  {
    icon: Briefcase,
    title: "The Enterprise Tourist",
    description: "You buy 'Business' or 'Enterprise' tiers for a 4-person team. Great security, terrible ROI.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "group-hover:border-blue-500/50"
  },
  {
    icon: Ghost,
    title: "The Silent Burner",
    description: "You have 15 active API keys and subscriptions that no one has logged into since last October.",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    border: "group-hover:border-purple-500/50"
  },
  {
    icon: Layers,
    title: "The Subscription Collector",
    description: "ChatGPT Plus, Claude Pro, Perplexity Pro, and Gemini Advanced. Pick a lane.",
    color: "text-pink-500",
    bg: "bg-pink-500/10",
    border: "group-hover:border-pink-500/50"
  },
  {
    icon: Zap,
    title: "The Efficient Hacker",
    description: "Lean stack. Minimal waste. Maximum output. You are using the exact right tools for your team.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "group-hover:border-emerald-500/50"
  }
];

export function Personalities() {
  return (
    <section className="py-24 bg-white dark:bg-black relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-screen-xl px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-4"
          >
            Stack DNA Profiles
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Meet Your Stack Personalities</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our engine categorizes your spending habits into distinct profiles, making it easier to understand where your money is actually going.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {personalities.map((personality, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`h-full bg-white dark:bg-black/40 border-border/50 hover:shadow-xl transition-all duration-300 group cursor-pointer ${personality.border}`}>
                <CardHeader>
                  <div className={`h-12 w-12 rounded-2xl ${personality.bg} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300`}>
                    <personality.icon className={`h-6 w-6 ${personality.color}`} />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{personality.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-sm">{personality.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
