"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ParallaxContainer } from "@/components/ui/ParallaxContainer";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] dark:bg-black min-h-[90vh] flex flex-col justify-center py-20">
      
      {/* Sleek, minimal background mesh instead of chaotic particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-[800px] bg-gradient-to-bl from-indigo-100/50 via-purple-50/30 to-transparent dark:from-indigo-900/20 dark:via-purple-900/10" />
      </div>

      <div className="container mx-auto max-w-screen-xl px-4 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Left Column: Museum-Quality Typography */}
        <div className="flex-1 flex flex-col items-start text-left max-w-2xl">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 flex items-center gap-3"
          >
            <div className="h-[1px] w-8 bg-foreground/30" />
            <span className="text-sm font-semibold tracking-[0.2em] text-foreground/60 uppercase">
              StackDNA Intelligence
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-black tracking-tighter text-6xl md:text-7xl lg:text-8xl mb-8 leading-[0.95] text-foreground"
          >
            Decode your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              AI Stack.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-lg md:text-xl text-foreground/60 leading-relaxed max-w-lg mb-12 font-light"
          >
            A profound analysis of your team&apos;s artificial intelligence subscriptions. Discover hidden redundancies, identify your behavioral stack personality, and reveal true financial optimization.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <Link href="/audit">
              <Button size="lg" className="rounded-full h-14 px-8 text-base font-semibold bg-foreground text-background hover:scale-105 transition-transform duration-300 shadow-2xl">
                Begin Analysis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/results?demo=true" className="group flex items-center text-sm font-semibold tracking-wider uppercase text-foreground/70 hover:text-foreground transition-colors">
              <span className="w-8 h-[1px] bg-foreground/30 mr-3 group-hover:w-12 transition-all duration-300" />
              View Demo Report
            </Link>
          </motion.div>
        </div>

        {/* Right Column: High-End 3D Visual Asset */}
        <div className="flex-1 w-full relative h-[600px] flex items-center justify-center pointer-events-auto perspective-[2000px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="w-full h-full flex items-center justify-center"
          >
            <ParallaxContainer strength={20} className="w-full h-full flex items-center justify-center cursor-crosshair">
              <div className="relative w-full aspect-square max-w-[600px] drop-shadow-2xl">
                <Image
                  src="/images/hero-3d.png"
                  alt="Abstract 3D AI Data Core"
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
              </div>
            </ParallaxContainer>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
