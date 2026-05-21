"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-mesh pt-24 pb-32 md:pt-32 md:pb-40">
      <div className="container mx-auto max-w-screen-xl px-4 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
          Stack audit engine v1.0 is live
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl font-bold tracking-tight text-5xl md:text-7xl mb-6"
        >
          Stop Overpaying For <span className="gradient-text">AI Tools</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-10"
        >
          Instantly discover hidden savings across ChatGPT, Claude, Cursor and your entire AI stack.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link href="/audit" className="w-full sm:w-auto">
            <Button size="lg" className="w-full rounded-full text-base h-14 px-8 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all group">
              Run Free Audit
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <p className="sm:hidden text-xs text-muted-foreground mt-2">Takes less than 2 minutes</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm text-muted-foreground"
        >
          <div className="flex items-center">
            <CheckCircle2 className="h-4 w-4 text-primary mr-2" />
            No credit card required
          </div>
          <div className="flex items-center">
            <CheckCircle2 className="h-4 w-4 text-primary mr-2" />
            Instant results
          </div>
          <div className="flex items-center">
            <CheckCircle2 className="h-4 w-4 text-primary mr-2" />
            Join 2,000+ founders
          </div>
        </motion.div>
      </div>
    </section>
  );
}
