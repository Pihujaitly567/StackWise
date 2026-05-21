"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "We discovered we were paying for overlapping AI subscriptions. StackDNA found $400/mo in savings in literal seconds.",
    author: "Sarah J.",
    role: "Founder, SaaS Startup",
    initials: "SJ",
    color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
  },
  {
    quote: "StackDNA surfaced spending inefficiencies we genuinely missed. The personalized recommendations were spot on.",
    author: "Michael T.",
    role: "Engineering Lead",
    initials: "MT",
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400"
  },
  {
    quote: "Our 'Subscription Collector' personality was painfully accurate. We consolidated everything and extended our runway.",
    author: "Elena R.",
    role: "CEO, DevTools Inc.",
    initials: "ER",
    color: "bg-pink-500/10 text-pink-600 dark:text-pink-400"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            Simulated Reviews
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Don&apos;t just take our word for it</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See how teams are decoding their stack. (These are mocked examples for demonstration).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white dark:bg-black/50 border-border/50 hover:border-primary/30 transition-all hover:shadow-md hover:-translate-y-1">
                <CardContent className="p-8 flex flex-col h-full justify-between">
                  <p className="text-lg mb-8 italic text-foreground/80 leading-relaxed">&quot;{testimonial.quote}&quot;</p>
                  <div className="flex items-center space-x-4">
                    <div className={`h-12 w-12 rounded-full flex items-center justify-center font-bold text-sm ${testimonial.color}`}>
                      {testimonial.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-foreground">{testimonial.author}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.role}</div>
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

