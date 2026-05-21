"use client";

import { motion } from "framer-motion";
import { Sparkles, LineChart, Shield, Share2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Sparkles,
    title: "Smart Recommendations",
    description: "Our engine suggests exact downgrades and alternative tools that offer the same features for less.",
  },
  {
    icon: LineChart,
    title: "AI-Generated Insights",
    description: "Get personalized insights on your stack usage based on your team size and use cases.",
  },
  {
    icon: Shield,
    title: "Benchmarking",
    description: "See how your AI spend compares to similar startups in your industry and funding stage.",
  },
  {
    icon: Share2,
    title: "Shareable Reports",
    description: "Export clean, professional audit reports to share with your co-founders or investors.",
  },
];

export function FeatureCards() {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise-grade auditing</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to optimize your startup&apos;s AI tooling stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white dark:bg-black border-border/50 hover:border-primary/30 transition-colors shadow-sm hover:shadow-md group">
                <CardHeader>
                  <div className="h-12 w-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
