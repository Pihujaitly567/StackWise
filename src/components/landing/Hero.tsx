"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { FloatingEcosystem } from "@/components/ui/FloatingEcosystem";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 30 });

  // Parallax transforms for different depths
  const layer1X = useTransform(springX, [0, 1], [-20, 20]);
  const layer1Y = useTransform(springY, [0, 1], [-15, 15]);
  const layer2X = useTransform(springX, [0, 1], [-35, 35]);
  const layer2Y = useTransform(springY, [0, 1], [-25, 25]);
  const layer3X = useTransform(springX, [0, 1], [-10, 10]);
  const layer3Y = useTransform(springY, [0, 1], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden bg-mesh bg-grid pt-20 pb-24 md:pt-28 md:pb-32 min-h-[90vh] flex flex-col justify-center"
    >
      {/* Subtle DNA Helix Background (SVG) */}
      <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-10 z-0 flex items-center justify-center">
        <svg width="100%" height="100%" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <path d="M 100 0 Q 300 150 100 300 T 100 600" fill="none" stroke="url(#hero-gradient)" strokeWidth="8" className="animate-helix" opacity="0.3"/>
          <path d="M 700 0 Q 500 150 700 300 T 700 600" fill="none" stroke="url(#hero-gradient)" strokeWidth="8" className="animate-helix" opacity="0.3"/>
          {/* Cross-links between strands */}
          {[60, 150, 240, 330, 420, 510].map((y, i) => (
            <line key={i} x1="150" y1={y} x2="650" y2={y} stroke="url(#hero-gradient)" strokeWidth="1" opacity="0.08" />
          ))}
          <defs>
            <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#818cf8" />
              <stop offset="50%" stopColor="#c084fc" />
              <stop offset="100%" stopColor="#f472b6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto max-w-screen-xl px-4 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        
        {/* Left Column: Text & CTAs */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-primary/20 bg-white/50 dark:bg-black/50 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-primary mb-6 shadow-sm"
          >
            Built for founders, hackers & startup teams
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-2xl font-extrabold tracking-tight text-5xl md:text-6xl lg:text-7xl mb-6 leading-[1.1]"
          >
            Your AI Stack <br className="hidden md:block"/> Has a <span className="gradient-text">Personality</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-xl text-xl md:text-2xl font-medium text-foreground/90 mb-4"
          >
            Discover hidden waste, optimize subscriptions, and decode your AI spending habits.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-lg text-base text-muted-foreground mb-8"
          >
            StackDNA analyzes your team&apos;s AI tools, identifies overspending, finds hidden inefficiencies, and shows smarter ways to save — in under 60 seconds.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 w-full mb-8 justify-center lg:justify-start"
          >
            <MagneticButton className="w-full sm:w-auto">
              <Link href="/audit">
                <Button size="lg" className="w-full rounded-full text-base font-semibold h-14 px-8 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all group">
                  Decode My Stack
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </MagneticButton>
            <MagneticButton className="w-full sm:w-auto">
              <Link href="/results?demo=true">
                <Button size="lg" className="w-full rounded-full text-base font-semibold h-14 px-8 bg-amber-500 hover:bg-amber-600 text-white shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all">
                  ✨ Try Demo Stack
                </Button>
              </Link>
            </MagneticButton>
            <Link href="/results" className="w-full sm:w-auto hidden sm:block">
              <Button variant="outline" size="lg" className="w-full rounded-full text-base h-14 px-8 bg-white/50 hover:bg-white/80 dark:bg-black/50 dark:hover:bg-black/80 backdrop-blur-sm border-primary/20 transition-all">
                See Example Report
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap justify-center lg:justify-start items-center gap-x-6 gap-y-3 text-xs md:text-sm font-medium text-muted-foreground"
          >
            <div className="flex items-center">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-1.5" />
              No sign-up required
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-1.5" />
              Results in under 30 sec
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-1.5" />
              Personalized AI insights
            </div>
          </motion.div>
        </div>

        {/* Right Column: Floating Visual Cards with Mouse Parallax */}
        <div className="flex-1 w-full relative h-[400px] lg:h-[500px] mt-12 lg:mt-0 flex items-center justify-center" style={{ perspective: "1000px" }}>
          {/* Animated Blob Background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
            <div className="w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float"></div>
            <div className="w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float-delayed -ml-16 mt-16"></div>
          </div>

          <div className="relative w-full max-w-md mx-auto">
            {/* Card 1: Health Score — Layer 1 depth */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -50, y: 50 }}
              animate={{ opacity: 1, scale: 1, x: -30, y: -60, rotate: -4 }}
              whileHover={{ scale: 1.08, rotate: 0, zIndex: 50 }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
              style={{ x: layer1X, y: layer1Y }}
              className="absolute left-0 top-1/2 -mt-16 w-56 cursor-pointer group"
            >
              <Card className="glass-card glow-indigo border-white/50 overflow-hidden holographic">
                <div className="h-1 w-full bg-gradient-to-r from-indigo-400 to-purple-400" />
                <CardContent className="p-4">
                  <div className="text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wider">AI Spend Health Score</div>
                  <div className="text-4xl font-black text-foreground flex items-baseline">
                    <span className="group-hover:text-indigo-500 transition-colors">72</span><span className="text-xl text-muted-foreground font-medium">/100</span>
                  </div>
                  <div className="mt-2 text-xs text-amber-500 font-medium">Needs Optimization</div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 2: Stack Type — Layer 2 depth */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 50, y: 50 }}
              animate={{ opacity: 1, scale: 1, x: 40, y: -120, rotate: 3 }}
              whileHover={{ scale: 1.08, rotate: 0, zIndex: 50 }}
              transition={{ duration: 0.6, delay: 0.1, type: "spring", bounce: 0.4 }}
              style={{ x: layer2X, y: layer2Y }}
              className="absolute right-0 top-1/2 -mt-16 w-64 cursor-pointer group"
            >
              <Card className="glass-card border-white/50 overflow-hidden holographic">
                <div className="h-1 w-full bg-gradient-to-r from-purple-400 to-pink-400" />
                <CardContent className="p-4">
                  <div className="text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wider">Stack Type</div>
                  <div className="text-xl font-bold text-foreground mb-2 group-hover:text-purple-500 transition-colors">AI Maximalist</div>
                  <p className="text-xs text-muted-foreground leading-tight">Your team adopted powerful AI tools quickly, but multiple subscriptions overlap.</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 3: Potential Savings — Layer 3 depth */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 100 }}
              animate={{ opacity: 1, scale: 1, x: -10, y: 50, rotate: -2 }}
              whileHover={{ scale: 1.08, rotate: 0, zIndex: 50 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring", bounce: 0.4 }}
              style={{ x: layer3X, y: layer3Y }}
              className="absolute left-1/2 -ml-32 top-1/2 w-64 cursor-pointer group"
            >
              <Card className="glass-card glow-coral border-white/50 overflow-hidden holographic">
                <div className="h-1 w-full bg-gradient-to-r from-emerald-400 to-teal-400" />
                <CardContent className="p-4">
                  <div className="text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wider">Potential Savings</div>
                  <div className="text-3xl font-black text-emerald-500 mb-1 group-hover:scale-105 origin-left transition-transform">$180<span className="text-base font-medium text-muted-foreground">/month</span></div>
                  <div className="text-xs font-medium text-foreground/80 bg-emerald-500/10 px-2 py-1 rounded inline-block">+$2,160/year</div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 4: Biggest Leak — Layer 1 depth */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 50, y: 100 }}
              animate={{ opacity: 1, scale: 1, x: 80, y: 80, rotate: 5 }}
              whileHover={{ scale: 1.08, rotate: 0, zIndex: 50 }}
              transition={{ duration: 0.6, delay: 0.3, type: "spring", bounce: 0.4 }}
              style={{ x: layer1X }}
              className="absolute right-0 top-1/2 mt-10 w-52 cursor-pointer group"
            >
              <Card className="glass-card border-white/50 overflow-hidden holographic">
                <div className="h-1 w-full bg-gradient-to-r from-rose-400 to-orange-400" />
                <CardContent className="p-4">
                  <div className="text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wider">Biggest Leak</div>
                  <div className="text-sm font-bold text-foreground group-hover:text-rose-500 transition-colors">Cursor Business</div>
                  <p className="text-xs text-muted-foreground mt-1">For a 5-person team, Pro tier is sufficient.</p>
                </CardContent>
              </Card>
            </motion.div>

          </div>
        </div>

      </div>

      <FloatingEcosystem />
    </section>
  );
}
