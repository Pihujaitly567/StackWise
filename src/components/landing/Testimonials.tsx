"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "StackWise helped us realize we were paying for 12 ChatGPT seats we didn't need since everyone was using Cursor anyway. Saved us $240/mo instantly.",
    author: "Sarah J.",
    role: "CTO, DataSync",
    initials: "SJ"
  },
  {
    quote: "The audit took exactly 2 minutes and highlighted overlaps I had no idea about. The ROI on this tool is literally infinite.",
    author: "Michael T.",
    role: "Founder, BuildRight",
    initials: "MT"
  },
  {
    quote: "We were burning cash on multiple AI APIs. StackWise recommended a unified approach that cut our API bill by 40% without losing functionality.",
    author: "Elena R.",
    role: "VP Engineering, FlowState",
    initials: "ER"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by fast-growing startups</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it. See how we&apos;ve helped others optimize their stack.
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
              <Card className="h-full bg-muted/30 border-none shadow-none">
                <CardContent className="p-8 flex flex-col h-full justify-between">
                  <p className="text-lg mb-8 italic text-foreground/80">&quot;{testimonial.quote}&quot;</p>
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                      {testimonial.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{testimonial.author}</div>
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
