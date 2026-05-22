"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ParallaxContainer } from "@/components/ui/ParallaxContainer";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] dark:bg-black min-h-screen flex flex-col justify-center items-center pt-20 pb-32">
      
      {/* Sleek, minimal background mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-[800px] bg-gradient-to-bl from-indigo-100/50 via-purple-50/30 to-transparent dark:from-indigo-900/20 dark:via-purple-900/10" />
      </div>

      {/* 
        IMMERSIVE 3D BACKGROUND (Vexel Vibe)
        The image is absolutely positioned in the center.
        mix-blend-multiply eliminates the white/gray square background, making the 3D object native to the page.
      */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 mt-20 opacity-80 mix-blend-multiply dark:mix-blend-screen">
        <ParallaxContainer strength={30} className="w-full h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-[120vw] max-w-[1200px] aspect-square opacity-60"
          >
            <Image
              src="/images/hero-3d.png"
              alt="Abstract 3D AI Data Core"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </ParallaxContainer>
      </div>

      {/* Floating Typography Over the 3D Environment */}
      <div className="container mx-auto max-w-screen-xl px-4 relative z-10 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex flex-col items-center gap-3"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-foreground/60 uppercase">
            StackDNA Intelligence
          </span>
          <div className="h-8 w-[1px] bg-foreground/20" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="font-black tracking-tighter text-7xl md:text-8xl lg:text-[140px] mb-8 leading-[0.9] text-foreground mix-blend-overlay dark:mix-blend-normal"
        >
          Decode your <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 drop-shadow-sm">
            AI Stack.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-lg md:text-2xl text-foreground/70 leading-relaxed max-w-2xl mb-12 font-light drop-shadow-sm bg-background/30 backdrop-blur-md py-4 px-8 rounded-3xl border border-white/20"
        >
          A profound analysis of your team&apos;s artificial intelligence subscriptions. Discover hidden redundancies, identify your behavioral stack personality, and reveal true financial optimization.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-8"
        >
          <Link href="/audit">
            <Button size="lg" className="rounded-full h-16 px-10 text-lg font-semibold bg-foreground text-background hover:scale-105 transition-transform duration-300 shadow-2xl">
              Begin Analysis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/results?demo=true" className="group flex items-center text-sm font-semibold tracking-[0.2em] uppercase text-foreground/70 hover:text-foreground transition-colors bg-background/50 backdrop-blur-md px-6 py-4 rounded-full border border-white/20">
            View Demo Report
          </Link>
        </motion.div>
      </div>
      
    </section>
  );
}
